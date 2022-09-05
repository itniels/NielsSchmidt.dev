using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using NielsSchmidt.Server.BL.Configuration;
using NielsSchmidt.Shared.Models;

namespace NielsSchmidt.Server.BL.Mail
{
	public class MailService : IMailService
	{
		private IOptions<MailServiceOptions> _config;

		public MailService(IOptions<MailServiceOptions> config)
		{
			_config = config;
		}

		public async Task<bool> SendMessage(EmailMessageModel message)
		{
			using (var client = new SmtpClient())
			{
				// Setup SMTP client
				client.UseDefaultCredentials = false;
				client.Host = _config.Value.Host;
				client.Port = _config.Value.Port;
				client.EnableSsl = true;
				client.DeliveryMethod = SmtpDeliveryMethod.Network;

				client.Credentials = new NetworkCredential {
					UserName = _config.Value.Username,
					Password = _config.Value.Password
				};

				// Setup message
				var mailMessage = await CreateMailFromMessage(message);

				// Send message
				await client.SendMailAsync(mailMessage);
			}

			return false;
		}

		private async Task<MailMessage> CreateMailFromMessage(EmailMessageModel message)
		{
			var msg = new MailMessage();
			msg.From = new MailAddress(_config.Value.SendFromAddress);
			msg.To.Add(new MailAddress(_config.Value.SendToAddress));
			msg.Subject = "New contact form message";
			msg.Body = await GetBodyFromMessage(message);
			msg.IsBodyHtml = true;

			return msg;
		}

		private async Task<string> GetBodyFromMessage(EmailMessageModel message)
		{
			return @$"
<strong>From:</strong> '{message.Name}' <br />
<strong>Email:</strong> '{message.FromEmail}' <br />
<strong>Type:</strong> '{message.Title}'. <br />
<br />
<hr />
<p>
{message.Body}
</p>
";
		}
	}
}

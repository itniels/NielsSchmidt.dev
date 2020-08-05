using System.Net;
using System.Net.Mail;
using Backend.Modules.Email;

namespace Backend.Modules.ContactForm
{
	public static class ContactFormFunctions
	{
		public static void SendMessage(ContactFormModel model, SmtpConfig smtpConfig)
		{
			var title = GetTitleFromType(model.Type);

			var body = $@"
<strong>From:</strong> '{model.Name}' <br />
<strong>Email:</strong> '{model.Email}' <br />
<strong>Type:</strong> '{title}'. <br />
<br />
<hr />
<p>
{model.Message}
</p>";

			var message = new MailMessage();
			message.To.Add(new MailAddress(smtpConfig.SendToAddress));
			message.From = new MailAddress(smtpConfig.SendFromAddress);
			message.Subject = title;
			message.Body = body;
			message.IsBodyHtml = true;

			using (var smtp = new SmtpClient())
			{
				smtp.UseDefaultCredentials = false;
				smtp.Host = smtpConfig.SmtpHost;
				smtp.Port = smtpConfig.SmtpPort;
				smtp.EnableSsl = true;
				smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

				smtp.Credentials = new NetworkCredential {
					UserName = smtpConfig.SmtpUsername,
					Password = smtpConfig.SmtpPassword,
				};

				smtp.SendMailAsync(message).Wait();
			}
		}

		private static string GetTitleFromType(ContactFormMessageType type)
		{
			switch (type)
			{
				case ContactFormMessageType.SayHello:
					return "Someone wants to say hello!";
				case ContactFormMessageType.InviteToInterview:
					return "Someone wants to invite to interview!";
				case ContactFormMessageType.Hire:
					return "Someone wants to hire!";
				default:
					return "";
			}
		}
	}
}
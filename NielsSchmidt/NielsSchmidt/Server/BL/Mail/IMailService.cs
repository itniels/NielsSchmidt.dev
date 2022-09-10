using NielsSchmidt.Shared.Models;

namespace NielsSchmidt.Server.BL.Mail
{
	public interface IMailService
	{
		Task<bool> SendMessage(EmailMessageModel message);
	}
}

using Microsoft.AspNetCore.Mvc;
using NielsSchmidt.Server.BL.Mail;
using NielsSchmidt.Shared.Models;

namespace NielsSchmidt.Server.Controllers
{
	[Route("[controller]/[action]")]
	[ApiController]
	public class ContactController : ControllerBase
	{
		private IMailService _mailService;

		public ContactController(IMailService mailService)
		{
			_mailService = mailService;
		}

		public async Task<IActionResult> SendMail(EmailMessageModel message)
		{
			await _mailService.SendMessage(message);

			return Ok();
		}
	}
}

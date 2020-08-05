using Backend.Modules.ContactForm;
using Microsoft.AspNetCore.Mvc;
using Web.BL;

namespace Web.Controllers
{
	[Route("[controller]/[Action]")]
	[ApiController]
	public class ContactController : ControllerBase
	{
		public IActionResult SendMessage(ContactFormModel model)
		{
			ContactFormFunctions.SendMessage(model, ConfigReader.SmtpConfiguration);

			return Ok();
		}
	}
}

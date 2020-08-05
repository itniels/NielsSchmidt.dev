namespace Backend.Modules.ContactForm
{
	public class ContactFormModel
	{
		public string Name { get; set; }
		public string Email { get; set; }
		public string Message { get; set; }
		public ContactFormMessageType Type { get; set; }
	}
}

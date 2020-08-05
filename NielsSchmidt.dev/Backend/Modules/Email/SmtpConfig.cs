namespace Backend.Modules.Email
{
	public class SmtpConfig
	{
		public string SendToAddress { get; set; }
		public string SendFromAddress { get; set; }
		public string SmtpHost { get; set; }
		public int SmtpPort { get; set; }
		public string SmtpUsername { get; set; }
		public string SmtpPassword { get; set; }
	}
}

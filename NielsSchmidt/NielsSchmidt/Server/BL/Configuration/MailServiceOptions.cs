namespace NielsSchmidt.Server.BL.Configuration
{
	public class MailServiceOptions
	{
		public string Host { get; set; }
		public int Port { get; set; }
		public string Username { get; set; }
		public string Password { get; set; }
		public string SendToAddress { get; set; }
		public string SendFromAddress { get; set; }
	}
}

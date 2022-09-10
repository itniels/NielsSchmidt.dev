namespace NielsSchmidt.Shared.Models
{
	public class EmailMessageModel
	{
		public string Name { get; set; }
		public string Title { get; set; }
		public string Body { get; set; }
		public string FromEmail { get; set; }

		public bool CanSend =>
			!string.IsNullOrWhiteSpace(Name)
			&& !string.IsNullOrWhiteSpace(Title)
			&& !string.IsNullOrWhiteSpace(Body)
			&& !string.IsNullOrWhiteSpace(FromEmail);
	}
}

namespace Backend
{
	public static class CoreConstants
	{
		public static class Versioning
		{
			public static string VersionPrefix = "";
			public static string VersionNumber = "0.0.0";
			public static string VersionPostfix = "";
			public static string VersionString => $"{VersionPrefix}{VersionNumber}{VersionPostfix}";
		}
	}
}

using System;
using System.IO;
using System.Reflection;
using Backend.Modules.Email;
using Microsoft.Extensions.Configuration;

namespace Web.BL
{
	internal static class ConfigReader
	{
		private static IConfigurationRoot Configuration;

		public static void InitConfig()
		{
			try
			{
				Configuration = new ConfigurationBuilder()
					.SetBasePath(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location))
					.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
					.Build();
			}
			catch
			{
				throw new Exception("Failed to load configuration!");
			}
		}

		// Slack
		public static SmtpConfig SmtpConfiguration { get { return Configuration.GetSection("SmtpConfiguration").Get<SmtpConfig>(); } }
		public static string SlackUsername { get { return Configuration["SlackUsername"]; } }
		public static int ListenPort { get { return int.Parse(Configuration["ListenPort"]); } }
	}
}

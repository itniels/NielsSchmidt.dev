using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Web.BL;

namespace Web
{
	public class Program
	{
		public static void Main(string[] args)
		{
			ConfigReader.InitConfig();
			CreateHostBuilder(args).Build().Run();
		}

		public static IHostBuilder CreateHostBuilder(string[] args) =>
				Host.CreateDefaultBuilder(args)
						.ConfigureWebHostDefaults(webBuilder => {
							webBuilder.UseStartup<Startup>()
							.UseKestrel(opt => opt.ListenLocalhost(ConfigReader.ListenPort));
						});
	}
}

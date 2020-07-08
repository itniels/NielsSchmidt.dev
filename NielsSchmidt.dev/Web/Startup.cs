using System.Reflection;
using Backend;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Web
{
	public class Startup
	{
		public static IHostEnvironment HostingEnvironment = null;

		public Startup(IConfiguration configuration, IHostEnvironment env)
		{
			HostingEnvironment = env;
			CoreEnvironment.IsProduction = HostingEnvironment.IsProduction();
			CoreEnvironment.RootPath = env.ContentRootPath;
			Configuration = configuration;
			CoreConstants.Versioning.VersionNumber = CoreFunctions.ParseVersion(Assembly.GetEntryAssembly().GetName().Version);
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllersWithViews();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints => {
				endpoints.MapControllerRoute(
						name: "default",
						pattern: "{controller=Home}/{action=Index}/{id?}");
			});
		}
	}
}

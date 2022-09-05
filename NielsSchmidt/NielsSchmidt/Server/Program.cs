using Blazored.LocalStorage;
using Microsoft.AspNetCore.Hosting.StaticWebAssets;
using NielsSchmidt.Server.BL.Configuration;
using NielsSchmidt.Server.BL.Mail;

var builder = WebApplication.CreateBuilder(args);

StaticWebAssetsLoader.UseStaticWebAssets(builder.Environment, builder.Configuration);

// Configuration
builder.Services.AddOptions();

//var json = builder.Environment.IsDevelopment() ? "appsettings.Development.json" : "appsettings.json";
//var conf = new ConfigurationBuilder()
//	.SetBasePath(builder.Environment.ContentRootPath)
//	.AddJsonFile(json, optional: true, reloadOnChange: true);

//builder.Configuration.AddConfiguration(conf.Build());
builder.Services.Configure<MailServiceOptions>(builder.Configuration.GetSection(nameof(MailServiceOptions)));
//builder.Services.AddOptions<MailServiceOptions>(nameof(MailServiceOptions));

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddSingleton<IMailService, MailService>();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseWebAssemblyDebugging();
}
else
{
	app.UseExceptionHandler("/Error");
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();
app.UseRouting();

app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();

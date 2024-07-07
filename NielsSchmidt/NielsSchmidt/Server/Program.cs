using Blazored.LocalStorage;
using Microsoft.AspNetCore.Hosting.StaticWebAssets;
using NielsSchmidt.Server.BL.Configuration;
using NielsSchmidt.Server.BL.Mail;

var builder = WebApplication.CreateBuilder(args);

StaticWebAssetsLoader.UseStaticWebAssets(builder.Environment, builder.Configuration);

// Configuration
builder.Services.AddOptions();
builder.Services.Configure<MailServiceOptions>(builder.Configuration.GetSection(nameof(MailServiceOptions)));

// Configure Kestrel
//builder.WebHost.UseKestrel(kestrel => {
//	kestrel.Limits.MaxRequestBodySize = long.MaxValue;
//});

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

//app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();
app.UseRouting();
app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();
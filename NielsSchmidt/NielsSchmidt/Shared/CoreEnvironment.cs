using System.Reflection;

namespace NielsSchmidt.Shared
{
	public static class CoreEnvironment
	{
		public static string Version = ParseVersion(Assembly.GetEntryAssembly()!.GetName().Version!);

		private static string ParseVersion(Version version) => $"{version.Major}.{version.Minor}.{version.Build}";
	}
}

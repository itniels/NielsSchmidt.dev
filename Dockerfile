# Use the official .NET SDK 7 base image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set version from github action
ARG BUILD_VERSION

# Set the working directory
WORKDIR /app

# Copy the project files to the working directory
COPY ./NielsSchmidt .

# Build the Blazor WASM project
RUN dotnet publish -c Release -o out -p:Version=${BUILD_VERSION}

# Use the official ASP.NET runtime 7 base image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

# Set the working directory to the published app
WORKDIR /app

# Copy the published app from the build image
COPY --from=build /app/out .

# Expose the port that the app will run on
EXPOSE 8080

# Define the entry point for the container
ENTRYPOINT ["dotnet", "NielsSchmidt.Server.dll"]
FROM mcr.microsoft.com/dotnet/sdk:8.0 as build
WORKDIR /app
EXPOSE 80

# copy all .csproj files and restore as distinct layers.  Use the same COPY
# for every dockerfile in the project to take advantage of Docker caching
COPY auctionX.sln auctionX.sln
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/SearchService/SearchService.csproj src/SearchService/SearchService.csproj
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj
COPY src/BiddingService/BiddingService.csproj src/BiddingService/BiddingService.csproj
COPY src/NotificationService/NotificationService.csproj src/NotificationService/NotificationService.csproj
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj
COPY tests/AuctionService.Unit.Tests/AuctionService.Unit.Tests.csproj tests/AuctionService.Unit.Tests/AuctionService.Unit.Tests.csproj
COPY tests/AuctionService.IntegrationTests/AuctionService.IntegrationTests.csproj tests/AuctionService.IntegrationTests/AuctionService.IntegrationTests.csproj
COPY tests/SearchService.IntegrationTests/SearchService.IntegrationTests.csproj tests/SearchService.IntegrationTests/SearchService.IntegrationTests.csproj

# Restore package deps
RUN dotnet restore auctionX.sln

# Copy the app folders over
COPY src/IdentityService src/IdentityService
WORKDIR /app/src/IdentityService
RUN dotnet publish -c Release -o /app/src/out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT [ "dotnet", "IdentityService.dll" ]
# dotnet-nightwatch

## Setup

Build `dotnet-nightwatch` Docker image:

``` bash
docker build -t dotnet-nightwatch .
```

Run `journey_tests` Container from image

``` bash
docker run -i -t --name journey_tests dotnet-nightwatch
```

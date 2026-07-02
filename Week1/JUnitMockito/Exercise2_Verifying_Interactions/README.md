# Exercise 2: Verifying Interactions

## Overview
This exercise demonstrates how to verify interactions with mock objects using Mockito. Instead of verifying return values, we verify that specific methods were called on the mock object.

## Concepts Covered
- **Mock Objects**: Creating mock instances of external dependencies
- **Verify**: Verifying that methods were called on mock objects
- **Dependency Injection**: Injecting mock objects into the service

## Files
- `ExternalApi.java`: External API that provides data
- `MyService.java`: Service that uses the external API
- `MyServiceTest.java`: Test class that verifies method interactions

## Key Points
1. The `verify()` method checks if a method was called on a mock object
2. This is useful when you care about the interaction (method calls) rather than the return value
3. Verification helps ensure that your code is calling dependencies correctly

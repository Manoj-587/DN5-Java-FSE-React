# Singleton Pattern Example

## Objective

Implement the Singleton Design Pattern to ensure that only one instance of the Logger class exists throughout the application lifecycle.

## Classes

### Logger.java
- Contains a private static instance of Logger.
- Uses a private constructor to prevent object creation from outside the class.
- Provides a public static `getInstance()` method to access the single instance.
- Includes a `log()` method to print log messages.

### SingletonTest.java
- Tests the Singleton implementation.
- Retrieves Logger instances using `getInstance()`.
- Verifies that only one instance exists by comparing object references and hash codes.

## Expected Output

```text
Logger instance created.
[LOG] Application started.
[LOG] User logged in.
Only one Logger instance exists.
Logger1 HashCode: XXXXXXXX
Logger2 HashCode: XXXXXXXX
```

## Concepts Used

- Singleton Design Pattern
- Static Variables
- Private Constructor
- Object Reference Comparison

## Result

Successfully implemented the Singleton Design Pattern. Only one Logger instance was created and shared across the application.
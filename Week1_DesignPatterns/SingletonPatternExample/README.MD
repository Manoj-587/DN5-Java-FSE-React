# Singleton Pattern Example

## Objective
Implement the Singleton Design Pattern to ensure that only one instance of the Logger class exists throughout the application lifecycle.

## Classes

### Logger.java
- Private static instance of Logger
- Private constructor
- Public static getInstance() method
- log() method for logging messages

### SingletonTest.java
- Retrieves Logger instances
- Verifies that only one instance is created
- Prints hash codes of both references

## Output

```
Logger instance created.
[LOG] Application started.
[LOG] User logged in.
Only one Logger instance exists.
Logger1 HashCode: 1160460865
Logger2 HashCode: 1160460865
```

## Concepts Used
- Singleton Design Pattern
- Static Variables
- Private Constructor
- Object Reference Comparison

## Result
Successfully implemented the Singleton Design Pattern. Only one Logger instance was created and shared across the application.
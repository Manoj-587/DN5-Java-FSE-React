# Week 1 - Design Patterns

This folder contains the implementation of Design Pattern exercises for Cognizant Digital Nurture Java FSE.

---

## Exercise 1: Singleton Pattern

### Objective
Implement the Singleton Design Pattern to ensure that only one instance of the Logger class exists throughout the application lifecycle.

### Files
- Logger.java
- SingletonTest.java

### Concepts Used
- Singleton Design Pattern
- Static Variables
- Private Constructor
- Object Reference Comparison

### Expected Output

```text
Logger instance created.
[LOG] Application started.
[LOG] User logged in.
Only one Logger instance exists.
Logger1 HashCode: XXXXXXXX
Logger2 HashCode: XXXXXXXX
```

### Result
Successfully implemented the Singleton Design Pattern. Only one Logger instance is created and shared across the application.

---

## Exercise 2: Factory Method Pattern

### Objective
Implement the Factory Method Design Pattern to create different types of documents without exposing the object creation logic to the client.

### Document Types
- Word Document
- PDF Document
- Excel Document

### Files
- Document.java
- WordDocument.java
- PdfDocument.java
- ExcelDocument.java
- DocumentFactory.java
- WordDocumentFactory.java
- PdfDocumentFactory.java
- ExcelDocumentFactory.java
- FactoryMethodTest.java

### Concepts Used
- Factory Method Pattern
- Abstraction
- Inheritance
- Polymorphism

### Expected Output

```text
Opening Word Document
Opening PDF Document
Opening Excel Document
```

### Result
Successfully implemented the Factory Method Design Pattern using separate factory classes for creating different document types.


# Factory Method Pattern Example

## Objective

Implement the Factory Method Design Pattern to create different types of documents without exposing the object creation logic to the client.

## Document Types

- Word Document
- PDF Document
- Excel Document

## Classes

### Document.java
Interface representing a generic document.

### WordDocument.java
Concrete implementation of a Word document.

### PdfDocument.java
Concrete implementation of a PDF document.

### ExcelDocument.java
Concrete implementation of an Excel document.

### DocumentFactory.java
Abstract factory class containing the factory method `createDocument()`.

### WordDocumentFactory.java
Creates WordDocument objects.

### PdfDocumentFactory.java
Creates PdfDocument objects.

### ExcelDocumentFactory.java
Creates ExcelDocument objects.

### FactoryMethodTest.java
Demonstrates the creation of different document types using factory classes.

## Expected Output

```text
Opening Word Document
Opening PDF Document
Opening Excel Document
```

## Concepts Used

- Factory Method Pattern
- Abstraction
- Inheritance
- Polymorphism

## Result

Successfully implemented the Factory Method Design Pattern using separate factory classes to create different document types.
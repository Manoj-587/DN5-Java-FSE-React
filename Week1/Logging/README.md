# Logging with SLF4J and Logback

## Overview

This project demonstrates how to use **SLF4J (Simple Logging Facade for Java)** with **Logback** to log messages at different severity levels. It focuses on logging **ERROR** and **WARNING** messages in a Java application.

---

## Project Structure

```
Logging
├── pom.xml
├── README.md
└── src
    └── main
        ├── java
        │   └── com
        │       └── cognizant
        │           └── LoggingExample.java
        └── resources
            └── logback.xml
```

---

## Technologies Used

- Java 21
- Maven
- SLF4J 1.7.30
- Logback 1.2.3
- VS Code / IntelliJ IDEA

---

## Dependencies

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.30</version>
</dependency>

<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

---

## Features

- Logs **ERROR** messages.
- Logs **WARNING** messages.
- Uses SLF4J logging API.
- Uses Logback as the logging implementation.
- Console-based logging output.

---

## Sample Output

```
12:15:20 ERROR com.cognizant.LoggingExample - This is an error message
12:15:20 WARN  com.cognizant.LoggingExample - This is a warning message
```

---

## How to Run

### Using VS Code

1. Open the project folder.
2. Ensure Maven dependencies are downloaded.
3. Open `LoggingExample.java`.
4. Click **Run**.

### Using Maven

```bash
mvn compile
mvn exec:java -Dexec.mainClass="com.cognizant.LoggingExample"
```

---

## Logging Levels

- TRACE – Detailed debugging information.
- DEBUG – Debugging messages.
- INFO – General information.
- WARN – Warning messages.
- ERROR – Error messages.

---

## Learning Outcome

- Understand the purpose of logging.
- Configure SLF4J with Logback.
- Log warning and error messages.
- Manage logging output using Logback configuration.

---

## Author

**Mohammed Haani H**
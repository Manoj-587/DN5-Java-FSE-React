CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10,2)
);

INSERT INTO Accounts VALUES (1001,101,'Savings',25000);
INSERT INTO Accounts VALUES (1002,102,'Savings',18000);
INSERT INTO Accounts VALUES (1003,103,'Current',35000);
INSERT INTO Accounts VALUES (1004,104,'Savings',40000);
INSERT INTO Accounts VALUES (1005,105,'Savings',15000);

COMMIT;

INSERT INTO Employees VALUES (1,'Amit','IT',50000);
INSERT INTO Employees VALUES (2,'Priya','HR',45000);
INSERT INTO Employees VALUES (3,'Rahul','IT',60000);
INSERT INTO Employees VALUES (4,'Sneha','Finance',55000);
INSERT INTO Employees VALUES (5,'Kiran','HR',48000);

COMMIT;

--Scenario 1: Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully.');

END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

--Scenario 2: Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');

END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/

--Scenario 3: Transfer Funds
CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;

END;
/

BEGIN
    TransferFunds(1001,1002,5000);
END;
/
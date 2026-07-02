CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    DOB DATE,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER(10,2),
    InterestRate NUMBER(4,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);


INSERT INTO Customers VALUES
(101, 'Ramesh Kumar', DATE '1955-04-10', 15000, 'FALSE');

INSERT INTO Customers VALUES
(102, 'Suresh Patel', DATE '1995-06-15', 8000, 'FALSE');

INSERT INTO Customers VALUES
(103, 'Priya Sharma', DATE '1960-02-20', 12000, 'FALSE');

INSERT INTO Customers VALUES
(104, 'Anita Singh', DATE '1988-11-05', 25000, 'FALSE');

INSERT INTO Customers VALUES
(105, 'Rahul Verma', DATE '1948-09-25', 5000, 'FALSE');

COMMIT;


INSERT INTO Loans VALUES
(201, 101, 500000, 8.50, SYSDATE + 20);

INSERT INTO Loans VALUES
(202, 102, 300000, 9.20, SYSDATE + 60);

INSERT INTO Loans VALUES
(203, 103, 450000, 8.75, SYSDATE + 10);

INSERT INTO Loans VALUES
(204, 104, 700000, 9.00, SYSDATE + 90);

INSERT INTO Loans VALUES
(205, 105, 250000, 8.25, SYSDATE + 25);

COMMIT;

SELECT * FROM Customers;
SELECT * FROM Loans;

--Scenario 1: Apply a 1% Discount on Loan Interest Rates for Customers Above 60 Years

SET SERVEROUTPUT ON;

DECLARE
    v_age NUMBER;
BEGIN
    FOR rec IN (
        SELECT c.CustomerID,
               c.DOB,
               l.LoanID,
               l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
    ) LOOP

        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;

            DBMS_OUTPUT.PUT_LINE('Discount applied to Loan ID: ' || rec.LoanID);
        END IF;

    END LOOP;

    COMMIT;
END;
/

SELECT * FROM Loans;


--Scenario 2: Promote Customers to VIP

SET SERVEROUTPUT ON;

BEGIN

    FOR rec IN (
        SELECT CustomerID, Balance
        FROM Customers
    ) LOOP

        IF rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ' || rec.CustomerID || ' promoted to VIP.'
            );

        END IF;

    END LOOP;

    COMMIT;
END;
/

SELECT * FROM Customers;


--Scenario 3: Print Loan Reminders for Loans Due Within the Next 30 Days
SET SERVEROUTPUT ON;

BEGIN

    FOR rec IN (
        SELECT c.CustomerName,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || rec.CustomerName ||
            ', your Loan ID ' || rec.LoanID ||
            ' is due on ' ||
            TO_CHAR(rec.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;

END;
/




# Exercise 7: Financial Forecasting

## Objective
Develop a financial forecasting tool that predicts future values using a recursive algorithm.

## Concept of Recursion
Recursion is a technique where a method calls itself until a base condition is met.

## Formula

Future Value = Present Value × (1 + Growth Rate)^Years

## Files
- FinancialForecast.java

## Implementation
- Recursive future value prediction
- Base case: Years = 0
- Recursive case: Calculate future value for previous year and multiply by growth factor

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Recursive | O(n) | O(n) |
| Iterative | O(n) | O(1) |
| Math.pow() | O(log n) | O(1) |

## Sample Output

Current Value: 10000.00
Growth Rate: 10.00%
Years: 5
Predicted Future Value: 16105.10

## Conclusion
Recursion simplifies the forecasting logic, but mathematical functions such as Math.pow() provide better performance and lower memory usage in real-world applications.
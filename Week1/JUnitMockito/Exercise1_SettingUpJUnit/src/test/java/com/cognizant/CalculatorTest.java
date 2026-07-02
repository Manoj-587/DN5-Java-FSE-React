package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    void addShouldReturnSumOfTwoNumbers() {
        assertEquals(8, calculator.add(5, 3));
    }

    @Test
    void subtractShouldReturnDifferenceOfTwoNumbers() {
        assertEquals(2, calculator.subtract(5, 3));
    }

    @Test
    void multiplyShouldReturnProductOfTwoNumbers() {
        assertEquals(15, calculator.multiply(5, 3));
    }

    @Test
    void divideShouldThrowWhenDivisorIsZero() {
        assertThrows(IllegalArgumentException.class, () -> calculator.divide(10, 0));
    }
}

package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class AssertionsTest {

    private Calculator calculator;
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    void shouldValidateEquality() {
        assertEquals(25, 5 * 5);
    }

    @Test
    void shouldValidateBooleanConditions() {
        assertTrue(10 > 5);
        assertFalse(5 > 10);
    }

    @Test
    void shouldValidateExceptionHandling() {
        assertThrows(ArithmeticException.class, () -> {
            int result = 10 / 0;
        });
    }
}

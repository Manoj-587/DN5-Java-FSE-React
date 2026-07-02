package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

class MyServiceTest {

    @Test
    void testMockingAndStubbing() {

        // Create mock object
        ExternalApi api = mock(ExternalApi.class);

        // Stub the method
        when(api.getData()).thenReturn("Mock Data");

        // Inject mock
        MyService service = new MyService(api);

        // Verify
        assertEquals("Mock Data", service.fetchData());
        System.out.println(service.fetchData() +" "+ "Mocking and Stubbing test passed");
    }
}
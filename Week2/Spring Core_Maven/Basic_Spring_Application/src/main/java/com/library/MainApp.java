package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class MainApp {

    public static void main(String[] args) {

        ClassPathXmlApplicationContext context =
        new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService service =
                (BookService) context.getBean("bookService");

        service.displayService();
        context.close();

    }

}

package Week1.DesignPatterns.FactoryMethodPattern;


public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}
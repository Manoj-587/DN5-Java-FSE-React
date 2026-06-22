package Week1_DesignPatterns.FactoryMethodPattern;

public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}

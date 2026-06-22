package Week1.DesignPatterns.FactoryMethodPattern;

public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

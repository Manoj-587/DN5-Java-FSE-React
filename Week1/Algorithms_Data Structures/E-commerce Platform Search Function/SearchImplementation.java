public class SearchImplementation {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }

            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int searchId = 104;

        System.out.println("Linear Search:");

        Product result1 = linearSearch(products, searchId);

        if (result1 != null) {
            System.out.println(result1);
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("Binary Search:");

        Product result2 = binarySearch(products, searchId);

        if (result2 != null) {
            System.out.println(result2);
        } else {
            System.out.println("Product not found");
        }
    }
}

// Simple Product class so SearchImplementation can compile standalone
class Product {
    private int productId;
    private String name;
    private String category;

    public Product(int productId, String name, String category) {
        this.productId = productId;
        this.name = name;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "Product{id=" + productId + ", name='" + name + "', category='" + category + "'}";
    }
}
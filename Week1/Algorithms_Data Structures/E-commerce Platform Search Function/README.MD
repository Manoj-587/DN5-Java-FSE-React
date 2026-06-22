# Exercise 2: E-commerce Platform Search Function

## Objective
Implement and compare Linear Search and Binary Search algorithms for searching products in an e-commerce platform.

---

## Understanding Asymptotic Notation

### Big O Notation
Big O notation describes the performance of an algorithm as the input size grows. It helps analyze the efficiency and scalability of algorithms.

### Search Operation Scenarios

#### Best Case
- Linear Search: O(1)
- Binary Search: O(1)

#### Average Case
- Linear Search: O(n)
- Binary Search: O(log n)

#### Worst Case
- Linear Search: O(n)
- Binary Search: O(log n)

---

## Product Class

Attributes:
- productId
- productName
- category

---

## Search Algorithms Implemented

### Linear Search
- Searches each product one by one.
- Works on unsorted arrays.

### Binary Search
- Searches by repeatedly dividing the search space into halves.
- Requires the array to be sorted by productId.

---

## Time Complexity Comparison

| Algorithm | Best Case | Average Case | Worst Case |
|------------|------------|------------|------------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

---

## Conclusion

Binary Search is more efficient for large datasets because it reduces the search space by half during each iteration, resulting in O(log n) time complexity. Therefore, Binary Search is more suitable for an e-commerce platform with a large number of products.

---

## Sample Output

```text
Linear Search:
Product{id=104, name='Watch', category='Accessories'}

Binary Search:
Product{id=104, name='Watch', category='Accessories'}
```

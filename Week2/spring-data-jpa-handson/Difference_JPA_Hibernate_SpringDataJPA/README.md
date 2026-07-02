# Hands-on 4

## Difference between JPA, Hibernate and Spring Data JPA

### JPA
- Java Persistence API
- It is a specification.
- Defines standards for ORM.
- Does not provide implementation.
- Hibernate implements JPA.

### Hibernate
- ORM Framework.
- Implementation of JPA.
- Maps Java objects to database tables.
- Requires Session and Transaction management.

### Spring Data JPA
- Built on top of JPA.
- Reduces boilerplate code.
- Uses JpaRepository.
- Automatically provides CRUD methods.
- Transaction management through Spring.

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| Boilerplate Code | High | Medium | Low |
| CRUD Support | No | Yes | Yes |
| Repository Support | No | No | Yes |

## Conclusion

JPA defines the standard.
Hibernate implements JPA.
Spring Data JPA simplifies database operations using Hibernate.
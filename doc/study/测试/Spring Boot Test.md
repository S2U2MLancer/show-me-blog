# Spring Boot Test

use spring boot test by adding `org.springframework:spring-test` or `spring-boot-starter-test` in project

@SpringBootTest webEnvironment settings:

- **MOCK**(default), won't start embedded servers but provides a mock web environment, used for mock-based test, 
suck like used with @AutoConfigureMockMvc or @AutoConfigureWebTestClient for web/controller layer test.
- **RANDOM_PORT/DEFINED_PORT**, set up an embedded server, http client and server run in different threads,
so some annotations cannot be used, such as @Transactional.

@WebMvcTest, used for spring mvc test in web layer, @Component beans won't be scanned.

Mock bean:

- MockBean, mock whole functions of a module, it will be reset after each test method.
- SpyBean, wrap any existing bean

## Reference

- [Spring Test](https://docs.spring.io/spring/docs/5.1.7.RELEASE/spring-framework-reference/testing.html#testing)
- [Spring Boot Test](https://docs.spring.io/spring-boot/docs/2.1.5.RELEASE/reference/htmlsingle/#boot-features-testing)
- [Mockito](https://site.mockito.org/)
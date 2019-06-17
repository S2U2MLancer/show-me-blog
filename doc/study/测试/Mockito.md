# Mockito For Test

`import static`mostly use `org.mockito.BDDMockito.*` instead of `org.mockito.Mockito.*`.

- stubbing, stub **before** action execution, **the order of stubbing matters**
  - use **@Mock** to create mock instanse.
  - spying is used on a **real** object, @Spy
  - partial mock
- verify, When a mock instance is created, 
mockito will remember all actions in it, we can verify **after** action execution.
  - ArgumentCaptor, capture arguments for input and output, @Captor
- argument matchers, define what kind of arguments will be used in method

Return values:

- doReturn(Object), return a result
- doAnswer, customize return result 
- doThrow(Throwable...)/doThrow(Class), exception
- doNothing, return void
- doCallRealMethod, delegate to a real invokation

## Reference

- [mockito](https://site.mockito.org/)
- [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
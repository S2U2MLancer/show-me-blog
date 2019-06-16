# Postman api testsuite
# Install newman cli
```
npm install -g newman
```

## Test script with newman
```
newman run testsuite.postman_collection.json -e show-test.postman_environment
```
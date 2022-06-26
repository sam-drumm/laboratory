### Deployment 

https://co-lab-demo.herokuapp.com/
### Unit/Integration tests

To test an individual test, use **npx**:

```
npx jest <name>.test.js
```

To run all tests:

```
npm run test
```

To run one single test, add `.only` after `it`

```
it.only('my test name goes here', () => {
  // here test goes here
))

```

Then you can run the test file individually, `npx jest events.test.js`.
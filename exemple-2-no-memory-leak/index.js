const app = require('express')();

app.listen(8080, () => {console.log('start...')})

app.get('/', (req, res) => {
  const id = setInterval(() => {
    doSomething(id)
  }, 100)

  const doSomething = (intervalId) => {
    clearInterval(intervalId)
  }

  const {heapTotal} = process.memoryUsage()
  console.log('heapTotal:', heapTotal);
  res.status(200).send('hello world')
});

//npx autocannon -c 100 -d 60 -p 20 localhost:8080
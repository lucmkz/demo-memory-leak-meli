const app = require('express')();

app.listen(8080, () => {console.log('start...')})

app.get('/', (req, res) => {
  setInterval(() => {
    //do something
  }, 100)

  const { heapTotal } = process.memoryUsage()
  console.log('heapTotal:', heapTotal);
  res.status(200).send('hello world')
});

//npx autocannon -c 100 -d 60 -p 20 localhost:8080
const express = require('express');
const ExpressError = require('./expressError')

const app = express();

app.use(express.json());




const CANDIES = [
  { name: 'snickers', qty: 53, price: 1.58 },
  { name: 'skittles', qty: 26, price: 0.99 }
];
// array acting as our database

app.get('/candies', (req, res) => {
  res.json(CANDIES);
});

app.post('/candies', (req, res) => {
    CANDIES.push(req.body);
    res.status(201).json(CANDIES);
})

app.get("/users/:username", function(req,res,next) {
  try {
    const user = USERS.find(u => u.username === req.params.username);
  if (!user) throw ExpressError('invalid username', 404);
  return res.send({user});
  } catch(e) {
    next(e)
  }
})



// app.use((req, req, next)=> {
//     console.log(' the server got  arequest')
//     next();
// })
// app.use((req, req, next)=> {
//     console.log(' this also runs!')
//     next();
// })


app.use((req, res, next) => {
    const e = new ExpressError('page not found')
    next(e)
})

app.use((error, req, res, next) => {
    res.send(error.status).send(error.msg)
})



app.listen(5500, function() {
  console.log('server has started on port 5500');
});




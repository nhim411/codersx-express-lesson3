// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

var todoLists = ['Đi chợ','Nấu cơm','Rửa bát','Học code tại CodersX'];

app.set('views', './views');
app.set('view engine', 'pug')

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.send('I love CodersX');
});

app.get('/todos', (req, res) => {
  var q = req.query.q;
  var query = (q == null) ? '' : q;
  if(q !== null) {
    var matchedLists = todoLists.filter(function(todo) {
      return todo.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    res.render('todos',{
    todos: matchedLists
  });
  }
  else {
    res.render('todos',{
    todos: todoLists
  });
  }
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

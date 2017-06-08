const express = require('express');
const mongo = require('./utilities/mongo');

const app = express();


app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/' + 'index.html');
});

app.get('/api', (request, response) => {
  response.sendFile(__dirname + '/public/' + 'api.html');
});

app.get('/history', (request, response) => {
  response.sendFile(__dirname + '/public/' + 'history.html');
});

app.get('/search/:search', (request, response) => {
  const reply = (data) => {
    response.send(data);
  }
  console.log(request.params.search);
  mongo.newSearch(request.params.search, request.query.page, reply);
});

app.get('/past', (request, response) => {
  const reply = (data) => {
    response.send(data);
  }

  mongo.pastSearch(reply);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

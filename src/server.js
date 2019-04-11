import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use('/api/auth/register', bodyParser.urlencoded({ 
  extended: true 
}));
// app.use(bodyParser.json());
app.listen(3000, () => {
  console.log('server')
});

//app.get('/api/auth', routes.auth);
app.post('/api/auth/register', function(req, res){
  console.log(req.body.pass);
})


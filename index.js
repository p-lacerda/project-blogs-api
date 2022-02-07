const express = require('express');
const rescue = require('express-rescue');
// const validateJWT = require('./auth/validateJWT');
const { UserVerify } = require('./middlewares/UserMiddleware');
const { createUser } = require('./controllers/UserController');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/user', [UserVerify, rescue(createUser)]);
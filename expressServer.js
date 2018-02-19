//packages
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const app = express();
const db = knex({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'postgres',
		password:'w50031778',
		database:'smart-brain'
	}
});

//controllers
const signin = require('./controllers/signin.js');
const register = require('./controllers/register.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');


console.log(process.env.PORT);
//middleways
app.use(bodyParser.json());
app.use(cors());

//sign in 
app.post('/signin', (req, res) => {signin.handleSignin(req,res,db,bcrypt)})

//register
app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)})

//profile
app.get('/profile/:id', (req, res) => {profile.handleProfile(req,res,db)})

//image
app.put('/image', (req,res) => {image.handleImage(req,res,db)})

//port
app.listen(3000);
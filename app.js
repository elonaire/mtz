const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Base routes
const homeRoutes = require('./api/routes/home');
const servicesRoutes = require('./api/routes/services');
const adminRoutes = require('./api/routes/admin');
const productsRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/user');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb+srv://elonaire:aseneka@cluster0-fcl9s.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

//block header from containing info about server
app.disable('x-powered-by');

//enable handlebars to render views
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//read static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

//use routes
app.use('/', homeRoutes);
app.use('/services', servicesRoutes);
app.use('/admin', adminRoutes);
app.use('/products',productsRoutes);
app.use('/user',userRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
	res.type('text/html');
	res.status(404);
	res.render('404');
});

app.use((err,req,res,next)=>{
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

module.exports = app;

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// const cartRoute = require('../app/routes/cartRoute');
const categoryRoute = require('../app/routes/categoryRoute');
// const orderRoute = require('../app/routes/orderRoute');
// const paymentRoute = require('../app/routes/paymentRoute');
const productRoute = require('../app/routes/productRoute');
// const reviewRoute = require('../app/routes/reviewRoute');
// const userRoute = require('../app/routes/userRoute');
const frontendRoute = require('../app/routes/frontendRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json({strict:false,type:'mixed'}))

// app.use('/carts', cartRoute);
app.use('/categories', categoryRoute);
// app.use('/orders', orderRoute);
// app.use('/payments', paymentRoute);
app.use('/products', productRoute);
// app.use('/reviews', reviewRoute);
// app.use('/users', userRoute);
app.use('/frontend', frontendRoute);





app.get('/', (req, res) => res.send('Welcome to Final Project MCI'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
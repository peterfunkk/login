const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./DB/db');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');



const productosRouter = require('./Routes/Producto')
const usuarioRouter = require('./Routes/Usuario')

app.use(express.static('Public'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret:'123',
    resave: true,
    saveUninitialized: true
}))


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/productos', productosRouter);
app.use('/cuenta', usuarioRouter);

app.get('/', usuarioRouter)

async function main() {
    await connectDB();  
}

main();

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
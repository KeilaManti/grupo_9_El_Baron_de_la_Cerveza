const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(__dirname + '/public'));


// Pagina Home - Yonatan
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

// Pagina de detalles de producto - Keila
app.get('/productDetail', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})

// Pagina de carrito de compras - Kevin
app.get('/productCart', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

// Pagina de configuracion de usuario - Yonatan
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

// Pagina de login - Juan
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

// Pagina con datos de contacto - Keila
app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/contact.html'))
})
// Pagina donde se finalizaria la compra - Yonatan  
app.get('/finalizePurchase', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/finalizePurchase.html'))
})
// Pagina donde se finalizaria la compra - Yonatan  
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/about.html'))
})
// Pagina donde se finalizaria la compra - Yonatan  
app.get('/config', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/config.html'))
})


app.listen(3030, ()=>{
    console.log("Servidor corriendo")
})
const express = require('express');
const app = express();
const port = 80;

const {createProxyMiddleware} = require('http-proxy-middleware');


app.use('/jackmarketing',createProxyMiddleware({target:'http://127.0.0.1:5000/',changeOrigin:true}));

app.use('*',express.static('build'));

app.listen(port,()=>{
    console.log('App Started');
});
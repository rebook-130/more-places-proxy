const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:roomId', express.static(path.join(__dirname, 'public')));

// Photo-gallery
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://54.219.99.93:3001/`, changeOrigin: true}));

// Calendar
app.use('/api/calendar', createProxyMiddleware({ target: `http://3.138.89.74:3002/`, changeOrigin: true}));

// Reviews
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://3.136.76.170:3003/`, changeOrigin: true}));

// More places
const url = 'http://3.138.195.85:3004/'
app.use('/api/**', createProxyMiddleware({ target: url, changeOrigin: true}));


app.listen(port, () => {
  console.log(`FEC app listening at port ${port}`);
});
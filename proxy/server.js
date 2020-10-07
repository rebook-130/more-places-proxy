const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:roomId', express.static(path.join(__dirname, 'public')));

// Photo-gallery
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://localhost:3001/`, changeOrigin: true}));

// Calendar
app.use('/api/calendar', createProxyMiddleware({ target: `http://localhost:3002/`, changeOrigin: true}));

// Reviews
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://localhost:3003/`, changeOrigin: true}));

// More places
app.use('/api/more_places', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));
app.use('/api/create_list', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));
app.use('/api/update_listing', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));
app.use('/api/update_collection', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));
app.use('/api/collection_name', createProxyMiddleware({ target: `http://localhost:3004/`, changeOrigin: true}));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
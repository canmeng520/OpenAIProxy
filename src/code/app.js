  const express = require('express')
  const {
    createProxyMiddleware
  } = require('http-proxy-middleware');
  const app = express()
  const port = 9000
  const openAiSecret = process.env.openAiSecret;
  console.log(openAiSecret);


  app.use('/', createProxyMiddleware({
      target: 'http://122.9.151.0:8085',
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
  }));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
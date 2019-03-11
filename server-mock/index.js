const express = require('express');
const app = express();
const port = 3000;
const endpointPrefix = '/API/';
const contentType = 'Content-Type';
const applicationJson = 'application/json';

app.get(`${endpointPrefix}albums`, function (req, res) {
	res.setHeader(contentType, applicationJson);
	res.json(require('./data/albums.json'));
});

app.get(`${endpointPrefix}artists`, function (req, res) {
	res.setHeader(contentType, applicationJson);
	res.json(require('./data/artists.json'));
});

app.get(`${endpointPrefix}tracks`, function (req, res) {
	res.setHeader(contentType, applicationJson);
	res.json(require('./data/tracks.json'));
});

app.listen(port, () => console.log(`\nListening port: ${port}!`));


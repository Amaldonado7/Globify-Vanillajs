const express = require('express');
const request = require('request');

// config
const client_id = '12b7e8ba1a5f4465b9e5c50470279cfa';
const secret = '00be6b8b36714b4092c3b81f4a8ba04a';
const port = 3000;
const server_url = `http://localhost:${port}`;
const redirect_uri = `${server_url}/callback`;
const redirect_to = 'http://localhost:8080/';

// settings
const app = express();
const accountsSpotify = 'https://accounts.spotify.com';
const scopes = 'user-read-private user-read-email user-top-read';
const encodedClient = Buffer.from(`${client_id}:${secret}`).toString('base64');

app.use(express.static('./'));

//! 1) Authorize
app.get('/login', function(req, res) {
	res.redirect(`${accountsSpotify}/authorize` +
							 '?response_type=code' +
							 '&client_id=' + client_id +
							 '&scope=' + encodeURIComponent(scopes) +
							 '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

//! 2) Get authorization_code
app.get('/callback', function (req, res) {
	if(req.query && (!req.query.error && req.query.code)){
		const headers = {
			'Authorization': `Basic ${encodedClient}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		};

		// Configure the request
		const options = {
			url: `${accountsSpotify}/api/token`,
			method: 'POST',
			headers: headers,
			form: {
				grant_type: 'authorization_code',
				code: req.query.code,
				redirect_uri: redirect_uri
			}
		};

		// 3) Get the token!
		request(options, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				const access_token = JSON.parse(body).access_token;
				res.redirect(`${redirect_to}?t=${access_token}`);
			}  else {
				console.log('Error!', error, body);
				res.redirect(`${server_url}/errorWithToken.html`);
			}
		});

	} else {
		res.redirect(`${server_url}/errorWithAuthAccess.html`);
	}
});

app.listen(port, () => console.log(`\nListening port: ${port}!`));

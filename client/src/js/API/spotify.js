import { Utils } from '../utils';
import { User, Artist, Album, Track } from '../entities';

export class Spotify {
	url_base = 'https://api.spotify.com/v1';
	headers = {};

	constructor(token) {
		//el constructor se ejecuta después del new que declaré en el switch
		this.headers = {
			Authorization: `Bearer ${token}`
		};
	}

	getUser() {
		return Utils.xhr(`${this.url_base}/me`, { headers: this.headers }).then(
			user => {
				//console.log(info,"desde user");
				return new User(
					user.display_name,
					user.country,
					user.email,
					user.images[0].url
				);
			}
		);
	}

	getArtist(id) {
		return Utils.xhr(
			`${this.url_base}/artists/${id}?market=ar`, {
				headers: this.headers
			})
			.then(artist => {
				return new Artist(
					artist.name,
					artist.images[0].url);
			});
	}

	getArtists() {
		return Utils.xhr(
			`${this.url_base}/me/top/artists`, {
				headers: this.headers
			})
			.then(artists => {
				return artists.items.map(artist => {
					if (artist.images.length === 0) {
						return new Artist(artist.name, './../../img/noprofile.gif');
					}
					return new Artist(
						artist.name,
						artist.images[0].url,
						artist.id);

				});
			});
	}

	getAlbums(id) {
		return Utils.xhr(
			`${this.url_base}/artists/${id}/albums?market=ar`, {
				headers: this.headers
			})
			.then(albums => {
				return albums.items.map(album => {
					return this.getTracks(album.id)
						.then(tracks => {
							if (album.images.length === 0) {
								return new Album(album.name, './../../img/noprofile.gif', tracks);
							}
							return new Album(
								album.name,
								album.images[0].url,
								tracks);

						});
				});
			});
	}

	getTracks(id) {
		return Utils.xhr(
			`${this.url_base}/albums/${id}/tracks?market=ar`, {
				headers: this.headers
			})
			.then(tracks => {
				return tracks.items.map(track => {
					return new Track(
						track.name,
						track.track_number,
						track.duration_ms);
				});
			});
	}

	// getInput(input) {
	// 	return Utils.xhr(
	// 		`${this.url_base}/search?q=${input}&type=artist`, {
	// 			headers: this.headers
	// 		})
	// 		.then(result => {
	// 			const res = {
	// 				artists: ''
	// 			};

	// 			res.artists = result.artists.data.map(artist => {
	// 				return new Artist(
	// 					artist.name,
	// 					artist.images[0].url,
	// 					artist.id);
	// 			});
	// 			return res;
	// 		});
	// )
}


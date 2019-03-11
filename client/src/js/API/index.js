import { Spotify } from './spotify';
import { Pandora } from './pandora';
import { Soundcloud } from './soundcloud';

export class Source {
	provider = {}; //class property
	options = {
		provider: 'spotify',
		token: ''
	};

	constructor(options) {
		this.options = Object.assign({}, this.options, options); //toma las opciones que vienen por default y las mergea en un nuevo objeto, el asign muta el primer objeto, por eso al escribir {} hago una referencia y espero que suceda algo de un objeto nuevo.

		switch (this.options.provider) {
		case 'spotify': this.provider = new Spotify(this.options.token); break; //instancio una nueva clase de Spotify
		case 'pandora': this.provider = new Pandora(); break;
		case 'soundcloud': this.provider = new Soundcloud(); break;
		default:
			console.error('Not the correct provider');
		}
	}

	getUser() {
		return this.provider.getUser()
			.then(data => {
				return data;
			});
	}

	getArtists() {
		return this.provider.getArtists()
			.then(data => {
				return data;
			});
	}

	getAlbums(id) {
		return this.provider.getAlbums(id)
			.then(data => {
				return data;
			});
	}

	getTracks(id) {
		return this.provider.getTracks(id)
			.then(data => {
				return data;
			});
	}

	getInput(input) {
		return this.provider.getInput(input)
			.then(data =>{
				return data;
			});
	}

}

import './../styles/main.scss';
import { Albums, Artists, Playlist, Sidebar, Search, UserApi } from './components';
import { Source } from './API';
import Loading from './components/loading';

export default class App {
	// DOM:
	loading = document.getElementsByClassName('loading');
	sidebar = document.getElementById('sidebar-content');
	toggle = document.getElementById('toggleMenu');
	artistPost = document.getElementById('artist');
	albumPost = document.getElementById('album');
	searchView = document.getElementById('input');

	source = {};

	constructor() {
		const urlParams = new URLSearchParams(location.search);
		let token = urlParams.get('t');

		this.source = new Source({
			token
		});

		this.getData();
	}

	getData() {
		Sidebar.sidebar(this.toggle, this.sidebar, this.artistPost);
		Loading.loading(this.loading);

		//User
		this.source.getUser().then(
			data => {
				document.getElementById('profile').innerHTML = UserApi.takeUser(data);
				// console.log(data);
			},
			e => {
				console.error('error', e);
			}
		);

		// Artist
		this.source.getArtists().then(
			data => {
				document.getElementById(
					'artist-library'
				).innerHTML = Artists.takeArtists(data).innerHTML;
			},
			e => {
				console.error('error', e);
			}
		);

		// Albums & Tracks
		this.source.getAlbums('1dfeR4HaWDbWqFHLkxsg1d').then(
			data => {
				data.forEach(album => {
					album.then(info => {
						Albums.takeAlbums(info, document.getElementById('album-list'));
						Playlist.albumCollapser(document.getElementById('album-list').lastChild);
					});
				});
			},
			e => {
				console.error('error', e);
			}
		);

		// Search Input

		this.source.getInput().then(
			data => {
				this.searchView.takeInput();
			},
			e => {
				console.error('error', e);
			}
		);


	}
}

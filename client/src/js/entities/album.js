export class Album {
	id = ''
	name = '';
	image = '';
	tracks = []

	constructor(name, image, tracks) {
		this.name = name;
		this.image = image;
		this.tracks = tracks;
	}
}

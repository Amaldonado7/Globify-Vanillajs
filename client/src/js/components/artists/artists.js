//Función Artists
export class Artists {

	static takeArtists(section){
		const artistList = document.createElement('ul');
		artistList.classList.add('artist__library');	
		artistList.setAttribute('id', 'artist-library');

		section.forEach(data => {
			const name = data.name;
			const img = data.image;
			const li = document.createElement('li');
			const imgItem = document.createElement('img');
			const artistName = document.createElement('p');

			li.classList.add('artist__library__item');
			imgItem.classList.add('artist__library__item__img');
			artistName.classList.add('artist__library__item__name');

			imgItem.setAttribute('src', img);
			artistName.textContent = name;

			artistList.appendChild(li);
			li.appendChild(imgItem);
			li.appendChild(artistName);
		});

		return artistList;
	}
}

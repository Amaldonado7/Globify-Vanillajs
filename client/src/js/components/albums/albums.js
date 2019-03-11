import { Tracks } from '../tracks';

//Función Albums
export class Albums {
	static takeAlbums(data, AlbumList) {
		const item = `<li class="album__list__item">
						<div class="album__list__item__container">
							<div class="album__list__item__container__content">
								<img src="./../../../img/Fill_1.png" alt="">
								<img class="album__list__item__container__content__img" src="${
	data.image
}" alt="">
								<p class="album__list__item__container__content__title">${data.name}</p>
							</div>
						</div>
						<ul class="album__list__item__container--selected__playlist active">${Tracks.takeTracks(
		data.tracks
	)}</ul>
						</li>`;

		AlbumList.insertAdjacentHTML('beforeend', item);
	}
}


//Codigo that have betrayed me
// const albumList = document.createElement("ul");
// albumList.classList.add("album__list");

// const name = data.name;
// const img = data.image;
// const li = document.createElement('li');
// const container = document.createElement('div');
// const content = document.createElement('div');
// const imgItem = document.createElement('img');
// const albumTitle = document.createElement('p');

// li.classList.add('album__list__item');
// container.classList.add('album__list__item__container');
// content.classList.add('album__list__item__container__content');
// imgItem.classList.add('album__list__item__container__content__img');
// albumTitle.classList.add('album__list__item__container__content__title');

// imgItem.setAttribute('src', img);
// albumTitle.textContent = name;
// albumList.appendChild(li);
// li.appendChild(container);
// container.appendChild(content);
// content.appendChild(imgItem);
// content.appendChild(albumTitle);

// //Tracks
// const tracksList = document.createElement('ul');
// tracksList.classList.add('album__list__item__container--selected__playlist');
// tracksList.innerHTML = Tracks.takeTracks(data.tracks);
// container.appendChild(tracksList);

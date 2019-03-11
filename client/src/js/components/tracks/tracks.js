import {Playlist} from './tracksList';

export class Tracks {
	static takeTracks(section) {
		// console.log(section);
		return section
			.map(
				data =>
					`
			<li class="album__list__item__playlist__name album__list__container--selected__playlist__name">
				<img src="./../../../img/Group_5.png" alt="">
				<span class="album__list__container--selected__playlist__name__title">${
	data.name
}</span>
				<span class="album__list__container--selected__playlist__name__time">${Playlist.msToMinutes(
		data.duration
	)}</span>
				</li>`
			)
			.join('');
	}
}

export class Playlist {
	static msToMinutes(ms) {
		const seconds = ms / 1000;
		const minutes = Math.trunc(seconds / 60);
		this.seconds = Math.trunc(seconds % 60);

		if (this.seconds < 10) {
			this.seconds = '0' + this.seconds;
		}
		return minutes + ':' + this.seconds;
	}

	static albumCollapser(albumListItemContainer) {
		albumListItemContainer.addEventListener('click', function() {
			albumListItemContainer
				.getElementsByClassName(
					'album__list__item__container--selected__playlist'
				)[0]
				.classList.toggle('active');
		});
	}
}

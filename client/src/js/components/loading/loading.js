export class Loading {
	static loading() {
		window.addEventListener('load', function () {
			const loading = document.querySelector('.loading');
			loading.className += ' hidden'; // class "loading hidden"
		});
	}
}

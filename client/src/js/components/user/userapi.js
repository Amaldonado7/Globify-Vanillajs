export class UserApi {
	static takeUser(data) {
		// console.log(data);

		return `
    	<img id="profile-photo" src="${data.image}" alt="">
    	<span id="name">${data.name}</span>

    	`;
	}
}

// <!--User mobile-->

// <img src="${data.image}" alt="Profile" title="Profile" class="mobile__list__item__img" />
// <p class="mobile__list__item__title">Perfil</p>

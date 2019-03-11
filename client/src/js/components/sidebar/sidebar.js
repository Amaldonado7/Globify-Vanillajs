//Función Sidebar
export class Sidebar {
	static sidebar(toggle, sidebar, artistPost){    
		let toggleStatus = true;
		toggle.addEventListener('click', function(){      
			toggleStatus = !toggleStatus;    
			if (!toggleStatus){            
				sidebar.style.display = 'none';           
				artistPost.style.width = '74vw';                  
				// console.log('toggleStatus', this);
			} else {        
				sidebar.style.display = 'block';
			}
		});
	}
}

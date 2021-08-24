document.addEventListener('DOMContentLoaded', init)

function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
	ev.preventDefault();
	document.querySelectorAll('.image').forEach(e => e.remove());
	
	const api = 'yY6fSx8jVi4BJYwmpCCuEMB2mu6t0qKT'

	const search ='https://api.giphy.com/v1/gifs/search?'

	const query = document.getElementById("search").value.trim()
	const url = `${search}&api_key=${api}&q=${query}`

	console.log(url);


	fetch(url)
	       .then(response => response.json())
	       .then(content => {
		   console.log(content.data)
		   console.log("META", content.meta)
		   let i;
		   for (i = 0; i < content.data.length; i++) {
		       let img = document.createElement('img')
		       img.src = content.data[i].images.downsized.url;
		       img.alt = content.data[i].title;
		       img.setAttribute("class", "image")
		       let out = document.querySelector('.out')
		       out.insertAdjacentElement('afterbegin', img)
		   }
	       })
	       .catch(err => {
		   console.error(err)
	       })
    })
}


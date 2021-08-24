function ISSLookup() {
    let url = "http://api.open-notify.org/iss-now.json";
    document.querySelectorAll('.direction').forEach(e => e.remove());
    fetch(url)
	.then(response => response.json())
	.then(content => {
	    console.log(content.iss_position);
	    let latitude = document.createElement('h1');
	    let longitude = document.createElement('h1');
	    latitude.textContent = `latitude: ${content.iss_position.latitude}`;
	    latitude.setAttribute("class", "direction");
	    longitude.textContent = `longetude: ${content.iss_position.longitude}`;
	    longitude.setAttribute("class", "direction");

	    let link = document.createElement('a');
	    link.setAttribute("href", `https://www.google.com/maps/@${content.iss_position.latitude},${content.iss_position.longitude},9z`);
	    link.textContent = "View in Google Maps";
	    link.setAttribute("target", "_blank");
	    link.setAttribute('class',"direction");
	    let out = document.querySelector('.out');
	    out.insertAdjacentElement('afterbegin', link);
	    out.insertAdjacentElement('afterbegin', longitude);
	    out.insertAdjacentElement('afterbegin', latitude);
	    
	    
	});
}



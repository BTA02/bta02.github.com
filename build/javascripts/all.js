function launchSiteInNewTab(url) {
	window.open(url);
}

function toggleDetails(eltIdToShow, show) {
	// hide all the current project descriptions
	for(description in document.getElementsByClassName('project-description')){
		var elt = document.getElementById(description)
		if(elt) {
			elt.style.display = 'none';
		}
	}	
	document.getElementById(eltIdToShow).style.display = 'inline';
}
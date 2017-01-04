function launchSiteInNewTab(url) {
	window.open(url);
}

function toggleDetails(eltIdToShow, show) {
	if(show) {
		document.getElementById(eltIdToShow).style.display = 'inline';
	} else {
		document.getElementById(eltIdToShow).style.display = 'none';
	}
}
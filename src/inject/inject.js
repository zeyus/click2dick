chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		document.body.innerHTML = document.body.innerHTML.replace(/\bclick/ig, 'dick');
	}
	}, 10);
});

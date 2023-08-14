// Chama a função quando clicar no botão
function mirrorPage() {
	if(window.mirrored) {
		document.body.style.transform="";
		window.mirrored = false;
	} else {
		document.body.style.transform="rotateY(180deg)";
		window.mirrored = true;
	}
}

chrome.browserAction.onClicked.addListener(function(tab) {
  // Não precisa de permisão
  console.log('Turning ' + tab.url + ' red!');
  //   transform: rotateY(180deg);
  var code = '(' + mirrorPage.toString() + ')()';
  console.log(code);
  chrome.tabs.executeScript({
	
    code: code
  });
});

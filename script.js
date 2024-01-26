window.onload = function () { document.body.classList.remove('is-preload'); }
		window.ontouchmove = function () { return false; }
		window.onorientationchange = function () { document.body.scrollTop = 0; }
		function openPopup() {
			document.getElementById("popup").style.display = "block";
		}

		function closePopup() {
			document.getElementById("popup").style.display = "none";
		}
		function openTV() {
			window.open('https://anhzuuu.github.io/happynewyear/', 'Popup', 'width=600,height=400');
		}
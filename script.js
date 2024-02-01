//glitching
let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);


//Popup management
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

       
        function openPopup2() {
			document.getElementById("screen").style.display = "block";
            document.getElementById("gl-bt").style.display = "flex";
            document.getElementById("gl-bt-wr").style.display = "table";

			// document.getElementById("screen").style.display = "block";
			// document.getElementById("glitch-bt").style.display = "block";
            
            let height = screen.height;
            let width = screen.width;
            document.getElementById("screen").innerHTML = "Your device is " + width + "x"+ height + "px";
		}

		function closePopup2() {
			document.getElementById("screen").style.display = "none";
            document.getElementById("gl-bt").style.display = "none";
            document.getElementById("gl-bt-wr").style.display = "none";
            
		}


		function getSpider() {
			window.location.assign("spider/spider.html");
		}
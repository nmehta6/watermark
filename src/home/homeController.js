angular.module('app').controller('homeController', function($timeout) {
	var videoElement = document.createElement('video');
	videoElement.setAttribute('src', 'img/sintel-trailer.mp4');
	videoElement.setAttribute('autoplay', 'true');
	videoElement.setAttribute('loop', 'true');

	var canvas = document.getElementById('videocanvas');
	var context = canvas.getContext('2d');

	(function (v) {
		setInterval(function (v) {
			if ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || window.outerWidth - window.innerWidth > 160 ||
				window.outerHeight - window.innerHeight > 160) {
				window.location = '/';
			}
		}, 1000, v);
	})(videoElement);

	videoElement.addEventListener('play', function() {
		(function draw(c, v, watermarkText) {
			if (v.paused || v.ended) {
				return false;
			}

			// First, draw it into the backing canvas
			c.drawImage(v, 0, 0, '1280', '720');
			if (c.font !== '96px Arial') {
				c.font = '96px Arial';
			}
			c.fillText('Watermark Demo', 58, 165);

			// Start over!
			setTimeout(draw, 20, c, v);
		}(context, videoElement, 'asdfsdf'))

	}, false);
});

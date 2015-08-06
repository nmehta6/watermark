angular.module('app').controller('homeController', function() {
	var back = document.createElement('canvas');
	var backcontext = back.getContext('2d');

	var videoElement = document.createElement('video');
	videoElement.setAttribute('src', 'img/sintel-trailer.mp4');
	videoElement.setAttribute('autoplay', 'true');
	videoElement.setAttribute('loop', 'true');

	var canvas = document.getElementById('videocanvas');
	var context = canvas.getContext('2d');
	context.font = 'bold 48px sans-serif';

	var cw = '1280';
	var ch = '720';

	videoElement.addEventListener('play', function() {
		back.width = '1280';
		back.height = '720';

		draw(this, context, backcontext, cw, ch);
	}, false);

	function draw(v, c, bc, w, h) {
		if (v.paused || v.ended) {
			return false;
		}

		// First, draw it into the backing canvas
		c.drawImage(v, 0, 0, w, h);

		c.fillText('Watermark Demo', 58, 165);
		c.fillText('Watermark Demo', 558, 165);
		c.fillText('Watermark Demo', 58, 565);
		c.fillText('Watermark Demo', 558, 565);

		// Start over!
		setTimeout(draw, 20, v, c, bc, w, h);
	}
});

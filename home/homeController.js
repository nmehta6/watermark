angular.module('app').controller('homeController', function() {
	var back = document.createElement('canvas');
	var backcontext = back.getContext('2d');

	var videoElement = document.createElement('video');
	videoElement.setAttribute('src', '/watermark/img/sintel-trailer.mp4');
	videoElement.setAttribute('autoplay', 'true');
	videoElement.setAttribute('loop', 'true');

	var canvas = document.getElementById('videocanvas');
	var context = canvas.getContext('2d');
	context.font = 'bold 48px sans-serif';

	var cw = '1280';
	var ch = '720';

	videoElement.addEventListener('play', function() {
		// canvas.width = cw;
		// canvas.height = ch;
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

		// Grab the pixel data from the backing canvas
		// var idata = bc.getImageData(0,0,w,h);
		// var data = idata.data;

		// Loop through the pixels, turning them grayscale
		// for(var i = 0; i < data.length; i+=4) {
		// 	var r = data[i];
		// 	var g = data[i + 1];
		// 	var b = data[i + 2];
		// 	var brightness = (3 * r + 4 * g + b) >>> 3;
		// 	data[i] = brightness;
		// 	data[i + 1] = brightness;
		// 	data[i + 2] = brightness;
		// }
		// idata.data = data;

		// Draw the pixels onto the visible canvas
		// c.putImageData(idata, 0, 0);
		c.fillText('Watermark Demo', 58, 165);
		c.fillText('Watermark Demo', 558, 165);
		c.fillText('Watermark Demo', 58, 565);
		c.fillText('Watermark Demo', 558, 565);

		// Start over!
		setTimeout(draw, 20, v, c, bc, w, h);
	}
});

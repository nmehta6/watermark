angular.module('app').controller('homeController', function() {
	var v = document.getElementById('videoelement');
	var canvas = document.getElementById('videocanvas');
	var context = canvas.getContext('2d');

	var cw = canvas.clientWidth;
	var ch = canvas.clientHeight;

	v.addEventListener('play', function() {
		draw(this, context, cw, ch);
	}, false);

	function draw(v, c, w, h) {
		if (v.paused || v.ended) {
			return false
		}
		c.drawImage(v, 0, 0, w, h);
		setTimeout(draw, 20, v, c, w, h);
	}
});

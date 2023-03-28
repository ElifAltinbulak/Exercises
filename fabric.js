// Canvas elementini seçin ve boyutlandırın
var canvas = new fabric.Canvas('canvas', {
	width: window.innerWidth,
	height: window.innerHeight - 100 // Video boyutu nedeniyle ekstra boşluk bırakıyoruz
});

// Video elementini seçin
var video = document.getElementById('video');

// Video yüklendiğinde
video.addEventListener('loadeddata', function() {
	// Canvas boyutunu videonun boyutuna ayarlayın
	canvas.setWidth(video.videoWidth);
	canvas.setHeight(video.videoHeight);

	// Videoyu canvas üzerine yerleştirin
	var videoObj = new fabric.Image(video, {
		left: 0,
		top: 0,
		width: video.videoWidth,
		height: video.videoHeight,
		selectable: false
	});
	canvas.add(videoObj);

	// Serbest çizim aracını seçin
	canvas.isDrawingMode = true;

	// Çizim ayarlarını yapılandırın
	canvas.freeDrawingBrush.width = 5;
	canvas.freeDrawingBrush.color = 'red';
});

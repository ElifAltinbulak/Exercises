// canvas elementi ve Paper.js projesini tanımlayalım
var canvas = document.getElementById("myCanvas");
paper.setup(canvas);

// Path nesneleri için stil özellikleri belirleyelim
var path = new paper.Path();
path.strokeColor = 'black';
path.strokeWidth = 2;
path.strokeCap = 'round';

// mouse hareketleri için event listener ekleyelim
canvas.addEventListener('mousemove', function(event) {
  if(event.buttons === 1) {
    path.add(event.point);
  }
});

// video elementi için event listener ekleyelim
var video = document.getElementById('myVideo');
video.addEventListener('play', function() {
  // her kare için Paper.js projesini güncelle
  function onFrame(event) {
    paper.view.draw();
  }
  paper.view.onFrame = onFrame;
});

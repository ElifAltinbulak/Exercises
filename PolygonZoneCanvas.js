const video = document.getElementById('my-video');
const canvas = document.getElementById('my-canvas');
const polygonzone = new PolygonZone(canvas);

polygonzone.initiate(
  [
    {
      shape: 'polygon',
      label: 'My Label',
      points: [
        { x: 50, y: 50 },
        { x: 150, y: 50 },
        { x: 150, y: 150 },
        { x: 50, y: 150 },
      ],
    },
  ],
  video
);

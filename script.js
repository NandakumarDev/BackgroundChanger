const ChangeBodyBg = document.getElementById('ChangeBodyBg'),
colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
let   colorIndex  = 0;

ChangeBodyBg.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
});

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (var i = 0; i < 10; i++) {
    getRandomRgb();
  }

document.getElementById('root').style.backgroundColor = color;
document.getElementById('output').style.color = color;
document.getElementById('output').innerText = color;
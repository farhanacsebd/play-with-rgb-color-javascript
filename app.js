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
// only getRandomRgb() function is bring by stackflow



document.getElementById('change-btn').addEventListener('click',function(){
    document.getElementById('root').style.backgroundColor = getRandomRgb();
    document.getElementById('output').innerText = getRandomRgb();
    document.getElementById('output').style.color = getRandomRgb();
})
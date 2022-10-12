// only getRandomRgb() function is bring by stackoverflow
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



// this document function is get bgcolor,color or value; 

document.getElementById('change-btn').addEventListener('click',function(){
    const color = getRandomRgb(); 
    document.getElementById('root').style.backgroundColor = color;
    document.getElementById('output').style.color = color;
    const output = document.getElementById('output');
    output.value = color;
})






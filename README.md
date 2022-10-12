### Get or copy RGB:
#### using window.navigator/navigator object or clipboard object and writeText function.
```javascript
document.getElementById('copy-btn').addEventListener('click',function(){

  navigator.clipboard.writeText(output.value)

})
```
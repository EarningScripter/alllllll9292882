function addItem() {
  var item = document.getElementById('value').value;
  if (item != '') {
    $('.container').append("<div class='item' onclick='$(this)[0].remove()'>" +
      "<p>" +
      item +
      "</p>" +
      "</div>")
  } else {
    return
  }
    var form = document.getElementById("myForm");
    form.reset();
}



function randomize() {
  var array = document.getElementsByTagName('p');
  array = array[Math.floor(Math.random() * array.length)];
  alert(array.innerHTML)
};
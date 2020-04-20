// click the close bottom to remove item from list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

// Click a done item to check it off 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('done');
  }
}, false); 


function Addtoitem(event) {
    event.preventDefault();
    var itembox = document.getElementById("itemBox").value;
    if (itembox === "") {
        alert("Add item first");
        return false;
    }else {
        alert("item added");
        addedItems = document.getElementById("added-items"
    ).innerHTML = itembox;
    return true;
}
}
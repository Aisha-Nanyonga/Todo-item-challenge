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


// Click Add button to add items to the list
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("itemBox").value;
  var ul = document.createTextNode(inputValue);
  li.appendChild(ul);
  if (inputValue === '') {
    alert("Add item first...");
  } else {
    document.getElementById("listitem").appendChild(li);
  }
  document.getElementById("itemBox").value = "";

  var span = document.createElement("SPAN");
  var ul = document.createTextNode("\u00D7");
   span.className = "close";
  span.appendChild(ul);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}



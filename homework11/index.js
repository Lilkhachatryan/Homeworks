let ul = document.getElementById("items");
let items = document.getElementsByTagName("LI");



let doneIcon = document.createElement("SPAN");
    doneIcon.className="glyphicon glyphicon-ok";

for(let i = 0; i < items.length; i++) {
    let deleteContainer = document.createElement("SPAN");
    deleteContainer.className = 'close';

    let deleteIcon = document.createElement("SPAN");
    deleteIcon.className="glyphicon glyphicon-trash";

    deleteContainer.appendChild(deleteIcon);
    items[i].appendChild(deleteContainer);

    if(items[i].className === 'checked') {
        items[i].innerHTML = `<span class='glyphicon glyphicon-ok'></span>` + items[i].innerHTML;
    }

}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if(ev.target.className === 'checked') {
        ev.target.innerHTML = `<span class='glyphicon glyphicon-ok'></span>` + ev.target.innerHTML;
    } else {
        ev.target.removeChild(ev.target.firstChild);
    }
   
  }
}, false);

function addItem() {
    let input = document.getElementById("add-input");

    if (input.value === '') {
        return
    }

    let li = document.createElement("li");
    let text = document.createTextNode(input.value);
    li.appendChild(text);
    
    ul.appendChild(li);

    input.value = "";
    
    let deleteContainer = document.createElement("SPAN");
    deleteContainer.className = 'close';

    let deleteIcon = document.createElement("SPAN");
    deleteIcon.className="glyphicon glyphicon-trash";

    deleteContainer.appendChild(deleteIcon);
    li.appendChild(deleteContainer);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}
let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
    
    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add('delete');
    item.append(delBtn);
});


ul.addEventListener('click', function(event) {
    let par = event.target.parentElement;
    if(event.target.nodeName == 'BUTTON') {
        par.remove();
    }
});




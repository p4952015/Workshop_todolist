// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let li = document.querySelectorAll('li');
  let close = document.querySelectorAll('.close');
  let input = document.querySelector('#input');
  let addBtn = document.querySelector('#addBtn');
  
  // checked
  for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
      this.classList.toggle('checked');
    })
  }
   // remove
   for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      this.parentElement.remove();
    })
  }
  // add_list
  addBtn.addEventListener('click', function(){
    let create_li = document.createElement('li');
    let list_content = input.value;
    create_li.textContent = list_content;

    let span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.textContent = "x";
    create_li.appendChild(span);

    let ul = document.querySelector('ul');
    ul.appendChild(create_li);

    span.addEventListener('click', function(){
      this.parentElement.remove();
    });
    create_li.addEventListener('click', function(){
      this.classList.toggle('checked');
    });
  })
})
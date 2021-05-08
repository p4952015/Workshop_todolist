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
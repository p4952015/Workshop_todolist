document.addEventListener('DOMContentLoaded', function(){
  let ul = document.querySelector('ul');
  let close = document.querySelectorAll('.close');
  let input = document.querySelector('#input');
  let addBtn = document.querySelector('#addBtn');
  let data = [];

  add_to_localstorage();
  // add_list_to_localstorage
  function add_to_localstorage(){
    addBtn.addEventListener('click', function(){
      let input_value = input.value;
      let data_obj = {
        list: input_value
      }
      data.push(data_obj);
      console.log(data);
      localStorage.setItem('list', JSON.stringify(data));

      input.value = ''; 
    })
    create_li();
  }
  //create_li
  function create_li(){
    let storage_data = JSON.parse(localStorage.getItem('list')) || [];

    if(storage_data.length !== 0){
      // ul.innerHTML = '';

      storage_data.forEach( (item) => {
        let create_li = document.createElement('li');
        create_li.textContent = item.list

        let create_span = document.createElement('span');
        create_span.setAttribute('class', 'close');

        let span = document.createElement('span');
        span.classList.add('close');
        span.textContent = "x";
        create_li.appendChild(span);

        ul.appendChild(create_li);

        span.addEventListener('click', function(){
          this.parentElement.remove();
        });
        create_li.addEventListener('click', function(){
          this.classList.add('checked');
        });
      })
    }
  }
  // checked
  // function checked() {
  //   ul.addEventListener('click', function(e){
  //     let li = e.target;
  //     li.classList.toggle('checked');
  //   })
  // }
  // remove
  function remove_li(){
    close.forEach(element => {
      element.addEventListener('click', function(e){
        e.target.parentElement.remove();
        
      })
    });
  }
})
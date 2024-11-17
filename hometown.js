var facts;


facts = ['Currency:	Brazilian Real', 'Time Zone: GMT-3', 'Language:	Portuguese', 'Flight Time: 12 hours from London Heathrow', 'Capital City:	Brasilia', 'National Dish:	Feijoada'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!facts.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = facts.shift();

    element_list.appendChild(new_li);
  }

});

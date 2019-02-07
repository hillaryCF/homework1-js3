const resetButton = document.getElementById('button-reset');
const save_button = document.getElementById('button-save');
const name = document.getElementById('name');

const amount = document.getElementById('amount');
const date1 = document.getElementById('date');
const option = document.getElementById('options');
const container = document.getElementById('trContainer');

resetButton.addEventListener('click', reset);
save_button.addEventListener('click', save);

function reset() {
  name.value = ' ';
  amount.value = ' ';
  date1.value = ' ';
  option.value = ' ';
}
function save() {
  nuevos();
}

function nuevos() {

  const tr = document.createElement('tr');
  const values = [name.value, option.value, date1.value, amount.value];
  const array = [{name: name.value},{amount: amount.value},{date: date1.value},{option: option.value}];
  console.log(array);

  for (let i = 0; i < 4; i += 1) {
    const td = document.createElement('td');
    const text = document.createTextNode(values[i]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  container.appendChild(tr);

  if (option.value == 'A') {
    let arreglo = amount.value;
    let suma = 0;
    for (let a = 0; a < arreglo.length; a ++ ) {
      suma += arreglo[a];
      console.log(suma);
    }
  }else if (option.value == 'B') {

  }
}

// function answer(suma) {
//   const list = document.getElementById('list');
//   const listA = document.createElement('ul');
//   const listAText = document.createTextNode('Bills A ' + suma);
//   listA.appendChild(listAText);
//   list.appendChild(listA);
// }

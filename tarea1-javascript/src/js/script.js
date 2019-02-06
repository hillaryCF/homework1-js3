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
}
function save() {
  nuevos();
  resultado()
}

function nuevos() {
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  const values = [name.value, option.value, date1.value, amount.value];
  const array = [values];
  console.log(array);

  for (let i = 0; i < 4; i += 1) {
    const td = document.createElement('td');
    const text = document.createTextNode(values[i]);
    td.appendChild(text);
    tr.appendChild(td);
  }
  container.appendChild(tr);
}
function resultado () {
  for ()
}

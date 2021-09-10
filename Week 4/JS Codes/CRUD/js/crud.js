/* var record = {
  id: '',
  name: '',
  email: '',
  password: '',
  phone: '',
};

const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const phoneNum = document.getElementById('phNum');
const form = document.getElementById('form');
const errorElement = document.getElementById('error'); */

/* const validate = () => {
  form.addEventListener('submit', (e) => {
    let messages = [];

    if (userName.value === '' || userName.value == null) {
      messages.push('Name is required');
    }

    if (email.value === '' || email.value == null) {
      messages.push('Email is required');
    }

    if (password.value === '' || password.value == null) {
      messages.push('Password is required');
    }

    if (password.value.length <= 5) {
      messages.push('Password must be Longer');
    }

    if (phoneNum.value === '' || phoneNum.value == null) {
      messages.push('Phone is required');
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join('- ');
    }
  });
}; */
/* 
const add = () => {
  var record = {};
  let userTable = document.getElementById('userTable');
  let rowCount = userTable.rows.length;
  let tr = userTable.insertRow(rowCount);
  tr = userTable.insertRow(rowCount);

  for (let i = 0; i < 4; i++) {
    let td = document.createElement('td');
    td = tr.insertCell(i);
  }

  if

  record.id = randomID();
  record.name = userName.value;
  record.email = email.value;
  record.password = password.value;
  record.phone = phoneNum.value;
  console.log(record);
  return false;
};

//Generate Random ID
const randomID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
 */

//Create Dynamic Table Headers
/* const createTable = () => {
  tabHead = ['ID', 'Name', 'Email', 'Phone']; // table headers
  let userTable = document.createElement('table');
  userTable.setAttribute('id', 'userTable');

  let tr = userTable.insertRow(-1);

  for (let i = 0; i < tabHead.length; i++) {
    var th = document.createElement('th');
    th.innerHTML = tabHead[i];
    tr.appendChild(th);
  }

  let div = document.getElementById('table-area');
  div.appendChild(userTable);
}; */

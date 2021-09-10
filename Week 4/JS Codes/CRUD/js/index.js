//Globals
var targetRow = null;

const onFormSubmit = () => {
  let record = getFormData();

  //Validate Inupt
  /*   if (!validation(record)) {
    resetForm();
    console.log('returning');
    return;
  } */

  /*   if (validation(record)) { */
  if (targetRow != null) {
    overwriteRecord(record); /* If Exist */
  }

  if (targetRow == null) {
    insertRecord(record);
  }
  resetForm(); /* Reset Values */
};

//Getter Function
const getFormData = () => {
  let formData = {};

  //read values
  formData['name'] = document.getElementById('name').value;
  formData['email'] = document.getElementById('email').value;
  formData['pass'] = document.getElementById('pass').value;
  formData['phNum'] = document.getElementById('phNum').value;

  return formData;
};

//Insert Row Function
const insertRecord = (record) => {
  /* Get table rows */
  let table = document
    .getElementById('userList')
    .getElementsByTagName('tbody')[0];

  let newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = record.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = record.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = record.pass;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = record.phNum;

  cell5 = newRow.insertCell(4); /* Options for Update and Delete */
  cell5.innerHTML = `<a onClick=updateRecord(this)>Edit</a>
                    <a onClick=deleteRecord(this)>Delete</a>`;
};

//Reset Values Function
const resetForm = () => {
  /* Assign each to empty string */
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('phNum').value = '';

  targetRow = null;
};

//Update Record Function
const updateRecord = (td) => {
  targetRow = td.parentElement.parentElement;

  document.getElementById('name').value = targetRow.cells[0].innerHTML;
  document.getElementById('email').value = targetRow.cells[1].innerHTML;
  document.getElementById('pass').value = targetRow.cells[2].innerHTML;
  document.getElementById('phNum').value = targetRow.cells[3].innerHTML;
};

//Overwrite Values of Record
const overwriteRecord = (record) => {
  targetRow.cells[0].innerHTML = record.name;
  targetRow.cells[1].innerHTML = record.email;
  targetRow.cells[2].innerHTML = record.pass;
  targetRow.cells[3].innerHTML = record.phNum;
};

//Delete Record Function
const deleteRecord = (td) => {
  if (confirm('حذف کی تصدیق کریں۔?')) {
    let row = td.parentElement.parentElement;
    document.getElementById('userList').deleteRow(row.rowIndex);
    resetForm();
  }
};

//Validation Function
const validation = (record) => {
  let messages = [];
  isValid = true; /* Deafult isValid to True */

  //Regex Tests
  const nameRegex = /^[a-zA-Z. ]{3,30}$/;
  const passRegex = /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* ^(.+)@(.+)$ */
  const phNumRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  //Verify Tests
  if (!nameRegex.test(record.name)) {
    messages.push('Name not upto standards');
    document.getElementById('errName').innerHTML = messages.pop();
    isValid = false;
  }

  if (!passRegex.test(record.pass)) {
    messages.push('Password not upto standards');
    document.getElementById('errPass').innerHTML = messages.pop();
    isValid = false;
  }

  if (!emailRegex.test(record.email)) {
    messages.push('Email not upto standards');
    document.getElementById('errEmail').innerHTML = messages.pop();
    isValid = false;
  }

  if (!phNumRegex.test(record.phNum)) {
    messages.push('Phone Number not upto standards');
    document.getElementById('errPhNum').innerHTML = messages.pop();
    isValid = false;
  }

  if (messages.length > 0) {
    console.log(messages);
  }

  return isValid;
};

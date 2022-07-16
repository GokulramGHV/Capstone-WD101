let viewEntries = false;
document.getElementById('div-entries').style.display = 'none';
function setViewEntries() {
  viewEntries = !viewEntries;
  if (viewEntries) {
    document.getElementById('div-entries').style.display = 'block';
    document.getElementById('survey-form').style.display = 'none';
  } else {
    document.getElementById('div-entries').style.display = 'none';
    document.getElementById('survey-form').style.display = 'block';
  }
}

const displayEntries = () => {
  const savedUserEntries = localStorage.getItem('user-entries');
  let entries = '';
  if (savedUserEntries) {
    const parsedUserEntries = JSON.parse(savedUserEntries);
    entries = parsedUserEntries
      .map((entry) => {
        const name = `<td class="td">${entry.name}</td>`;
        const email = `<td class="td">${entry.email}</td>`;
        const password = `<td class="td">${entry.password}</td>`;
        const dob = `<td class="td">${entry.dob}</td>`;
        const acceptTerms = `<td class="td">${entry.acceptTermsAndConditions}</td>`;
        const row = `<tr>${name} ${email} ${password} ${dob} ${acceptTerms}</tr>`;
        return row;
      })
      .join('\n');
  }
  if (entries === '') {
    entries =
      "<tr><td class='td text-center' colspan='5'>No entries found!</td></tr>";
  }
  var table = `<table class="border-collapse table-auto w-full "> <thead><tr>
<th class="th">Name</th>
<th class="th">Email</th>
<th class="th">Password</th>
<th class="th">Date-of-Birth</th>
<th class="th">Accepted Terms?</th>
</tr>
</thead>
<tbody class="bg-white">
${entries}</tbody> </table>`;
  let details = document.getElementById('entries');
  details.innerHTML = table;
};

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dob = document.getElementById('date-of-birth');
const acceptTC = document.getElementById('acceptTerms');

let checkValid = (event, elem) => {
  event.classList.add('valid:border-green-500');
  event.classList.add('invalid:border-red-500');
};

function reset() {
  name.value = '';
  email.value = '';
  password.value = '';
  dob.value = '';
  acceptTC.checked = false;
}

name.addEventListener('input', checkValid.bind(event, name));
email.addEventListener('input', checkValid.bind(event, email));
password.addEventListener('input', checkValid.bind(event, password));
dob.addEventListener('input', checkValid.bind(event, dob));

let birthYear = Number(dob.value.slice(0, 4));
let currDate = new Date();
let currYear = Number(currDate.getFullYear());
console.log(currYear);
console.log(birthYear);
dob.setAttribute('max', `${currYear - 18}-01-01`);
dob.setAttribute('min', `${currYear - 55}-01-01`);

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('This is not a valid email address!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

let userEntries = localStorage.getItem('user-entries');
if (userEntries) {
  userEntries = JSON.parse(userEntries);
} else {
  userEntries = [];
}
const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('date-of-birth').value;
  const acceptTermsAndConditions =
    document.getElementById('acceptTerms').checked;
  const userDetails = {
    name,
    email,
    password,
    dob,
    acceptTermsAndConditions,
  };
  userEntries.push(userDetails);
  localStorage.setItem('user-entries', JSON.stringify(userEntries));
  displayEntries();
  alert('Form Submitted!');
};

let form = document.getElementById('form');
form.addEventListener('submit', saveUserForm, true);
displayEntries();

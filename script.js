const formReload = document.querySelector("#form");
formReload.addEventListener("click", function (e) {
  e.preventDefault();
});

// MESSAGES
const emptyMessage = document.querySelector(".empty-message");
emptyMessage.style.display = "block";
const fillMessage = document.querySelector(".fill-message");
fillMessage.style.display = "none";
const doneMessage = document.querySelector(".done-message");
doneMessage.style.display = "none";

// ==================================================================

const addButton = document.querySelector("#add-button");
const includeButton = document.querySelector("#include-btn");

// Table const
const table = document.querySelector("#contacts-table");
const contactForm = document.querySelector("#contact-form");

addButton.addEventListener("click", function () {
  contactForm.style.display = "block";

  emptyMessage.style.display = "none";
  fillMessage.style.display = "block";
});

//setData BTN
includeButton.addEventListener("click", function () {
  // Form datas
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  table.innerHTML += `
  <tr>
    <td> ${name} ${surname} </td>
    <td>${email}</td>
    <td>${phone}</td>
  </tr>
 `;

  contactForm.style.display = "none";

  fillMessage.style.display = "none";
  doneMessage.style.display = "block";

  addButton.addEventListener("click", function () {
    contactForm.style.display = "block";

    doneMessage.style.display = "none";
    fillMessage.style.display = "block";
  });
});

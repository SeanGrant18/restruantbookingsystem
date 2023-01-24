const form = document.querySelector("form");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const partySizeInput = document.querySelector("#party-size");

form.addEventListener("submit", e => {
  e.preventDefault();

  // validate input
  if (!dateInput.value) {
    alert("Please enter a valid date.");
    return;
  }
  if (!timeInput.value) {
    alert("Please enter a valid time.");
    return;
  }
  if (!partySizeInput.value || partySizeInput.value < 1 || partySizeInput.value > 10) {
    alert("Please enter a valid party size between 1 and 10.");
    return;
  }

  // submit form
  alert(`Booking submitted! Date: ${dateInput.value}, Time: ${timeInput.value}, Party size: ${partySizeInput.value}`);
});
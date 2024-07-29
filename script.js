document.addEventListener("DOMContentLoaded", (event) => {
  const dateInput = document.querySelector("input");
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  dateInput.value = formattedDate;
});

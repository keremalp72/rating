const rateBtns = document.querySelectorAll(".rateBtn");
const submit = document.querySelector(".submit");
const ratenumber = document.querySelector("#selectedRate");

submit.addEventListener("click", rateScreen);

for (const rateBtn of rateBtns) {
  rateBtn.addEventListener("click", handleClick);
}

function rateScreen() {
  document.querySelector(".rating-container").innerHTML = `
    <div class="thanks-container">
      <img src="assets/images/payment.svg" alt="" />
      <p class="orangeP">You selected <span id="selectedRate">${
        document.querySelector(".selected").innerText
      } </span> out of 5</p>

      <div class="thanks-text">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  `;
}

function handleClick() {
  rateBtns.forEach(btn => btn.classList.remove("selected"));
  this.classList.add("selected");
}

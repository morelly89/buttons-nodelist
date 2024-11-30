const button = document
  .querySelector(".button")
  .addEventListener("click", () => {
    const temperature = parseFloat(document.getElementById("textBox").value);
    const toFahrenheit = document.getElementById("toFahrenheit").checked;
    const toCelsius = document.getElementById("toCelsius").checked;

    let result = 0;

    if (isNaN(temperature)) {
      alert("Please enter a valid number.");
      return;
    }

    if (toFahrenheit) {
      result = temperature * 1.8 + 32;
    }

    if (toCelsius) {
      result = ((temperature - 32) * 5) / 9;
    }

    const closingButton = document.createElement("button");
    closingButton.classList.add("closing-button");
    closingButton.addEventListener("click", () => {
      magicalH1.remove();
    });

    const magicalH1 = document.createElement("h1");
    magicalH1.innerHTML = `Converted temperature: ${result}`;
    magicalH1.classList.add("magical-h1");
    magicalH1.appendChild(closingButton);
    document.body.appendChild(magicalH1);
  });

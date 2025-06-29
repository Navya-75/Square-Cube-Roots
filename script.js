function calculateRoots() {
  const num = parseFloat(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(num) || num < 0) {
    result.textContent = "❗ Please enter a valid non-negative number.";
    return;
  }

  const squareRoot = Math.sqrt(num).toFixed(4);
  const cubeRoot = Math.cbrt(num).toFixed(4);

  result.textContent = `√ Square Root: ${squareRoot} | ∛ Cube Root: ${cubeRoot}`;
}

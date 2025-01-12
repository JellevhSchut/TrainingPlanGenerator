# Daniels' Running Formula Plan Generator

Welcome to the **Training Plan Generator**! Use the VDOT Running Calculator below to calculate your VDOT. You can then use this number to generate a customized running training plan based on your VDOT score and target race distance.

<iframe src="https://vdoto2.com/calculator/embed" width="600" height="1400" frameborder="0" scrolling="no"></iframe>

## Enter Your VDOT and Race Distance

Please enter your calculated VDOT from the calculator above and select your target race distance to generate your customized training plan.

<form id="planForm">
  <label for="vdot">VDOT:</label><br>
  <input type="number" step="0.1" id="vdot" name="vdot" required><br><br>

  <label for=currmileage>Current average weekly distance over last 4 weeks:</label><br>
  <input type="number" step="0.1" id="currmileage" name="currmileage" required><br><br>

  <label for=targmileage>Target weekly distance:</label><br>
  <input type="number" step="0.1" id="targmileage" name="targmileage" required><br><br>

  <label for=runningdays>How many days a week can you run?</label><br>
  <input type="number" min="1" max="7" id="runningdays" name="runningdays" required><br><br>

  <label for="distance">Distance:</label><br>
  <select id="distance" name="distance">
    <option value="5K">5K</option>
    <option value="10K">10K</option>
    <option value="half-marathon">Half Marathon</option>
    <option value="marathon">Marathon</option>
  </select><br><br>

  <button type="submit">Generate Plan</button>
</form>

<div id="plan"></div>

<script src="scripts/app.js"></script>
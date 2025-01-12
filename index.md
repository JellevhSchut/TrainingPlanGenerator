# Training Plan Generator

Welcome to the **Training Plan Generator**! Use the form below to generate a customized running training plan based on your VDOT score and race distance.

<iframe src='https://vdoto2.com/calculator/embed' width='600' height='1600' frameborder='0'></iframe>

<form id="planForm">
  <label for="vdot">VDOT:</label><br>
  <input type="number" id="vdot" name="vdot" required><br><br>

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
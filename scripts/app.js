document.getElementById('planForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const vdot = document.getElementById('vdot').value;
    const distance = document.getElementById('distance').value;

    // Generate a plan based on VDOT and distance
    const plan = generateTrainingPlan(vdot, distance);

    // Display the generated plan
    const planDiv = document.getElementById('plan');
    planDiv.innerHTML = `<h2>Your Training Plan:</h2>`;
    planDiv.innerHTML += plan.map((day, index) => `<p>Day ${index + 1}: ${day}</p>`).join('');
});

function generateTrainingPlan(vdot, distance) {
    const basePlan = {
        '5K': ['Easy Run', 'Intervals', 'Tempo', 'Rest', 'Long Run', 'Cross Train', 'Rest'],
        '10K': ['Easy Run', 'Hill Repeats', 'Tempo', 'Rest', 'Long Run', 'Fartlek', 'Rest'],
        'half-marathon': ['Recovery Run', 'Tempo', 'Intervals', 'Rest', 'Long Run', 'Threshold', 'Rest'],
        'marathon': ['Recovery Run', 'Tempo', 'Intervals', 'Rest', 'Long Run', 'Marathon Pace', 'Rest']
    };

    const plan = basePlan[distance] || [];
    return plan.map((day) => `${day} (VDOT: ${vdot})`);
}
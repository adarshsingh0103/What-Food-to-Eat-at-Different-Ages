document.getElementById('submitBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    const weight = parseInt(document.getElementById('weightInput').value);
    const mealSuggestion = document.getElementById('mealSuggestion');

    if (isNaN(age) || age < 0 || isNaN(weight) || weight <= 0) {
        mealSuggestion.innerHTML = "Please enter valid age and weight.";
        mealSuggestion.classList.remove('visible');
        return;
    }

    const currentTime = new Date();
    const hours = currentTime.getHours();
    let meal;

    if (age < 3) {
        meal = "Pureed vegetables or fruits.";
    } else if (age < 12) {
        meal = "Healthy snacks like fruits, veggies, or yogurt.";
    } else if (age < 20) {
        meal = "Balanced meals including proteins, grains, and vegetables.";
    } else if (age < 50) {
        meal = "Lean proteins, whole grains, and plenty of fruits and vegetables.";
    } else {
        meal = "Nutrient-rich foods like lean proteins, whole grains, and low-fat dairy.";
    }

    const waterIntake = (weight * 0.033).toFixed(2);
    let mealTime;
    if (hours < 11) {
        mealTime = "Breakfast";
    } else if (hours < 17) {
        mealTime = "Lunch";
    } else {
        mealTime = "Dinner";
    }

    mealSuggestion.innerHTML = `For your age (${age}), it's recommended to have: ${meal} <br> Time for: ${mealTime}. <br> Daily water intake should be: ${waterIntake} liters.`;
    mealSuggestion.classList.add('visible');
});

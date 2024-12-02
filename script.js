document.getElementById('submit-button').addEventListener('click', function() {
    let totalScore = 0;

    // Calculate score for each question
    const followers = document.querySelector('input[name="followers"]:checked');
    if (followers) totalScore += parseInt(followers.value);
  
    const aesthetic = document.querySelector('input[name="aesthetic"]:checked');
    if (aesthetic) totalScore += parseInt(aesthetic.value);
  
    const trends = document.querySelector('input[name="trends"]:checked');
    if (trends) totalScore += parseInt(trends.value);
  
    const lifestyle = document.querySelector('input[name="lifestyle"]:checked');
    if (lifestyle) totalScore += parseInt(lifestyle.value);
  
    const style = document.querySelector('input[name="style"]:checked');
    if (style) totalScore += parseInt(style.value);
  
    const phone = document.querySelector('input[name="phone"]:checked');
    if (phone) totalScore += parseInt(phone.value);
  
    const success = document.querySelector('input[name="success"]:checked');
    if (success) totalScore += parseInt(success.value);
  
    const morningRoutine = document.querySelector('input[name="morning-routine"]:checked');
    if (morningRoutine) totalScore += parseInt(morningRoutine.value);
       
    const google = document.querySelector('input[name="google"]:checked');
    if (google) totalScore += parseInt(google.value);

    const  decisions = document.querySelector('input[name=" decisions"]:checked');
    if (decisions) totalScore += parseInt(decisions.value);
  
    // Show results based on total score
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const suggestedPackage = document.getElementById('suggested-package');
    
    if (totalScore >= 76) {
      resultText.textContent = "Congratulations, you’ve made it! Your identity is as curated as it gets.";
      suggestedPackage.textContent = "Maximize Your Impact with Our Premium Packages";
    } else if (totalScore >= 51) {
      resultText.textContent = "You're close to perfection, but some extra curation will make you stand out even more.";
      suggestedPackage.textContent = "Step Up Your Game with Our Premium Packages";
    } else if (totalScore >= 26) {
      resultText.textContent = "You're doing okay, but a little polishing could take you to the next level.";
      suggestedPackage.textContent = "Suggested Package: Basic or Premium Packages";
    } else {
      resultText.textContent = "You're still figuring it out. Maybe it's time to invest in an upgrade.";
      suggestedPackage.textContent = "Unlock Your Potential: Start with Our Basic Packages Today!";
    }
  
    // Show the result
    resultContainer.classList.remove('hidden');
});

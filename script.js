var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Skills section dikhana hai
    }
    else {
        skillsSection.style.display = 'none'; // Skills section chhupana hai
    }
});

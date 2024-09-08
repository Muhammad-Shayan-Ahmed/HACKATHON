const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Skills section dikhana hai
    } else {
        skillsSection.style.display = 'none'; // Skills section chhupana hai
    }
});

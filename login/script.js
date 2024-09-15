function showStep(step) {
    // Hide all sections
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the correct section
    const activeSection = document.getElementById(`step${step}`);
    activeSection.classList.add('active');
}
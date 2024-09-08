Static Resume with TypeScript Interactivity
This project is a simple static resume built using HTML, CSS, and TypeScript. It displays basic information like Personal Information, Education, Skills, and Work Experience. Additionally, it uses TypeScript to provide interactivity, such as toggling the visibility of the "Skills" section when a button is clicked.

Features
Static Resume Sections:
Personal Information (Name, Contact Details, Profile Picture)
Education
Skills (With toggle visibility functionality)
Work Experience
TypeScript Interactivity: A button that toggles the visibility of the "Skills" section.
Technologies Used
HTML: Structure and layout of the resume.
CSS: Styling the resume to make it visually appealing.
TypeScript: To handle the interactivity (toggle feature) for the Skills section.
Setup Instructions
Clone the Repository
Clone this repository to your local machine using the following command:

git clone <repository-url>

Navigate to the Project Folder
Go to the project directory:

cd static-resume

Compile TypeScript to JavaScript
You need to compile the TypeScript code (script.ts) into JavaScript using the TypeScript compiler. Run the following command:

tsc script.ts

Open index.html in a Browser
You can now open the index.html file in your browser to see the resume and the interactivity in action.

Project Structure
.
├── index.html        # The main HTML file containing the resume layout
├── styles.css        # CSS file for styling the resume
├── script.ts         # TypeScript file for adding interactivity
├── script.js         # Compiled JavaScript file generated from TypeScript
└── README.md         # This file (project documentation)
Usage
Resume Layout: The index.html file provides the structure of the resume, displaying the personal information, education, skills, and work experience sections.

Toggle Skills Section: A button labeled "Toggle Skills" is provided at the bottom of the resume. When clicked, it will show or hide the "Skills" section using the following TypeScript functionality:

typescript
Copy code
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show section
    } else {
        skillsSection.style.display = 'none'; // Hide section
    }
});
Customization
You can easily modify this static resume by editing the index.html and styles.css files to change the layout, add more sections, or update the existing information.

Change Personal Information: Edit the text inside the <h2> and <p> tags in the Personal Information section.
Add More Skills: Simply add more list items (<li>) inside the <ul> of the Skills section.
Contributing
If you wish to contribute or improve this project, feel free to fork the repository and submit pull requests.

License
This project is open-source and available under the MIT License.

Contact
For any questions or suggestions, feel free to contact Muhammad Shayan Ahmed.

This README.md provides a comprehensive overview of the project, including instructions for setup, usage, and customization.







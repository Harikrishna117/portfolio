Hari Krishna Kasani Portfolio
Welcome to my personal portfolio website! This project showcases my skills, projects, education, internships, and contact information as a web developer and data scientist. The site features a responsive design, smooth scrolling navigation, and a clean, modern layout.
Overview

Author: Hari Krishna Kasani
Date Created: September 12, 2025
Technologies Used: HTML, CSS, JavaScript
Features:
Vertical navigation menu with smooth scrolling to sections
Sections for Home, Education, Skills, Projects, Internships, and Contact
Responsive design with a mobile-friendly layout
Profile image display on the Home section
Redirect from Projects page to the Projects section on the main page



Project Structure
portfolio/
├── index.html          # Main page with all sections
├── Education.html      # Placeholder for education details
├── Skills.html         # Placeholder for skills details
├── Projects.html       # Redirects to index.html#projects
├── Internships.html    # Placeholder for internship details
├── Contact.html        # Placeholder for contact details
├── css/
│   └── styles.css      # Stylesheet for the entire site
├── js/
│   └── script.js       # JavaScript file (currently unused)
├── images/
│   ├── profile.jpg     # Profile picture for the Home section

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd portfolio


Install Dependencies:

No additional dependencies are required. The project uses vanilla HTML, CSS, and JavaScript.


Run Locally:

Open index.html in a web browser by double-clicking the file or using a local server:python -m http.server 8000

Then visit http://localhost:8000 in your browser.


Add Your Image:

Replace images/profile.jpg with your own profile picture. Ensure the file name matches and the image is optimized (e.g., 150x150px recommended).



Usage

Navigation: Click any item in the vertical navigation menu (Home, Education, Skills, Projects, Internships, Contact) to smoothly scroll to the corresponding section.
Home Section: Displays your profile picture, welcome message, and a brief introduction.
Other Sections: Contains placeholder text for education, skills, projects, internships, and contact details. Customize these sections with your specific information.
Projects Page: Automatically redirects to the Projects section on the main page.

Customization

Update Content: Edit the <p> tags in each section of index.html to include your details (e.g., education history, skill list, project descriptions).
Styling: Modify css/styles.css to change colors, fonts, or layout. For example, adjust the .profile-img size or add section backgrounds:#education { background: #f9ebeb; }


Add Projects: Expand the #projects section with a grid layout by reusing the .project-grid and .project-card structure from earlier versions.
Contact Details: Update the #contact section with your actual email and phone number.

Deployment

Upload the entire portfolio folder to a web hosting service (e.g., Netlify, GitHub Pages).
Ensure the images/ folder and its contents are included.
Test the deployed site to confirm navigation and scrolling work as expected.

Contributing
Feel free to fork this repository and submit pull requests if you'd like to contribute. Suggestions for improvements (e.g., adding JavaScript functionality, enhancing responsiveness) are welcome!
License
This project is for personal use and demonstration purposes. No formal license is applied, but feel free to use it as a template with proper attribution to Hari Krishna Kasani.
Contact
For questions or collaboration, reach out at kasaniharikrishna792@gmail.com or +91 7695942598, +91 7093729294.

"use strict";
// Get references to the form
const form = document.getElementById('form');
const resumeDisplayElement = document.getElementById('resume-display');
const profilePictureInput = document.getElementById('profilePicture');
//
form.addEventListener('submit', (event) => {
    event.preventDefault(); //
    //collect value
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    //
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    //
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <div style="border: 1px solid;"></div>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px;">` : ''}
    <h3>Personal Information</h3>
    <p contenteditable="true"><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}}</p>

    <h3>Education</h3>
    <p contenteditable="true">${education}>
    

    <h3>Experience</h3>
    <p contenteditable="true">${experience}>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}>
    `;
    //
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
//
const updateButton = document.getElementById('create-button');
const forms = document.getElementById('form');
let isUpdated = false;
if (updateButton && forms) {
    updateButton.addEventListener('click', () => {
        const formIsValid = forms.checkValidity();
        if (formIsValid && !isUpdated) {
            updateButton.innerHTML = '<i class="bx bx-refresh"></i> Update Resume';
            isUpdated = true;
        }
    });
}

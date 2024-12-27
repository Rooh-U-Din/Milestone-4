// Get references to the form
const form =document.getElementById('form') as HTMLFormElement;
const resumeDisplayElement=document.getElementById('resume-display') as HTMLAreaElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

//

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();//

    //collect value
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('number') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience =(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value
//
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
//

    const resumeHTML=`
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
    `

    //

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    
})
//

const updateButton = document.getElementById('create-button') as HTMLButtonElement | null;
const forms = document.getElementById('form') as HTMLFormElement | null;
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

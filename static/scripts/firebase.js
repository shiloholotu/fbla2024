import app from "/static/scripts/firebaseConfig.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";    

// Get a reference to the Firestore database
const db = getFirestore(app);

/*// Add an event listener to the form's submit button
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission */

const but = document.getElementById("button");
but.addEventListener("click", (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get the file from the resume input field
  const resumeFile = formData.get("resume");

  // Create a new document in the "applications" collection
  addDoc(collection(db, "applications"), {
    joblist: formData.get("joblist"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    outreach: formData.get("outreach"),
    startdate: formData.get("startdate"),
    immigration: formData.get("immigration"),
    workability: formData.get("workability"),
    additionalinfo: formData.get("additionalinfo"),
    profile: formData.get("profile"),
    experience: formData.get("experience"),
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);

    // Upload the resume file separately
    const resumeRef = collection(db, "resumes").doc(docRef.id);
    const uploadTask = resumeRef.put(resumeFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads
        console.log("Resume uploaded successfully:", resumeRef.id);
        // Clear the form or display a success message
      }
    );
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
    // Handle errors
  });
});

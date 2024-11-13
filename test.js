// const cameraVideoStream = document.getElementById('camera-stream');
// const shutterButton = document.getElementById('shutter');
// const canvas = document.getElementById('canvas');
// const snapshotImage = document.getElementById('snapshot');
// const errorMessage = document.getElementById('error-message');
// const uploadImageButton = document.getElementById('upload-image');
// const fileCountInput = document.getElementById('file-count');
// const selectFilesButton = document.getElementById('select-files');
// const fileUpload = document.getElementById('file-upload');
// const uploadedFilesDiv = document.getElementById('uploaded-files');

// // New elements
// const ageButton = document.getElementById('age-button');
// const diabetesButton = document.getElementById('diabetes-button');
// const bloodPressureButton = document.getElementById('blood-pressure-button');
// const asthmaButton = document.getElementById('asthma-button');
// const bloodReportButton = document.getElementById('blood-report-button');
// const disclaimer = document.getElementById('disclaimer');

// async function startWebcam() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         cameraVideoStream.srcObject = stream;
//         errorMessage.textContent = ''; // Clear any previous error messages
//     } catch (error) {
//         console.error("Error accessing the camera:", error);
//         errorMessage.textContent = "Could not access the camera. Please check permissions.";
//     }
// }

// shutterButton.addEventListener('click', () => {
//     const videoWidth = cameraVideoStream.videoWidth;
//     const videoHeight = cameraVideoStream.videoHeight;

//     if (videoWidth && videoHeight) {
//         canvas.width = videoWidth;
//         canvas.height = videoHeight;

//         const context = canvas.getContext('2d');
//         context.drawImage(cameraVideoStream, 0, 0);

//         const dataURL = canvas.toDataURL('image/png');
//         snapshotImage.src = dataURL; // Set the image source to the captured data
//         snapshotImage.style.display = 'block'; // Show the captured image
//         uploadImageButton.style.display = 'block'; // Show upload button
//     } else {
//         errorMessage.textContent = "No video stream available.";
//     }
// });

// // Upload captured image functionality
// uploadImageButton.addEventListener('click', () => {
//     const dataURL = canvas.toDataURL('image/png');

//     // Here you can implement the upload logic to your server
//     console.log("Captured Image Data URL:", dataURL);
    
//     // For demonstration purposes, we'll just alert the user
//     alert("Captured image is ready for upload!");
// });

// // File upload functionality
// selectFilesButton.addEventListener('click', () => {
//     const fileCount = parseInt(fileCountInput.value);
    
//     if (fileCount > 0) {
//         fileUpload.setAttribute("multiple", "multiple");
//         fileUpload.click();
        
//         fileUpload.onchange = () => {
//             uploadedFilesDiv.innerHTML = ''; // Clear previous uploads
//             const files = Array.from(fileUpload.files);

//             if (files.length > fileCount) {
//                 alert(`You can only upload ${fileCount} files.`);
//                 return;
//             }

//             for (let i = 0; i < files.length; i++) {
//                 const fileItem = document.createElement('div');
//                 fileItem.textContent = files[i].name; // Display file name
//                 uploadedFilesDiv.appendChild(fileItem);
//             }
            
//             // Show an upload button for the selected files if needed
//             const uploadButton = document.createElement('button');
//             uploadButton.textContent = 'Upload Selected Files';
//             uploadButton.onclick = () => alert("Files ready for upload!"); // Implement actual upload logic here
//             uploadedFilesDiv.appendChild(uploadButton);
//         };
        
//     } else {
//         alert("Please enter a valid number of files.");
//     }
// });

// // New functionalities

// ageButton.addEventListener('click', () => {
//     const age = prompt("Please enter your age:");
//     if (age) {
//         alert(`Your age is ${age}.`);
//     }
// });

// diabetesButton.addEventListener('click', () => {
//     const hasDiabetes = prompt("Do you have diabetes? (yes/no)");
    
//     if (hasDiabetes?.toLowerCase() === "yes") {
//         const yearsHavingDiabetes = prompt("For how many years have you had diabetes?");
//         const diabetesLevel = prompt("What level of diabetes do you have? (Type 1/Type 2)");
        
//         alert(`You have had diabetes for ${yearsHavingDiabetes} years and your level is ${diabetesLevel}.`);
//     } else if (hasDiabetes?.toLowerCase() === "no") {
//          alert("Thank you for your response.");
//      } else {
//          alert("Please answer with 'yes' or 'no'.");
//      }
// });

// bloodPressureButton.addEventListener('click', () => {
//     const hasBloodPressureIssues = prompt("Do you have blood pressure issues? (yes/no)");
    
//     if (hasBloodPressureIssues?.toLowerCase() === "yes") {
//        const bpType = prompt("What type of blood pressure issue do you have? (high/low)");
//        alert(`You have ${bpType} blood pressure.`);
//    } else if (hasBloodPressureIssues?.toLowerCase() === "no") {
//        alert("Thank you for your response.");
//    } else {
//        alert("Please answer with 'yes' or 'no'.");
//    }
// });

// asthmaButton.addEventListener('click', () => {
//    const hasAsthma = prompt("Do you have asthma? (yes/no)");
//    alert(hasAsthma?.toLowerCase() === "yes" ? "Thank you for your response." : "Thank you for your response.");
// });

// bloodReportButton.addEventListener('click', () => {
//    disclaimer.style.display = 'block'; // Show disclaimer
//    fileUpload.setAttribute("accept", ".pdf,.jpg,.png"); // Accept specific file types
//    fileUpload.click();
   
//    fileUpload.onchange = () => {
//        const filesUploadedForBloodReport = Array.from(fileUpload.files);
//        uploadedFilesDiv.innerHTML += `<div>${filesUploadedForBloodReport[0].name}</div>`; // Show uploaded file name
//        alert("Blood report uploaded successfully!");
//    };
// });

// // Start the webcam when the page loads
// window.onload = startWebcam;

const cameraVideoStream = document.getElementById('camera-stream');
const shutterButton = document.getElementById('shutter');
const canvas = document.getElementById('canvas');
const snapshotImage = document.getElementById('snapshot');
const errorMessage = document.getElementById('error-message');
const uploadImageButton = document.getElementById('upload-image');
const fileCountInput = document.getElementById('file-count');
const selectFilesButton = document.getElementById('select-files');
const fileUpload = document.getElementById('file-upload');
const uploadedFilesDiv = document.getElementById('uploaded-files');

async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraVideoStream.srcObject = stream;
        errorMessage.textContent = ''; // Clear any previous error messages
    } catch (error) {
        console.error("Error accessing the camera:", error);
        errorMessage.textContent = "Could not access the camera. Please check permissions.";
    }
}

shutterButton.addEventListener('click', () => {
    const videoWidth = cameraVideoStream.videoWidth;
    const videoHeight = cameraVideoStream.videoHeight;

    if (videoWidth && videoHeight) {
        canvas.width = videoWidth;
        canvas.height = videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(cameraVideoStream, 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        snapshotImage.src = dataURL; // Set the image source to the captured data
        snapshotImage.style.display = 'block'; // Show the captured image
        uploadImageButton.style.display = 'block'; // Show upload button
    } else {
        errorMessage.textContent = "No video stream available.";
    }
});

// Upload captured image functionality
uploadImageButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');

    // Here you can implement the upload logic to your server
    console.log("Captured Image Data URL:", dataURL);
    
    // For demonstration purposes, we'll just alert the user
    alert("Captured image is ready for upload!");
});

// File upload functionality
selectFilesButton.addEventListener('click', () => {
    const fileCount = parseInt(fileCountInput.value);
    
    if (fileCount > 0) {
        fileUpload.setAttribute("multiple", "multiple");
        fileUpload.click();
        
        fileUpload.onchange = () => {
            uploadedFilesDiv.innerHTML = ''; // Clear previous uploads
            const files = Array.from(fileUpload.files);

            if (files.length > fileCount) {
                alert(`You can only upload ${fileCount} files.`);
                return;
            }

            for (let i = 0; i < files.length; i++) {
                const fileItem = document.createElement('div');
                fileItem.textContent = files[i].name; // Display file name
                uploadedFilesDiv.appendChild(fileItem);
            }
            
            // Show an upload button for the selected files if needed
            const uploadButton = document.createElement('button');
            uploadButton.textContent = 'Upload Selected Files';
            uploadButton.onclick = () => alert("Files ready for upload!"); // Implement actual upload logic here
            uploadedFilesDiv.appendChild(uploadButton);
        };
        
    } else {
        alert("Please enter a valid number of files.");
    }
});

// Start the webcam when the page loads
window.onload = startWebcam;
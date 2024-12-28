// Import the Firebase libraries as ES modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkAk6wtJFRflh38HyAcVh1WqTnrW44wgc",
    authDomain: "cab-test-nl.firebaseapp.com",
    projectId: "cab-test-nl",
    storageBucket: "cab-test-nl.firebasestorage.app",
    messagingSenderId: "478413853479",
    appId: "1:478413853479:web:59e1f9af1064b72337cf02",
    measurementId: "G-13NMCXQTBV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save data
async function saveData() {
    const name = document.getElementById('hodName').value;
    const time = document.getElementById('leavingTime').value;

    if (!name || !time) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        await addDoc(collection(db, "schedules"), {
            name,
            time,
            timestamp: new Date()
        });
        document.getElementById('responseMessage').textContent = `Thank you, ${name}. Your time (${time}) has been saved!`;
        document.getElementById('responseMessage').className = 'text-success';
    } catch (error) {
        console.error("Error saving data:", error);
        document.getElementById('responseMessage').textContent = 'Failed to save your data. Please try again.';
        document.getElementById('responseMessage').className = 'text-danger';
    }
}

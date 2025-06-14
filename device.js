import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBno6ZZbdWGwHIYh5Fvp_9kXsUGqEShDQg",
    authDomain: "earldecnew.firebaseapp.com",
    databaseURL: "https://earldecnew-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "earldecnew",
    storageBucket: "earldecnew.firebasestorage.app",
    messagingSenderId: "726385217086",
    appId: "1:726385217086:web:6c1efb2f78eabe25258b6f"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const rescuecamp = ref(database, 'RESCUE_CAMP/DATA');

onValue(rescuecamp, (snapshot1) => {
    const campdata = snapshot1.val();
    console.log("campdata data fetched from Firebase:", campdata); 
  
    const campdataElement = document.getElementById('npeople');
    const devicestatusElement = document.getElementById('status');
    
     if (campdata === 16) {
      campdataElement.innerText = "3";
      devicestatusElement.innerText ="IN RESCUE CAMP";
      
     
    } else if (campdata === 15) {
      campdataElement.innerText = "4";
      devicestatusElement.innerText ="IN RESCUE CAMP";
      
      
    }  else  {
      campdataElement.innerText = "4";
      devicestatusElement.innerText ="MISSING";

      
    }

    

  
  }, (error) => {
    console.error("Error fetching campdata data:", error);
  });

  const writeDataToFirebase = (value) => {
    const dataRef = ref(database, 'message/message1'); 
    set(dataRef, value)
      .then(() => {
        console.log(`Data updated successfully with value: ${value}`);
        alert(`MESSAGE SENT SUCCESSFULLY(MESSAGE ${value})`);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Error updating data: " + error.message);
      });
  };
  
  document.getElementById('button1').addEventListener('click', () => {
    writeDataToFirebase(1); 
  });
  
  document.getElementById('button2').addEventListener('click', () => {
    writeDataToFirebase(2); 
  });
  
  document.getElementById('button3').addEventListener('click', () => {
    writeDataToFirebase(3); 
  });

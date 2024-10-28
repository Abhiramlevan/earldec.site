import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDblDcFPdxVkkjQwEks9YxA47b2_rvGOyY",
  authDomain: "eldrec-8c131.firebaseapp.com",
  databaseURL: "https://eldrec-8c131-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eldrec-8c131",
  storageBucket: "eldrec-8c131.appspot.com",
  messagingSenderId: "1068738203161",
  appId: "1:1068738203161:web:6248b663a62856761d6488"
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

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


const alert = ref(database, 'MAIN/alert'); 
const soil = ref(database, 'MAIN/soilMoisture'); 
const mpu = ref(database, 'MAIN/mpu'); 
const house = ref(database, 'HOUSE/DATA'); 
const rescuecamp = ref(database, 'RESCUE_CAMP/DATA'); 
const rescueteam = ref(database, 'RESCUE_TEAM/DATA'); 



onValue(alert, (snapshot1) => {
  const alertData1 = snapshot1.val();
  console.log("Alert1 data fetched from Firebase:", alertData1); 

  const alertMessageElement = document.getElementById('ALERT');
  if (alertData1 === 1 ) {
    alertMessageElement.innerText = "GREEN ALERT";
    
  } else if (alertData1 === 2) {
    alertMessageElement.innerText = "YELLOW ALERT";
   
  } else if (alertData1 === 3) {
    alertMessageElement.innerText = "ORANGE ALERT";
    
  } else if  (alertData1 === 4) {
    alertMessageElement.innerText = "RED ALERT";
   
  }

}, (error) => {
  console.error("Error fetching alert1 data:", error);
});

  onValue(soil, (snapshot2) => {
    const soildata = snapshot2.val();
    console.log("soidata  fetched from Firebase:", soildata); 
   document.getElementById('SOILMOISTURE').innerText = soildata || "No data available";

 }, (error) => {
    console.error("Error fetching soildata data:", error);
  });

  onValue(mpu, (snapshot3) => {
    const mpudata = snapshot3.val();
    console.log("mpudata  fetched from Firebase:", mpudata); 
   document.getElementById('SLANTING').innerText = mpudata || "No data available";

 }, (error) => {
    console.error("Error fetching soildata data:", error);
  });

  onValue(rescuecamp, (snapshot4) => {
    const campdata = snapshot4.val();
    console.log("campdata data fetched from Firebase:", campdata); 
  
    const campdataElement = document.getElementById('PINCAMP');
    const missingElement = document.getElementById('MISSINGP');
     if (campdata === 16) {
      campdataElement.innerText = "38";
      missingElement.innerText = "147";
     
    } else if (campdata === 15) {
      campdataElement.innerText = "39";
      missingElement.innerText = "146";
      
    }else{
      campdataElement.innerText = "35";
      missingElement.innerText = "150";
    }

    

  
  }, (error) => {
    console.error("Error fetching campdata data:", error);
  });

  onValue(house, (snapshot5) => {
    const housedata = snapshot5.val();
    console.log("house data fetched from Firebase:", housedata); 
  
    const houseElement = document.getElementById('DMESSAGE');
  
    if (housedata === 37 ) {
      houseElement.innerText = "(234)DANGER AND LOACTION GIVEN TO RESCUE TEAM";
  
      
    } else if (housedata === 38) {
      houseElement.innerText = "(234)(4)UPDATED DATA GIVEN TO RESCUE CAMP";
     
    } else if (housedata === 36) {
      houseElement.innerText = "(234)(3)UPDATED DATA GIVEN TO RESCUE CAMP";
      
    } else if (housedata === 44) {
      houseElement.innerText = "(234)(SHOCK)";
      
    } 

    

  
  }, (error) => {
    console.error("Error fetching housedata data:", error);
  });

  onValue(rescueteam, (snapshot6) => {
    const teamdata = snapshot6.val();
    console.log("team data fetched from Firebase:", teamdata); 
  
    const teamElement = document.getElementById('RMESSAGE');
  
    if (teamdata === 25) {
        teamElement.innerText = "(6)LOCATION RECEIVED";
    } else if (teamdata === 24) {
        teamElement.innerText = "(6)MISSION COMPLETE";
    } else if (teamdata === 20) {
        teamElement.innerText = "(6)MESSAGE1";
    } else if (teamdata === 21) {
        teamElement.innerText = "(6)MESSAGE2";
    } else if (teamdata === 22) {
        teamElement.innerText = "(6)MESSAGE3";
    }
}, (error) => {
    console.error("Error fetching team data:", error);
});






  
  
 
  document.getElementById('accessForm').addEventListener('submit', (e) => {
    e.preventDefault();  
  
    const accessCode = parseInt(document.getElementById('accessCode').value); 
    const errorMessage = document.getElementById('errorMessage');
  
    if (accessCode === 234) {
   
      window.location.href = "device.html";  
    } else {
     
      errorMessage.textContent = "NO DEVICE FOUND.";
    }
  });

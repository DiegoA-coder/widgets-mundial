
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyBd0XjjgqXPAPXmLoO-g3NpAaNiNV-dd6w",
  authDomain: "pruebatagueo.firebaseapp.com",
  projectId: "pruebatagueo",
  storageBucket: "pruebatagueo.appspot.com",
  messagingSenderId: "516493388706",
  appId: "1:516493388706:web:54509b1c37ff4330c120fb",
  measurementId: "G-JE6BZ7SFWS"


};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let analytics = getAnalytics(app);

  //CLick widget
  document.getElementsByClassName("Page-header-drawer")[0].addEventListener('click',function () {
  logEvent(analytics,"widget-baz-contador")
  });
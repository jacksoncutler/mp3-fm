import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA0MO2vgg3wgJjUBOIZPZ5Dhh2_YUU6deU',
  authDomain: 'mp3-fm-7698b.firebaseapp.com',
  projectId: 'mp3-fm-7698b',
  storageBucket: 'mp3-fm-7698b.firebasestorage.app',
  messagingSenderId: '179532282913',
  appId: '1:179532282913:web:b44cdd9c3636caea163760',
};

export function initFirebase() {
  initializeApp(firebaseConfig);
}

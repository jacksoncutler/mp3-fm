import { initializeApp } from 'firebase/app';
import { getStorage, ref as refStore, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as refDB, child, get } from 'firebase/database';

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

export async function getSongURL(filename) {
  if (!filename) return;
  const path = 'songs/' + filename;
  const songRef = refStore(getStorage(), path);
  return await getDownloadURL(songRef);
}

export async function getSongData(id) {
  const dbRef = refDB(getDatabase());
  const snapshot = await get(child(dbRef, `songs/${id}`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else return {};
}

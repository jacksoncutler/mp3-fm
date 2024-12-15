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

export async function getPlaylists() {
  try {
    const dbRef = refDB(getDatabase());
    const snapshot = await get(child(dbRef, 'playlistNames'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else return {};
  } catch (err) {
    console.error(err);
  }
}

export async function getSongList(playlist) {
  try {
    const dbRef = refDB(getDatabase());
    const snapshot = await get(child(dbRef, `playlists/${playlist}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else return {};
  } catch (err) {
    console.error(err);
  }
}

export async function getSongURL(playlist, filename) {
  if (!filename) return;
  try {
    const path = `playlists/${playlist}/${filename}`;
    const songRef = refStore(getStorage(), path);
    return await getDownloadURL(songRef);
  } catch (err) {
    console.error(err);
  }
}

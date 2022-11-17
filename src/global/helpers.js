import { S3_BUCKET_SOURCE_URL } from '../constants';

const LOCAL_STORAGE_KEY = 'orgone';

/**
 * The function get properties from localStorage.
 *
 * @param key: string // property name
 * @returns property
 */
export const getFromLocalStorage = (key) => {
  const localObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  return key === LOCAL_STORAGE_KEY ? localObject : localObject[key];
};

/**
 * The function set properties to localStorage.
 *
 * @param key: string // property key
 * @param item: any // property value
 */
export const setToLocalStorage = (key, item) => {
  const localObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  localObject[key] = item;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localObject));
};

/**
 * The function returns random meditation from available list.
 */
export const getMeditationURL = () => {
  const availableMeditations = [
    `${S3_BUCKET_SOURCE_URL}00-orgone-INTRO-v2.wav`,
    `${S3_BUCKET_SOURCE_URL}01-orgone-LOVE-v2.wav`,
    `${S3_BUCKET_SOURCE_URL}02-orgone-GRATITUDE-v2.wav`,
  ];
  return availableMeditations[Math.floor(Math.random() * availableMeditations.length)];
};

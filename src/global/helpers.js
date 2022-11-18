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

/**
 * The function calculates total user progress.
 * @param moveProgress: number // user move progress
 * @param breathProgress: number // user breath progress
 * @param sleepProgress: number // user sleep progress
 * @param meditateProgress: number // user meditate progress
 * @returns number
 */
export const calculateTotalProgress = (
  moveProgress,
  breathProgress,
  sleepProgress,
  meditateProgress,
) => {
  return moveProgress / 4 + breathProgress / 4 + sleepProgress / 4 + meditateProgress / 4;
};

/**
 * The function calculates user rewards on breath session complete.
 */
export const calculateUserRewardsOnBreathCompleting = () => {
  const coins = getFromLocalStorage('coins') || 0;
  const breathProgress = getFromLocalStorage('breath-progress') || 0;
  const levelProgress = getFromLocalStorage('level-progress') || 0;
  const level = getFromLocalStorage('level') || 1;

  const updatedBreathProgress = breathProgress + 25;
  const updatedLevelProgress = levelProgress + 5;

  updatedBreathProgress >= 100
    ? setToLocalStorage('breath-progress', 100)
    : setToLocalStorage('breath-progress', updatedBreathProgress);

  setToLocalStorage('coins', coins + 5);

  if (updatedLevelProgress >= 100) {
    setToLocalStorage('level-progress', updatedLevelProgress - 100);
    setToLocalStorage('level', level + 1);
  } else {
    setToLocalStorage('level-progress', updatedLevelProgress);
  }
};

/**
 * The function calculates user rewards on meditation session complete.
 */
export const calculateUserRewardsOnMeditationCompleting = () => {
  const coins = getFromLocalStorage('coins') || 0;
  const meditationProgress = getFromLocalStorage('meditate-progress') || 0;
  const levelProgress = getFromLocalStorage('level-progress') || 0;
  const level = getFromLocalStorage('level') || 1;

  const updatedMeditationProgress = meditationProgress + 25;
  const updatedLevelProgress = levelProgress + 5;

  updatedMeditationProgress >= 100
    ? setToLocalStorage('meditate-progress', 100)
    : setToLocalStorage('meditate-progress', updatedMeditationProgress);

  setToLocalStorage('coins', coins + 5);

  if (updatedLevelProgress >= 100) {
    setToLocalStorage('level-progress', updatedLevelProgress - 100);
    setToLocalStorage('level', level + 1);
  } else {
    setToLocalStorage('level-progress', updatedLevelProgress);
  }
};

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

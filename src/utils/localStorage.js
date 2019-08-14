export const setlocalStorage = (key, value) => {
  const storage = window.localStorage;
  if (storage) {
    storage.setItem(key, value);
  }
}

export const getlocalStorage = (key) => {
  const storage = window.localStorage;
  if (storage) {
    return storage.getItem(key);
  }
}

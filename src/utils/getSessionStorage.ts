// export const getSessionStorage = (key: string): string | null  => {
//   return (sessionStorage.getItem(key));
// };

export const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

export const destroySessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

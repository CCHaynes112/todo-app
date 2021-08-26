const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token"

export const getAccessToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const saveAccessToken = (token) => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const destroyAccessToken = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};


export const getRefreshToken = () => {
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const saveRefreshToken = (token) => {
  window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const destroyTokens = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export default { getAccessToken, saveAccessToken, getRefreshToken, saveRefreshToken, destroyTokens };

const BASE_URL = "https://eventlight-api.duckdns.org";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    return Promise.reject(data.message || `Erro: ${res.status}`);
  });
};

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getCurrentUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const getScenes = (token) => {
  return fetch(`${BASE_URL}/scenes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const createScene = (sceneData, token) => {
  return fetch(`${BASE_URL}/scenes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sceneData),
  }).then(checkResponse);
};

export const updateScene = (sceneId, sceneData, token) => {
  return fetch(`${BASE_URL}/scenes/${sceneId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sceneData),
  }).then(checkResponse);
};

export const deleteScene = (sceneId, token) => {
  return fetch(`${BASE_URL}/scenes/${sceneId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const getSavedColors = (token) => {
  return fetch(`${BASE_URL}/colors`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const saveColor = (colorData, token) => {
  return fetch(`${BASE_URL}/colors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(colorData),
  }).then(checkResponse);
};

export const deleteSavedColor = (colorId, token) => {
  return fetch(`${BASE_URL}/colors/${colorId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

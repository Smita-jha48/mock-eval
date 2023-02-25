export const BACKEND_URL = "http://localhost:8080/";

export const GET_SONG_DATA = {
  url: "api/records",
  method: "get",
};

export const GET_SONG_LIKE = (songId) => ({
  url: `api/records/${songId}/likes`,
  method: "get",
});

export const UPDATE_SONG_DATA = (songId) => ({
  url: `api/records/${songId}/likes`,
  method: "patch",
});
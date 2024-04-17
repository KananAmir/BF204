export function setToLocalStorage(arr) {
  localStorage.setItem("users", JSON.stringify(arr));
}
export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

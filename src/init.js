export default function init() {
  let state = JSON.parse(localStorage.getItem('recipeBook'));
  if (state === null) {
    localStorage.setItem('recipeBook', JSON.stringify([]));
  }
  return state;
}
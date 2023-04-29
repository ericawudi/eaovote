const LOCAL_STORE_KEY = "eoa-vote-app";

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORE_KEY, serializedState);
  } catch (err) {
    console.log(err);
  }
};
// localStorage.clear();
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORE_KEY);
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const clearStateInLocalStorage = () => localStorage.clear();

export {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
  clearStateInLocalStorage,
};

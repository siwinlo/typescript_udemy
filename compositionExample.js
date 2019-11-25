// This is multiple inheritance rather than composition

const rectangle = state => {
  return {
    area: () => {
      return state.height * state.width;
    }
  };
};

const openable = state => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    }
  };
};

const buildRectangleWindow = state => {
  return Object.assign(state, rectangle(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false
});

console.log(rectangleWindow);
rectangleWindow.toggleOpen();
console.log(rectangleWindow);

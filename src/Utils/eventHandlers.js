const hoverHandler = (setEditIcon) => {
  setEditIcon(true)
};
const hoverOut = (setEditIcon) => {
  setEditIcon(false)
};
const openImgInput = (id) => {
  document.getElementById(id).click();
};

export { hoverHandler, hoverOut, openImgInput };

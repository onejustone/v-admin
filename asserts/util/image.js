const magnifyIamge = function _magnifyIamge (image, maxWidth) {
  const imageWidth = image.width
  const imageHeight = image.height
  const boundaryWidth = maxWidth
  const r = imageWidth / imageHeight
  image.width = r > 1 ? boundaryWidth : boundaryWidth * r
  image.height = r < 1 ? boundaryWidth : boundaryWidth / r
}

const adjustImage = function _adjustImage (image, maxWidth) {
  const imageWidth = image.width
  const imageHeight = image.height
  const boundaryWidth = Math.min(imageWidth, maxWidth)
  const r = imageWidth / imageHeight
  image.width = r > 1 ? boundaryWidth : boundaryWidth * r
  image.height = r < 1 ? boundaryWidth : boundaryWidth / r
}

export {
  magnifyIamge,
  adjustImage
}

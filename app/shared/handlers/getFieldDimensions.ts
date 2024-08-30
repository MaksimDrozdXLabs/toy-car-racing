export const getFieldDimensions = (fieldWidth: number) => {
  const defaultWidth = 538;
  const defaultHeight = 300;
  const aspectRatio = defaultHeight / defaultWidth;
  const height = fieldWidth * aspectRatio;

  return {
    width: fieldWidth,
    height,
    aspectRatio,
    defaultHeight,
    defaultWidth,
  };
};

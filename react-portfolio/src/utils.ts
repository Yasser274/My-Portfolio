export const getImageUrl = (path: any) => {
  const url = `/assets/${path}`;
  console.log('generated URL:', url);
  return url;
};
//? .href extracts the complete string URL from the URL object
//EX: return something like: "/assets/{path}.png" to make it easier and faster to get images

export const chunkString = (str, chunkLength) => {
  if (typeof str == 'string') {
    return str.match(new RegExp('.{1,' + chunkLength + '}' + 'g'));
  }else {
    return undefined;
  }
};

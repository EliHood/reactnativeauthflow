const isLetterOnly = chars => {
  let onlyLetter = /^[a-zA-Z]+$/;
  return chars.match(onlyLetter);
};

export const validateString = chars => {
  if (chars.length > 0) {
    if (isLetterOnly(chars)) {
      if (chars.length > 6) {
        return true;
      } else {
        return "Must be at least 6 chars";
      }
    } else {
      return "Title must contain only letters";
    }
  } else {
    return "Field cannot be empty";
  }
};

export const validateContent = chars => {
  if (chars.length > 0) {
    if (chars.length > 10) {
      return true;
    } else {
      return "Must be at least 10 chars";
    }
  } else {
    return "Field cannot be empty";
  }
};

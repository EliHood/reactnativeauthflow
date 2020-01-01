const isLetterOnly = chars => {
  let onlyLetter = /^[a-zA-Z]+$/;
  return chars.match(onlyLetter);
};

const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = chars => {
  if (chars.length > 0) {
    if (isEmail(chars)) {
      return true;
    } else {
      return "Email not valid";
    }
  } else {
    return "Field cannot be empty";
  }
};
export const validatePassword = chars => {
  if (chars.length > 0) {
    if (chars.length > 6) {
      return true;
    } else {
      return "Must be at least 6 chars";
    }
  } else {
    return "Field cannot be empty";
  }
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

const debounce = (func, timeout = 300) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), timeout);
  };
}

export default debounce;
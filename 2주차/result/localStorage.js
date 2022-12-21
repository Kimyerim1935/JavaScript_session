export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    alert('데이터를 저장하지 못했습니다')
  }
}

export const getItem = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return defaultValue
    }
    return JSON.parse(value);
  } catch (e) {
    alert('데이터를 호출하지 못했습니다');
    return defaultValue;
  }
}
export const API_END_POINT = 'https://api.idiots.band';

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok)  {
      throw new Error('서버에서 준 응답이 올바르지 않습니다.');
    }

    return res.json()

  } catch (e) {
    console.log(e);

    alert('서버에서 뭔가 문제가 있어요. 나중에 다시 시도해보세요')
  }
}
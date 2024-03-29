export const getToken = async () => {
  const TOKEN = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(TOKEN);
  const data = response.json();
  return data;
};

const getQuestions = async () => {
  const userToken = localStorage.getItem('token');
  const question = `https://opentdb.com/api.php?amount=5&token=${userToken}`;
  const response = await fetch(question);
  const data = await response.json();
  return data;
};

export default getQuestions;

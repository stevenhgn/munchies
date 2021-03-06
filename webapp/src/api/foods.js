import axiosInstance from './';
const qs = require('querystring');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};
const getFoods = async (priceRanges, categories) => {
  let foods = null;
  if (priceRanges) {
    const res = await axiosInstance.get(`/foods?priceRange=${priceRanges}`);
    foods = res.data.items;
  } else {
    const res = await axiosInstance.get('/foods');
    foods = res.data.items;
  }
  return foods;
};
const getFoodwithId = async (foodId) => {
  const res = await axiosInstance.get('/foods/' + foodId);
  let food = res.data.item;
  return food;
};
const createNewFood = async (reqBody) => {
  const res = await axiosInstance.post('/foods', qs.stringify(reqBody), config);
  let food = res.data.item;
  return food;
};
const updateFood = async (reqBody, foodId) => {
  const res = await axiosInstance.put('/foods/' + foodId, qs.stringify(reqBody), config);
  let food = res.data.item;
  return food;
};

const deleteFoodWithId = async (foodId) => {
  const res = await axiosInstance.delete('/foods/' + foodId);
  let message = res.data.message;
  return message;
};

export { getFoods, getFoodwithId, createNewFood, deleteFoodWithId, updateFood };

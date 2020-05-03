import axiosInstance from "./";

const getFoods = async () => {
  const res = await axiosInstance.get("/foods");
  let foods = res.data.items;
  return foods;
};
const getFoodwithId = async (foodId) => {
  const res = await axiosInstance.get("/foods/" + foodId);
  let food = res.data.item;
  return food;
};
const createNewFood = async () => {
  const res = await axiosInstance.post("/foods");
  //TODOS:
  let food = res.data.item;
  return food;
};

export { getFoods, getFoodwithId, createNewFood };

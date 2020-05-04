import axiosInstance from "./";
const qs = require("querystring");

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
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
const createNewFood = async (reqBody) => {
  const res = await axiosInstance.post("/foods", qs.stringify(reqBody), config);
  //TODOS:
  let food = res.data.item;
  return food;
};

const deleteFoodWithId = async (foodId) => {
  const res = await axiosInstance.delete("/foods/" + foodId);
  let food = res.data.item;
  return food;
};

export { getFoods, getFoodwithId, createNewFood, deleteFoodWithId };

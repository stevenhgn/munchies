import axiosInstance from "./";

const getFoods = async () => {
  const res = await axiosInstance.get("/foods");
  let foods = res.data.items;
  return foods;
};

export default getFoods;

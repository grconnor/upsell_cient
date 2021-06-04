import axios from "axios";

const fetchAllProducts = async () => {
  let response = await axios.get("/products");
  return response.data.products;
};

export default fetchAllProducts;
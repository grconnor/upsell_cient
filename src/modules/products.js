import axios from "axios";

const Products = {
  async index() {
    let response = await axios.get("/products");
    return response.data.products;
  },

  async show(productId) {
    try {
      const response = await axios.get(`/products/${productId}`);
      return response.data.product;
    } catch (error) {
      return error.response.data.error;
    }
  },
};

export default Products;

// import axios from "axios";

// const fetchAllProducts = async () => {
//   let response = await axios.get("/products");
//   return response.data.products;
// };

// export default fetchAllProducts;
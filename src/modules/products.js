import axios from "axios";

const Products = {
  async index() {
    let result = await axios.get("/products");
    return result.data.products;
  },

  async show(productId) {
    try {
      let result = await axios.get(`/products/${productId}`);
      return result.data.product;
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
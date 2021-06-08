import axios from "axios";

// eslint-disable-next-line no-unused-vars
const authenticate = async (email, password) => {
  try {
    const response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    // eslint-disable-next-line no-undef
    await storeAuthCredentials(response);
    return { authenticated: true };
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] };
  }
}

export default { authenticate }
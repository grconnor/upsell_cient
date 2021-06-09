import axios from "axios";
import JtockAuth from "j-tockauth";

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

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "http://localhost:3000";
} else {
  apiUrl = "http://localhost:3000";
}

const auth = new JtockAuth({
  host: apiUrl,
  prefixUrl: "/api/v1",
})

const getAuthHeaders = () => {
  let headers = localStorage.getItem("J-tockAuth-Storage");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };
  return headers;
};

const persistLogin = async (dispatch) => {
  if (localStorage.getItem("J-tockAuth-Storage")) {
    let credentials = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    const response = await auth.validateToken(credentials);

    if (response.success) {
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: response.success,
          currentUser: response.data,
        },
      });
    } else {
      console.log(response);
    }
  }
};

export { authenticate, auth, getAuthHeaders, persistLogin };
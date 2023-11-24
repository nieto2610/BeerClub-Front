const ApiFormLogin = async (store) => {
  return new Promise((resolve) => {
    const axios = require("axios");
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: store,
    })
      .then((response) => resolve(response.data))
      .catch((error) => resolve(error));
  });
};

export default ApiFormLogin;

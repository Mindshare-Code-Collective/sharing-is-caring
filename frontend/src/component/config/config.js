const backendUrl = "http://localhost:3333";
const config = {
  environment: "development",
  apiEndpoint: backendUrl,
  routes: {
    user:{
      login: backendUrl + "/users/login",
      logout: backendUrl + "/users/logout",
      register: backendUrl + "/users/register",
      dashboard: backendUrl + "/users/dashboard/"
    },
    product:{
      getAllProducts : backendUrl + "/products",
      createProduct : backendUrl + "/products",
      getAProduct:  backendUrl + "/products/:id",
      updateProduct:  backendUrl + "/products/:id",
      deleteProduct:  backendUrl + "/products/:id",
    }
  },
  database: {
    host: "localhost"
  },
};

export default config;
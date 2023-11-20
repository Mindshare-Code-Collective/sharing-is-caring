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
      deleteProduct:  backendUrl + "/products/",
    },
    message:{
      createNewConversation : backendUrl + "messages/send",
      getCoversationById : backendUrl + "messages/:id",
      addMessageToConversation : backendUrl + "messages/addto",
    }
  },
  database: {
    host: "localhost"
  },
};

export default config;
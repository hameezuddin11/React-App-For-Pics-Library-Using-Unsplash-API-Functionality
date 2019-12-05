import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization:
      "Client-ID eb022b8287bf66534790081441b56bd7412bbc2434d1f80e488004abc4f16e43"
  }
});

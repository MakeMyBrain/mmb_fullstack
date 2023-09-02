import axios from "axios";
const getResponse = async (api_type, messages) => {
  try {
    let response;

    if (api_type === 1) {
      response = await axios.post(`http://127.0.0.1:5000/kaira/t1/`, {
        messages: messages,
        userID: 1,
      });
    } else {
      response = await axios.post(`http://127.0.0.1:5000/kaira/t2/`, {
        messages: messages,
        userID: 1,
      });
    }

    console.log(response);
    return response.data;
  } catch (error) {
    console.log("error.message", error.message);
  }
};

export default getResponse;

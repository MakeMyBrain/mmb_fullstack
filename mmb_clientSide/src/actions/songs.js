import axios from "axios";
const baseUrl = process.env.baseURL || "http://localhost:5001";

export const GetSongsAction = async (history_cache, mood_query) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/GetSongs`,
      { history_cache: history_cache, mood_query: mood_query },
      config
    );
    if (!data) {
      throw new Error("Error in fetching songs");
      return;
    }
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

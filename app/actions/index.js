import jsonPlaceholder from "../apis/jsonPlaceholder";
import regeneratorRuntime from "regenerator-runtime";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};

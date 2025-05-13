// common business logic related util methods
import axios from "axios";
import { baseUri } from "../config/config";

axios.defaults.headers.post["Content-Type"] = "application/json";

const _url = "https://cors-anywhere.herokuapp.com/";
export async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
  custom_api_url = null,
}) {
  const reqObj = {
    method,
    url: custom_api_url ? custom_api_url + path : baseUri + path,
    headers,
  };

  reqObj.params = queryParams;

  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }

  let results;
  if (postData instanceof FormData) {
    console.log(...postData, "<===REQUEST-DATA===>");
  }
  console.log("<===REQUEST-OBJECT===>", reqObj);

  try {
    results = await axios(reqObj);
    // console.log("<===Api-Success-Result===>", results);
    console.log(results.data, "--API SUCCESS");
    return results.data;
  } catch (error) {
    console.log("<===Api-Error===>", error.response?.data);
    console.log(error.response, "--API ERROR");

    // if (error.response?.status === 401) {
    //   localStorage.clear();
    //   window.location.reload();
    // }

    return {
      code: error.response?.status,
      message: error.response?.data.message ? error.response.data.message : "",
    };
  }
}

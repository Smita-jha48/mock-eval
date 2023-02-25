import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { BACKEND_URL } from "../../constants/apiEndPoints";
import { headers } from "../../constants/headers"; 

const makeRequest = async (
  apiEndPoint,
  dynamicConfig = {},
  navigate,
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      headers: headers,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`error/${errorStatus}`);
      } else {
        navigate('error');
      }
    }
  }
};

export default makeRequest;
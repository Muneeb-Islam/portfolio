import { invokeApi } from "@/bl_libs/invokeApi";
import { sendEmailKey } from "@/config/config";
export const _send_subscriber_email = async (data) => {
  const requestObj = {
    path: `api/app_api/send_subscriber_email`,
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _book_a_call = async (data) => {
  const requestObj = {
    path: `api/app_api/add_appointment`,
    method: "POST",
    postData: data,
  };
  return invokeApi(requestObj);
};

export const send_email = async (data) => {
  const requestObj = {
    path: `api/send_email`,
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "x-sh-key": sendEmailKey, 
    },
    postData: data,
    custom_api_url: "https://api.mail.mailcub.com/"
  };
  return invokeApi(requestObj);
};

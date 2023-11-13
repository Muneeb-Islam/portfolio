import { api_key } from "@/config/config";
import { invokeApi } from "../bl_libs/invokeApi";

export const _send_contact_support_email = async (data) => {
  const requestObj = {
    path: `/app/send_contact_support_email`,
    method: "POST",
    headers: { "x-auth-api-key": api_key },
    postData: data,
  };
  return invokeApi(requestObj);
};

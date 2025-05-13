import { invokeApi } from "@/bl_libs/invokeApi";
export const _send_subscriber_email = async (data) => {
  const requestObj = {
    path: `api/app_api/send_subscriber_email`,
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    postData: data,
  };
  return invokeApi(requestObj);
};

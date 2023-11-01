import { invokeApi } from "../bl_libs/invokeApi";

export const _sending_email = async (data) => {
  const requestObj = {
    path: `/api/app_api/sending_email`,
    method: "POST",
    headers: {},
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _list_active_courses_for_user = async (data) => {
  const requestObj = {
    path: `/api/course/list_active_courses_for_user`,
    method: "GET",
    headers: {},
    postData: data,
  };
  return invokeApi(requestObj);
};

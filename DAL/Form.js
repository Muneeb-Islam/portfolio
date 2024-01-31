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

export const _payment_free = async (data) => {
  const requestObj = {
    path: `/app/payment`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _payment_for_one_time = async (plan_id) => {
  const requestObj = {
    path: `/app/payment`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: plan_id,
  };
  return invokeApi(requestObj);
};

export const confirm_one_time_payment_for_web = async (data) => {
  const requestObj = {
    path: `/app/change_one_time_payment_status_by_web_v1`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const confirm_subscription_incomplete_for_web = async (data) => {
  const requestObj = {
    path: `/app/confirm_subscription_incomplete`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const pay_now_for_subscription_web = async (data) => {
  const requestObj = {
    path: `/app/pay_now_by_web`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

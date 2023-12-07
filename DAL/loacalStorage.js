export const _get_website_setting_from_localStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("website_setting"));
  } else return {};
};

export const _set_website_setting_in_localStorage = (data) => {
  localStorage.setItem("website_setting", JSON.stringify(data));
};

const _get_token_from_localStorage = () => {
  return localStorage.getItem("token");
};

const _get_user_from_localStorage = () => {
  const user_profile = localStorage.getItem("user");
  if (
    user_profile &&
    user_profile !== undefined &&
    user_profile !== "undefined" &&
    user_profile !== null
  ) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return {};
  }
};

const _set_user_in_localStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

module.exports = {
  _get_user_from_localStorage,
  _set_user_in_localStorage,
  _get_token_from_localStorage,
};

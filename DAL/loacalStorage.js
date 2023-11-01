export const _get_website_setting_from_localStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("website_setting"));
  } else return {};
};

export const _set_website_setting_in_localStorage = (data) => {
  localStorage.setItem("website_setting", JSON.stringify(data));
};

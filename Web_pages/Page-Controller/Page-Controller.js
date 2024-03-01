import HomePage from "../Home/Home";
import PlanPage from "../Plan-Page/PlanPage";

export default function PageController({ page_data }) {
  const page_name_component = page_data.page_name;
  const pageData = page_data.web_page;

  return (
    <>
      {page_name_component === "home" ? (
        <HomePage result={pageData} />
      ) : page_name_component === "plan-page" ? (
        <PlanPage result={pageData} />
      ) : (
        <HomePage result={pageData} />
      )}
    </>
  );
}

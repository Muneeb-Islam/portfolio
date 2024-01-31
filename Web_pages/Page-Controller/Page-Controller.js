import HomePage from "../Home/Home";

export default function PageController({ page_data }) {
  const page_name_component = page_data.page_name;

  const pageData = page_data.page_data;

  console.log(page_data, "--page_datapage_data");
  return (
    <>
      {page_name_component === "home" ? (
        <HomePage result={pageData} />
      ) : (
        <HomePage result={pageData} />
      )}
    </>
  );
}

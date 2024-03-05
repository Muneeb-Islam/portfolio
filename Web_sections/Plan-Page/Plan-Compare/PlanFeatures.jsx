import { s3baseUrl } from "@/config/config";
import React from "react";

export default function PlanFeatures(props) {
  const { plan_feature, title } = props;
  return (
    <>
      {plan_feature.map((items, index) => {
        return (
          <>
            <div className="mt-5">
              <h3>{items.plan_feature_title}</h3>
            </div>
            <table className="table table-bordered ms-2 mt-3">
              <thead>
                {items.plan_features.map((items, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="col" className="">
                          {items.title}
                        </th>
                        {items.features.map((item, index) => {
                          return (
                            <>
                              {item.text ? (
                                <td className="text-center">{item.text}</td>
                              ) : (
                                <td scope="col" className="text-center">
                                  <img src={s3baseUrl + item.icon} alt="" />
                                </td>
                              )}
                            </>
                          );
                        })}
                      </tr>
                    </>
                  );
                })}
              </thead>
            </table>
          </>
        );
      })}
      {/* <table className="table table-bordered ms-2 mt-3">
        <thead>
          {plan_feature.map((items, index) => {
            return (
              <>
                <h3>{items.plan_feature_title}</h3>
                {items.plan_features.map((item) => {
                  return (
                    <>
                      <tr>
                        <th scope="col" className="">
                          {item.title}
                        </th>
                        {item.features.map((item, index) => {
                          return (
                            <>
                              {item.text ? (
                                <td className="text-center">{item.text}</td>
                              ) : (
                                <td scope="col" className="text-center">
                                  <img src={s3baseUrl + item.icon} alt="" />
                                </td>
                              )}
                            </>
                          );
                        })}
                      </tr>
                    </>
                  );
                })}
              </>
            );
          })}
        </thead>
      </table> */}
    </>
  );
}

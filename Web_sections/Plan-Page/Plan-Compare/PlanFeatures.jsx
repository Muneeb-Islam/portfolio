import { s3baseUrl } from "@/config/config";
import React from "react";

export default function PlanFeatures(props) {
  const { plan_feature, title } = props;
  return (
    <>
      <div>
        <h3>{title}</h3>
      </div>

      <table className="table table-bordered ms-2 mt-3">
        <thead>
          {plan_feature.map((items, index) => {
            return (
              <tr>
                <th scope="col" className="">
                  {items.plan_feature_title}
                </th>
                {items.plan_features.map((item) => {
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
            );
          })}
        </thead>
      </table>
    </>
  );
}

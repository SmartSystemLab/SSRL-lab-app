import React from "react";
import Dashboxes from "./Dashboxes";
import { ArrowDown, ArrowUp } from "lucide-react";

const Requests = ({ requests, userId }) => {
  return (
    <Dashboxes header="Requests" nav="requests">
      <ul className="">
        {requests.length > 0 ? (
          requests.map((request) => {
            const { _id, title, sender, type, status } = request;

            return (
              <li
                key={_id}
                className="my-2 rounded-lg border p-2 hover:bg-navBg1"
              >
                <p className="fade-in truncate text-base text-navBg2">
                  {title}
                </p>
                <div className="flex items-center gap-4">
                  <span>
                    {userId == sender ? (
                      <ArrowDown
                        color={status == "Pending" ? "red" : "green"}
                      />
                    ) : (
                      <ArrowUp color={status == "Pending" ? "red" : "green"} />
                    )}
                  </span>
                  <li className="capitalize">{type}</li>
                </div>
              </li>
            );
          })
        ) : (
          // Work on skeletons
          <div className="space-y-2">
            <p>No items...</p>
          </div>
        )}
      </ul>
    </Dashboxes>
  );
};

export default Requests;

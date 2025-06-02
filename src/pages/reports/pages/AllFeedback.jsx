import React from "react";
import { useLocation } from "react-router-dom";
import { formatDate } from "../../../utils/funcs";

const Feedbacks = () => {
  const location = useLocation();
  const { feedback, name } = location.state;

  return (
    <div>
      <h1 className="w-full border-b p-2 text-xl font-medium">
        Feedbacks on <span className="text-navBg2">{name}</span>
      </h1>

      <div className="mx-4 my-6 flex flex-col gap-6 fromLeft">
        {feedback.sort().map((feed) => {
          const { feedback, sender, created_at } = feed;
          return (
            <div key={created_at}>
              <div className="flex w-full items-center justify-between">
                <p className="font-medium">{sender} said:</p>
                <p>{formatDate(created_at)}</p>
                  </div>
                  <p className="text-sm mt-2 italic">{feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedbacks;

import React from "react";
import Header from "./Header";
import PersonnelCard from "./PersonnelCard";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
const SkeletonCard = () => (
  <div className="flex justify-start items-center hover:bg-navBg1 border rounded-xl p-1 animate-pulse">
    <div className="h-12 w-12 rounded-full m-2 bg-gray-300"></div>
    <div className="ml-3 flex flex-col space-y-2 w-full">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);
const PersonnelSection = ({ personnels, title, loading }) => {
  const userRole = getSessionStorage("userRole", "");
  const showAddButton =
    userRole === "Admin" || (userRole === "Lead" && title !== "Admin(s)");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Header title={title} showAddButton={showAddButton} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {!loading ? (
          personnels && personnels.length > 0 ? (
            personnels.map((personnel) => {
              const { uid, fullname, avatar, niche } = personnel;
              return (
                <div key={uid}>
                  <PersonnelCard
                    personnel={personnel}
                  />
                </div>
              );
            })
          ) : (
            <p>No {title} found...</p>
          )
        ) : (
          // <p>loading ...</p> /*Tofunmi, add proper skeletons here*/
          <>
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}</> // is this okay?
        )}
      </div>
    </div>
  );
};

export default PersonnelSection;

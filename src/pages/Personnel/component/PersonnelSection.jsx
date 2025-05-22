import React from "react";
import Header from "./Header";
import PersonnelCard from "./PersonnelCard";
import { getSessionStorage } from "../../../utils/getSessionStorage";
import PersonnelCardSkeleton from "../../../components/skeletons/personnelCardSkeleton";

const PersonnelSection = ({ personnels, title, loading }) => {
  const userRole = getSessionStorage("userRole", "");
  const showAddButton =
    userRole === "Admin" || (userRole === "Lead" && title !== "Admin");

  return (
    <div className="flex flex-col gap-6 fromTop ">
      <div>
        <Header title={title} showAddButton={showAddButton} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {!loading ? (
          personnels && personnels.length > 0 ? (
            personnels.map((personnel) => {
              return (
                <div key={personnel.uid}>
                  <PersonnelCard personnel={personnel} />
                </div>
              );
            })
          ) : (
            <p>No {title} found...</p>
          )
        ) : (
          <>
            <PersonnelCardSkeleton />
            <PersonnelCardSkeleton />
            <PersonnelCardSkeleton />
          </> 
        )}
      </div>
    </div>
  );
};

export default PersonnelSection;

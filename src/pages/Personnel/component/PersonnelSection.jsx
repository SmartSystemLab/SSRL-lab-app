import React from "react";
import Header from "./Header";
import PersonnelCard from "./PersonnelCard";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
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
          </> // is this okay?
          // Yes, it's very good, thanks a lot. I just made a few changes to make things simpler and I moved the whole component to another folder in components called skeletons because we will be creating other skeletons too, basically for almost every page, so those skeletons will just be there. I don't know if we should add the skeletons on each page inside a skeletons folder for each page or leave it like tjis. Let's leave it like this for now. If things get too complex, then we can make the changes.
        )}
      </div>
    </div>
  );
};

export default PersonnelSection;

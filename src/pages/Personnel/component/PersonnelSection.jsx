import React from "react";
import Header from "./Header";
import PersonnelCard from "./PersonnelCard";
import { getSessionStorage } from "../../../Modules/getSessionStorage";

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
                    name={fullname}
                    image={avatar}
                    niche={niche}
                    id={uid}
                  />
                </div>
              );
            })
          ) : (
            <p>No {title} ...</p>
          )
        ) : (
          <p>loading ...</p>
        )}
      </div>
    </div>
  );
};

export default PersonnelSection;

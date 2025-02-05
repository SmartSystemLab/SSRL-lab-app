import { useState, useEffect } from "react";
import Toggle from "../component/Toggle";
import { useRequest } from "../../../Modules/useRequest";
import PersonnelSection from "../component/PersonnelSection";

const Personnel = () => {
  const [toggle, setToggle] = useState("software");
  const [admins, setAdmins] = useState([]);
  const [hardleads, setHardleads] = useState([]);
  const [hardInterns, setHardInterns] = useState([]);
  const [softleads, setSoftleads] = useState([]);
  const [softInterns, setSoftInterns] = useState([]);

  const [
    getAllPersonnels,
    personnelsLoading,
    setPersonnelsLoading,
    personellsError,
    setPersonnelsError,
  ] = useRequest();

  const getPersonnels = async () => {
    setPersonnelsLoading(true);
    const res = await getAllPersonnels("view/members");
    const personnels = await res.json();

    if (res.ok) {
      setAdmins(personnels.admins);
      setHardleads(personnels.hardleads);
      setHardInterns(personnels.hardinterns);
      setSoftleads(personnels.softleads);
      setSoftInterns(personnels.softinterns);
    } else {
      setPersonnelsError({ status: true, msg: personnels.message });
    }
    setPersonnelsLoading(false);
  };

  useEffect(() => {
    getPersonnels();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="mt-8">
            <div className="uppercase font-medium text-2xl">Personnels</div>
            <hr className="bg-black" />

            {personellsError.status && (
              <p className="text-red-500 mt-2">
                {personellsError.msg}
                <p className="hover:underline cursor-pointer" onClick={getPersonnels}>Retry?</p> 
              </p>
            )}

            <div className="mt-8 flex flex-col gap-6">
              <PersonnelSection
                title="Admin"
                personnels={admins}
                loading={personnelsLoading}
              />

              <Toggle setToggle={setToggle} toggle={toggle} />

              <PersonnelSection
                title="Lead"
                personnels={toggle === "software" ? softleads : hardleads}
                loading={personnelsLoading}
              />

              <PersonnelSection
                title="Intern"
                personnels={toggle === "software" ? softInterns : hardInterns}
                loading={personnelsLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personnel;

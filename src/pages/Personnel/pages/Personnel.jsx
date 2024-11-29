import { MdFastfood } from "react-icons/md";
import Header from "../component/Header";
import LeadCard from "../component/PersonnelCard";
import img1 from "../../../assets/img1.jpg";
import InternCard from "../component/InternCard";
import { useRef, useState, useEffect } from "react";
import Toggle from "../component/Toggle";
import PersonnelCard from "../component/PersonnelCard";
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
          {/* Header */}
          <div className="mt-8">
            <div className="uppercase font-bold text-2xl">Personnels</div>
            <hr className="bg-black" />

            {personellsError.status && (
              <p className="text-red-500 mt-2">
                Couldn't load personnels. {personellsError.msg}
              </p>
            )}

            {/* Content */}
            <div className="mt-8 flex flex-col gap-6">

              {/* Admins Section*/}
              <PersonnelSection
                title="Admin(s)"
                personnels={admins}
                loading={personnelsLoading}
              />

              {/* Hardware/Software Button */}
              <Toggle setToggle={setToggle} toggle={toggle} />

              {/* Leads Section */}
              <PersonnelSection
                title="Lead(s)"
                personnels={toggle === "software" ? softleads : hardleads}
                loading={personnelsLoading}
              />

              {/* Interns Section */}
              <PersonnelSection
                title="Interns"
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

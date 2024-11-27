import { MdFastfood } from "react-icons/md";
import Header from "../component/Header";
import LeadCard from "../component/PersonnelCard";
import img1 from "../../../assets/img1.jpg";
import InternCard from "../component/InternCard";
import { useRef, useState, useEffect } from "react";
import Toggle from "../component/Toggle";
import PersonnelCard from "../component/PersonnelCard";
import { useRequest } from "../../../Modules/useRequest";

const Personnel = () => {
  const [toggle, setToggle] = useState("software");
  const [admins, setAdmins] = useState([])

  const [getAllPersonnels, personnelsLoading, setPersonnelsLoading, personellsError, setPersonnelsError] = useRequest()

  const adminsInfo = [
    {
      name: "Ogunjirin M. Boluwatife",
      image: img1,
      id: "Ceejayssrl001",
    },
    {
      name: "Ogunjirin M. Boluwatif",
      image: img1,
      id: 2,
    },
    {
      name: "Ogunjirin M. Boluwati",
      image: img1,
      id: 3,
    },
  ];
  const leadsInfo = [
    {
      name: "Ogunjirin M. Boluwatife",
      image: img1,
      section: "hardware",
      id: 1,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      image: img1,
      section: "hardware",
      id: 2,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      image: img1,
      section: "hardware",
      id: 3,
    },
    {
      name: "Ogunjirin M. Bolu",
      image: img1,
      section: "software",
      id: 4,
    },
    {
      name: "Ogunjirin M. Bolu",
      image: img1,
      section: "software",
      id: 5,
    },
  ];
  const internsInfo = [
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 1,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 2,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 3,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 4,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 5,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "software",
      unit: "UI/UX Designer",
      image: img1,
      id: 6,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 7,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 8,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 9,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 10,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 11,
    },
    {
      name: "Ogunjirin M. Boluwatife",
      section: "hardware",
      unit: "Embedded Systems",
      image: img1,
      id: 12,
    },
  ];

  const getPersonnels = async () => {
    const res = await getAllPersonnels('view/members')
    const personnels = await res.json()

    if (res.ok) {
      setAdmins(personnels.admins)
      console.log(res, personnels)
    }
  }

  useEffect(() => {
    getPersonnels()
  }, [])

  // const software = useRef(null);
  // const hardware = useRef(null);

  // Dabira, this function is not needed. Pls check out my implementation.
  // const handleButtonStyle = (buttonRef) => {
  //   if (buttonRef === software) {
  //     software.current.classList.remove("button-passive");
  //     hardware.current.classList.remove("button-active");
  //     software.current.classList.add("button-active");
  //     hardware.current.classList.add("button-passive");
  //     setToggle("software");
  //   } else {
  //     software.current.classList.add("button-passive");
  //     hardware.current.classList.add("button-active");
  //     software.current.classList.remove("button-active");
  //     hardware.current.classList.remove("button-passive");
  //     setToggle("hardware");
  //   }
  // };

  return (
    <>
      <div>
        <div className="container">
          {/* Header */}
          <div className="mt-8">
            <div className="uppercase font-bold text-2xl">Personnels</div>
            <hr className="bg-black" />

            {/* Content */}
            <div className="mt-8 flex flex-col gap-6">
              {/* Admins Section*/}
              <div className="flex flex-col gap-6">
                <div>
                  <Header title="Admin(s)" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                  {admins.map((item) => {
                    return (
                      <div key={item.uid}>
                        <PersonnelCard
                          name={item.fullname}
                          image={item.avatar}
                          niche={item.niche}
                          id={item.uid}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hardware/Software Button */}
              <Toggle setToggle={setToggle} toggle={toggle}/>

              {/* Leads Section */}
              <div className="flex flex-col gap-6">
                <div>
                  <Header title="Leads" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col">
                  {leadsInfo.map((item) => {
                    if (item.section === toggle) {
                      return (
                        <div key={item.id}>
                          <PersonnelCard
                            name={item.name}
                            image={item.image}
                            id={item.id}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Interns Section */}
              <div className="flex flex-col gap-6">
                <div>
                  <Header title="Interns" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col">
                  {internsInfo.map((item) => {
                    if (item.section === toggle) {
                      return (
                        <div key={item.id}>
                          <PersonnelCard
                            name={item.name}
                            image={item.image}
                            niche={item.niche}
                            id={item.id}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personnel;

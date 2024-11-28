import Header from "./component/Header";
import LeadCard from "./component/LeadCard";
import img1 from "../../assets/img1.jpg";
import InternCard from "./component/InternCard";
import { useRef, useState } from "react";

const Personnel = () => {
  const adminsInfo = [
    {
      name: "Ogunjirin M. Boluwatife",
      image: img1,
      id: 'Ceejayssrl001',
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
  const [toggle, setToggle] = useState("software");
  const software = useRef(null);
  const hardware = useRef(null);
  const handleButtonStyle = (buttonRef) => {
    if (buttonRef === software) {
      software.current.classList.remove("button-passive");
      hardware.current.classList.remove("button-active");
      software.current.classList.add("button-active");
      hardware.current.classList.add("button-passive");
      setToggle("software");
    } else {
      software.current.classList.add("button-passive");
      hardware.current.classList.add("button-active");
      software.current.classList.remove("button-active");
      hardware.current.classList.remove("button-passive");
      setToggle("hardware");
    }
  };
  return (
    <>
      <div>
        <div className="container">
          {/* Header */}
          <div className="mt-8">
            <div className="uppercase font-bold text-2xl">Personnels</div>
            <hr className="bg-black" />

            {/* Content */}
            <div className="mt-8 flex flex-col gap-8">
              {/* Admins Section*/}
              <div className="flex flex-col gap-6">
                <div>
                  <Header title="Admin(s)" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                  {adminsInfo.map((item) => {
                    return (
                      <div>
                        <LeadCard name={item.name} image={item.image} id={item.id} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hardware/Software Button */}
              <div className=" w-max rounded-full">
                <button
                  ref={software}
                  className="software p-3 button-active  rounded-l-full"
                  onClick={() => handleButtonStyle(software)}
                >
                  Software
                </button>
                <button
                  ref={hardware}
                  className="hardware button-passive rounded-r-full"
                  onClick={() => handleButtonStyle(hardware)}
                >
                  Hardware
                </button>
              </div>
              {/* Leads Section */}
              <div className="flex flex-col gap-6">
                <div>
                  <Header title="Leads" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col">
                  {leadsInfo.map((item) => {
                    if (item.section === toggle) {
                      return (
                        <div>
                          <LeadCard name={item.name} image={item.image} id={item.id} />
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
                        <div>
                          <InternCard
                            name={item.name}
                            image={item.image}
                            unit={item.unit}
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

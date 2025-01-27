import React from "react";
import { useState } from "react";
import CustomLabel from "../../../components/CustomLabel";
// import Button from "../../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import DatePickerComp from "../../../components/DatePickerComp";
import { getInitials } from "../../../Modules/funcs";
import { EditIcon } from "lucide-react";

const Edit = () => {
  const locate = useLocation();
  const profile = locate.state;
  const {
    firstname,
    surname,
    fullname,
    avatar,
    email,
    bday, // Probably use for date picker
    niche,
    stack,
    uid,
    role,
    phone_num,
    bio,
  } = profile;

  const [user, setUser] = useState({
    firstname: firstname,
    surname: surname,
    email: email,
    phone_num: phone_num,
    role: role,
    stack: stack,
    niche: niche,
    bio: bio,
    avatar: avatar,
  });

  const  initials = getInitials(fullname)
  const navigate = useNavigate();

  const handleChange = (event, val) => {
    setUser({ ...user, [val]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div className="mt-8">
          <div className="text-2xl font-medium">
            Edit <span className="text-navBg2">{uid}</span>
          </div>
          <hr className="bg-black" />

          {/* Content */}
          <div>
            <form
              className="mx-auto my-12 flex flex-col gap-2 rounded-xl border px-10 py-8 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="border-1 relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-black bg-logo md:ml-12 hover:scale-105">
                    {avatar !== "NIL" ? (
                      <img src={avatar} alt="avatar" className="m-5" />
                    ) : (
                      <span className={`text-5xl font-medium`}>{initials}</span>
                    )}
                    <EditIcon className="absolute bottom-2 right-2" />
                  </div>

                  <p className="flex items-center ">Edit {firstname}&apos;s info and add an optional profile picture</p>
                  <CustomLabel
                    htmlFor="firstname"
                    labelText="First name"
                    defaultVal={firstname}
                    onChange={() => handleChange(firstname)}
                    placeholder="Enter first name"
                  />

                  <CustomLabel
                    htmlFor="lastname"
                    labelText="Last name"
                    defaultVal={surname}
                    onChange={() => handleChange(surname)}
                    placeholder="Enter last name"
                  />

                  <CustomLabel
                    htmlFor="email"
                    labelText="Email"
                    inputType="email"
                    defaultVal={email}
                    onChange={() => handleChange(email)}
                    placeholder="Enter email "
                  />

                  <CustomLabel
                    htmlFor="phone"
                    labelText="Phone"
                    inputType="tel"
                    defaultVal={phone_num}
                    onChange={() => handleChange(phone_num)}
                    placeholder="Enter phone number"
                  />

                  <div>
                    <label htmlFor="stack">Stack</label>
                    <select
                      name="stack"
                      defaultValue={stack}
                      onChange={() => handleChange(stack)}
                      className="h-10 w-full rounded-lg border border-slate-900 px-3 py-1 text-[#111111] opacity-35 focus:text-black focus:opacity-100 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Stack
                      </option>
                      <option value="Software">Software</option>
                      <option value="Hardware">Hardware</option>
                    </select>
                  </div>

                  <CustomLabel
                    htmlFor="niche"
                    labelText="Niche"
                    defaultVal={niche}
                    onChange={() => handleChange(niche)}
                    placeholder="Enter niche"
                  />

                  <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      defaultValue={
                        bio === "NIL"
                          ? "I'm just a boring person who hasn't set a bio yet."
                          : bio
                      }
                      className="h-36 w-full appearance-none rounded-lg border border-slate-900 p-3 opacity-35 focus:opacity-100 focus:outline-none md:col-span-2"
                    ></textarea>
                  </div>

                  <DatePickerComp
                    label="Date of Birth"
                    placeholder="  Select your date of birth"
                    selected={selectedDate}
                    change={setSelectedDate}
                  />
                </div>
              </div>
              {/* <div className="flex items-center justify-start gap-6">
                <Button text="Save" handler={handleSubmit} />

                <Button text="Save & add" handler={handleSubmit} />
              </div>
              <div className="text-right">
                <Button text="Cancel" handler={handleCancel} />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

import React from "react";
import { useState } from "react";
import CustomLabel from "../../../components/CustomLabel";
// import Button from "../../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const {
    surname,
    firstname,
    avatar,
    email,
    bday,
    datetime_created,
    niche,
    stack,
    uid,
    role,
    phone_num,
    bio,
  } = profile;

  const [user, setUser] = useState({
    firstname,
    surname,
    email,
    phone_num,
    role,
    stack,
    niche,
    bio,
  });

  const navigate = useNavigate();

  const handleChange = (event, val) => {
    setUser({ ...user, [val]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const locate = useLocation();
  const profile = locate.state;

  console.log(surname, email);

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
              className="form flex flex-col gap-2 border md:shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
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
                      <option value="software">Software</option>
                      <option value="hardware">Hardware</option>
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
                      className="h-36 w-full appearance-none rounded-lg border border-slate-900 p-3 opacity-35 focus:opacity-100 md:col-span-2"
                    ></textarea>
                  </div>
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

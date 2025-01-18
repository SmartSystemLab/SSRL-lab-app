import { useState } from "react";
import CustomLabel from "../../../components/CustomLabel";
import Button from "../component/Button";

const Registration = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role: "",
    stack: "",
    niche: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.firstname]: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container ">
        {/* Header */}
        <div className="mt-8 ">
          <div className="uppercase font-bold text-2xl">
            Personnel Registration
          </div>
          <hr className="bg-black" />

          {/* Content */}
          <div>
            <form
              className="form flex flex-col gap-2 md:shadow-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* first name */}

                  <CustomLabel
                    htmlFor="firstname"
                    labelText="First name"
                    inputType="text"
                    inputValue={user.firstname}
                    onChange={(event) =>
                      setUser({ ...user, firstname: event.target.value })
                    }
                    labelCLassName="text-[#666666] inline-block"
                    inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    placeholder="Enter first name"
                  />

                  {/* last name */}

                  <CustomLabel
                    htmlFor="lastname"
                    labelText="Last name"
                    inputType="text"
                    inputValue={user.lastname}
                    onChange={(event) =>
                      setUser({ ...user, lastname: event.target.value })
                    }
                    labelCLassName="text-[#666666] inline-block"
                    inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  {/* email */}
                  <CustomLabel
                    htmlFor="email"
                    labelText="Email"
                    inputType="email"
                    inputValue={user.email}
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
                    labelCLassName="text-[#666666] inline-block"
                    inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    placeholder="Enter email "
                  />
                </div>{" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* phone */}

                  <CustomLabel
                    htmlFor="phone"
                    labelText="Phone"
                    inputType="tel"
                    inputValue={user.phone}
                    onChange={(event) =>
                      setUser({ ...user, phone: event.target.value })
                    }
                    labelCLassName="text-[#666666] inline-block"
                    inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    placeholder="Enter phone no"
                  />

                  {/* Role */}

                  <div className="gap-1">
                    <CustomLabel
                      htmlFor="role"
                      labelText="Role"
                      labelCLassName="text-[#666666] inline-block"
                    />
                    <select
                      name=""
                      value={user.role}
                      onChange={(event) =>
                        setUser({ ...user, role: event.target.value })
                      }
                      className=" relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="software">Lead</option>
                      <option value="hardware">Member</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* Stack */}
                  <div>
                    <CustomLabel
                      htmlFor="stack"
                      labelText="Stack"
                      labelCLassName="text-[#666666] inline-block"
                    />
                    <select
                      name=""
                      value={user.stack}
                      onChange={(event) =>
                        setUser({ ...user, stack: event.target.value })
                      }
                      className=" relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    >
                      <option value="" disabled>
                        Select Stack
                      </option>
                      <option value="software">Software</option>
                      <option value="hardware">Hardware</option>
                    </select>
                  </div>

                  {/* Niche */}

                  <CustomLabel
                    htmlFor="niche"
                    labelText="Niche"
                    inputType="text"
                    inputValue={user.niche}
                    onChange={(event) =>
                      setUser({ ...user, niche: event.target.value })
                    }
                    labelCLassName="text-[#666666] inline-block"
                    inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
                    placeholder="Enter niche"
                  />
                </div>
              </div>
              <div className=" flex justify-start items-center gap-6">
                
                <Button
                text="Save"
                handler={""}/>
                
                <Button
                text="Save & add"
                handler={""}/>
                
              </div>
              <div className="text-right">
                <Button
                text="Cancel"
                handler={""}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

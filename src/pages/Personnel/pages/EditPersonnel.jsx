import React from "react";
import { useState } from "react";
import CustomLabel from "../../../components/CustomLabel";
import { useLocation, useNavigate } from "react-router-dom";
import DatePickerComp from "../../../components/DatePickerComp";
import { getInitials } from "../../../Modules/funcs";
import { EditIcon } from "lucide-react";
import BigGreenButton from "../../../components/BigGreenButton";
import { useRequest } from "../../../Modules/useRequest";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRef } from "react";

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
    phone_num,
    bio,
  } = profile;
  const [user, setUser] = useState(() => ({
    firstname: firstname || "",
    surname: surname || "",
    email: email || "",
    phone_num: phone_num || "",
    stack: stack || "",
    niche: niche || "",
    bio: bio || "",
  }));
  const initials = getInitials(fullname);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); 
  const fileInputRef = useRef(null);
  const [editRequest, editLoading, setEditLoading] =
    useRequest();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEdit = async () => {
    setEditLoading(true);
    const formData = new FormData();
    formData.append("info", JSON.stringify(user));

    if (selectedImage) {
      formData.append("avatar", selectedImage);
    }

    const res = await editRequest(
      `personnel/admin_edit/${uid}`,
      "PATCH",
      formData,
    );
    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } else {
      toast.error(data.message);
    }
    console.log(data);

    setEditLoading(false);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEdit();
  };

  return (
    <div>
      <div className="container">
        <div className="mt-8">
          <div className="text-2xl font-medium">
            Edit <span className="text-navBg2">{uid}</span>
          </div>
          <hr className="bg-black" />

          <div>
            <form
              className="mx-auto my-12 flex flex-col gap-2 rounded-xl border px-10 py-8 shadow-lg"
              // onSubmit={handleFormSubmit}
            >
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <div
                  className="border-1 relative mx-auto mb-6 flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-black bg-logo hover:scale-105 md:ml-12"
                  onClick={handleFileClick}
                >
                  {avatar !== "NIL" || previewImage ? (
                    <img
                      src={previewImage ? previewImage : avatar.secure_url}
                      alt="avatar"
                      className="m-5 rounded-full object-cover"
                    />
                  ) : (
                    <span className={`text-5xl font-medium`}>{initials}</span>
                  )}
                  <EditIcon className="absolute bottom-0 left-[90%]" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                <p className="flex items-center">
                  Edit {firstname}&apos;s info and add an optional profile
                  picture
                </p>

                <CustomLabel
                  htmlFor="firstname"
                  labelText="First name"
                  defaultVal={firstname}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />

                <CustomLabel
                  htmlFor="lastname"
                  labelText="Last name"
                  defaultVal={surname}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />

                <CustomLabel
                  htmlFor="email"
                  labelText="Email"
                  inputType="email"
                  defaultVal={email}
                  onChange={handleChange}
                  placeholder="Enter email "
                />

                <CustomLabel
                  htmlFor="phone_num"
                  labelText="Phone"
                  inputType="tel"
                  defaultVal={phone_num}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

                <div>
                  <label htmlFor="stack">Stack</label>
                  <select
                    name="stack"
                    defaultValue={stack}
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
                    name="bio"
                  ></textarea>
                </div>

                <DatePickerComp
                  label="Date of Birth"
                  placeholder="  Select your date of birth"
                  selected={selectedDate}
                  change={setSelectedDate}
                />
              </div>

              <div className="flex items-center gap-4">
                <BigGreenButton action={handleFormSubmit}>Save</BigGreenButton>
                {editLoading && (
                  <Loader2 className="animate-spin" color="#225522" />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

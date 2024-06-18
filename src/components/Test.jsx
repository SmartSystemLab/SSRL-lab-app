import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const [response, setResponse] = useState("");
  const urlRef = useRef("http://127.0.0.1:5000");

  useEffect(() => {
    console.log(response)
  }, [response])

  const confirmCred = async () => {
    const res = await fetch("http://127.0.0.1:5000/change/password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // confirmed: "false",
        new_pwd: "CeeJay",
        // email: "covenantcrackslord01@gmail.com",
      }),
    });

    const data = await res.json();
    setResponse(data);
  };

  const hello = async () => {
    const res = await fetch("http://127.0.0.1:5000/test")
    const data = await res.json()
    setResponse(data)
  }

  return (
    <div>
      <button
        onClick={confirmCred}
        className="border-2 border-black hover:scale-105 px-4 py2 rounded-full"
      >
        Confirm cred
      </button>
      <p>{response.message}</p>
    </div>
  );
};

export default Test;

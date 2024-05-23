import React, { useEffect, useState } from "react";
import axios from "axios";
function Callback() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const [NRIC, setNRIC] = useState("");
  const [UUID, setUUID] = useState("");
  useEffect(() => {
    const getIDToken= async () => {
      const url = `https://singpassdemoappserver.netlify.app/.netlify/functions/api?code=${code}`;
      const { data } = await axios.get(url);
      setNRIC(data.data);
      setUUID(data.UUID);
    };

    getIDToken();
  }, [code]);

  return <div>{NRIC}{UUID}</div>;
}

export default Callback;

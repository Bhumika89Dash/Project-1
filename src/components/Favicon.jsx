import React, { useEffect } from "react";

const Favicon = () => {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.svg"; // Make sure favicon.svg is in the public folder
    document.head.appendChild(favicon);
  }, []);

  return null;
};

export default Favicon;

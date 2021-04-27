import { getSlug, getHost } from "../../utils/getHost";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const cookie = Cookies.get("authentication");
    console.log("co", cookie);
  }, []);
  return (
    <>
      Dashboard {getSlug()} => {getHost()}
    </>
  );
}

export default Dashboard;

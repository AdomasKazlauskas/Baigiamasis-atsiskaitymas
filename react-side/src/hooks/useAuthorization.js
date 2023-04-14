import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useAuthorization = () => {
  const { setAuthName } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "ok") {
          setAuthName(res.data.name);
        } else {
          setAuthName(null);
        }
      });
  }, [setAuthName]);
};

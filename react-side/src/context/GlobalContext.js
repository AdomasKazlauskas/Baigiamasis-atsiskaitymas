import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchCards } from "../services/userService";
// import { useNavigate } from "react-router-dom";

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [cardsStatus, setCardsStatus] = useState("idle");
  const [authName, setAuthName] = useState(null);
  // const navigate = useNavigate();

  const fetchCardList = async () => {
    const cards = await fetchCards();
    if (!cards.length) {
      alert("No cards found");
    }
    setCards(cards);
  };

  useEffect(() => {
    const fetchData = async () => await fetchCardList();
    fetchData();
  }, []);

  useEffect(() => {
    if (cardsStatus === "success") {
      const fetchData = async () => await fetchCardList();
      fetchData();
      setCardsStatus("idle");
    }
  }, [cardsStatus]);

  const logOut = () => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        setAuthName(null);
        // navigate("/");
        console.log(res.data);
      });
  };

  return (
    <GlobalContext.Provider
      value={{ cards, setCardsStatus, authName, setAuthName, logOut }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

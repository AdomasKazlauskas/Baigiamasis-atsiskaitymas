const baseURL = "http://localhost:3003";

export const fetchCards = async () => {
  let response = await fetch(baseURL + "/cards");
  if (response.status === 200) {
    let data = await response.json();
    return data;
  }
  return [];
};

export const createCard = async (data) => {
  const response = await fetch(baseURL + "/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const updateCard = async (data) => {
  // const encodedId = encodeURI(id);
  const response = await fetch(`${baseURL}/cards`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

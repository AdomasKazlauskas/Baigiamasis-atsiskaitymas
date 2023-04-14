const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const md5 = require("md5");

const app = express();
const port = 3003;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/cookie", (req, res) => {
  if (req.body.delete) {
    res.cookie("cookieMonster", "", { maxAge: -3600 });
  } else {
    res.cookie("cookieMonster", req.body.text, { maxAge: 3600 });
  }
  res.json({ msg: "OK" });
});

app.post("/signUp", (req, res) => {
  console.log(req.body);
  const logins = JSON.parse(fs.readFileSync("./data/logins.json", "utf8"));
  const name = req.body.name;
  const password = md5(req.body.password);

  const checkUser = logins.find((l) => l.name === name);

  if (checkUser) {
    res.json({ status: "Already taken", message: "User already exists" });
    return;
  }
  const session = md5(uuidv4());

  logins.push({
    name,
    password,
    session,
  });

  fs.writeFileSync("./data/logins.json", JSON.stringify(logins), "utf8");
  res.cookie("magicNumberSession", session);
  res.json({ status: "ok", name });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const logins = JSON.parse(fs.readFileSync("./data/logins.json", "utf8"));
  const name = req.body.name;
  const password = md5(req.body.password);

  const checkUser = logins.find(
    (l) => l.name === name && l.password === password
  );

  if (checkUser) {
    const sessionId = md5(uuidv4());
    checkUser.session = sessionId;

    fs.writeFileSync("./data/logins.json", JSON.stringify(logins), "utf8");
    res.cookie("magicNumberSession", sessionId);
    res.json({ status: "ok", name: checkUser.name });
  } else {
    res.json({ status: "error" });
  }
});

app.get("/login", (req, res) => {
  const logins = JSON.parse(fs.readFileSync("./data/logins.json", "utf8"));

  const checkUser = req.cookies.magicNumberSession
    ? logins.find((l) => l.session === req.cookies.magicNumberSession)
    : null;

  if (checkUser) {
    res.json({
      status: "ok",
      name: checkUser.name,
    });
  } else {
    res.json({
      status: "error",
    });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("magicNumberSession", "", { maxAge: -3600 });
  res.json({
    status: "logout",
  });
});

app.use(express.json());

app.post("/post", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.delete("/delete", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.put("/put", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(port, () => {
  console.log(`SERVER is on port number: ${port}`);
});

app.get("/cards", (req, res) => {
  let allData = fs.readFileSync("./data/cards.json", "utf8");
  allData = JSON.parse(allData);
  res.json(allData);
});

app.post("/cards", (req, res) => {
  const cardFile = fs.readFileSync("./data/cards.json", "utf8");
  const cards = JSON.parse(cardFile);

  const newCard = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
    totalCash: req.body.totalCash,
    raisedCash: 0,
    donors: [],
  };

  cards.push(newCard);
  fs.writeFileSync("./data/cards.json", JSON.stringify(cards), "utf8");

  res.json({
    message: { text: "New card is saved", type: "success" },
  });
});

app.patch("/cards", (req, res) => {
  const cardId = req.body.id;
  const donation = Number(req.body.donation);
  const name = req.body.name;
  // read the JSON file
  const cards = JSON.parse(fs.readFileSync("./data/cards.json", "utf8"));

  // find the user with the matching ID
  const card = cards.find((card) => card.id === cardId);

  // if user is not found, return an error
  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  // update the user's cash
  card.raisedCash += donation;
  card.donors.push({ name, donation });

  // write the updated data back to the JSON file
  fs.writeFileSync("./data/cards.json", JSON.stringify(cards, null, 2));

  // return the updated user data
  res.json(card);
});

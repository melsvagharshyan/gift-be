import cardModel from "../../models/card.js";

export const createInformation = async (req, res) => {
  const { name, cardNumber, expiry, cvc } = req.body;

  try {
    const information = await cardModel.create({
      cvc,
      name,
      cardNumber,
      expiry,
    });
    res.status(200).json("ok");
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

export const getInformation = async (req, res) => {
  try {
    const information = await cardModel.find();
    res.status(200).json(information);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

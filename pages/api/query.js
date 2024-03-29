import Query from "../../models/query";
import createHandler from "../../middleware";

const handler = createHandler();

handler.post(async (req, res) => {
  const { name, phone, location, clean } = req.body;
  const queryDetails = {
    name,
    clean,
    location,
    contact: phone,
  };
  const newQuery = new Query(queryDetails);
  newQuery.save();
  if (newQuery) {
    res.json({
      // success: true,
      message: "Your query has been sent we will respond you shortly! Thanks.",
    });
  } else {
    res.json({
      success: false,
    });
  }
});

export default handler;

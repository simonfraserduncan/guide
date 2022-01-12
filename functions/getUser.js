const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const user = await getCollection();
  try {
    const res = await user.find({});
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

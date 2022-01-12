const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const user = await getCollection();
  const body = JSON.parse(event.body);

  try {
    const res = await user.create('user', body);
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

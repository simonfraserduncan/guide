const getUser = async () => {
    const response = await fetch("/.netlify/functions/getUser");
    const res = await response.json();
    console.log(res);
    return res ? res.data.user : {};
  };
  
  const createUser = async (user) => {
    const response = await fetch("/.netlify/functions/createUser", {
      body: JSON.stringify(user),
      method: "POST",
    });
    return response.json();
  };
  
  const updateUser = async (user) => {
    const response = await fetch("/.netlify/functions/updateUser", {
      body: JSON.stringify(user),
      method: "PUT",
    });
    return response.json();
  };
  
  export { getUser, createUser, updateUser };
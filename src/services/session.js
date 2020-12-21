const url = "https://organize-marcc-api.herokuapp.com";

export const getUserFetch = async (objUser) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify(objUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return data.errors.message;
    }
  } catch (error) {
    return "Network error";
  }
};

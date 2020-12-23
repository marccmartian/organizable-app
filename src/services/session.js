import { apiUrl, objectToSnake } from "./utils";

export const getUserFetch = async (objUser) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify(objUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    return response.ok ? { data } : { error: data.errors.message };
  } catch (error) {
    return { error: "Network error" };
  }
};

export const createUserFetch = async (objUser) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: JSON.stringify({ user: objectToSnake(objUser) }),
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();

    return data ? { data } : { error: data.errors.message };
  } catch (error) {
    return { error: "Network error" };
  }
};

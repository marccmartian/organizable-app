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

export const updateUserFetch = async (user, newData) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({ user: objectToSnake(newData) }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Token token="${user.token}"`,
      },
    });

    const data = await response.json();

    return response.ok ? { data } : { error: data.erros.message };
  } catch (error) {
    return { error: "Network Error" };
  }
};

export const deleteUserFetch = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token token="${user.token}"`,
      },
    });

    if (response.ok) {
      return { data: true };
    } else {
      const data = await response.json();
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

export const logoutUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token token "${user.token}"`,
      },
    });

    const data = await response.json();

    return response.ok ? { data: true } : { error: data.errors.message };
  } catch (error) {
    return { error: "Network error" };
  }
};

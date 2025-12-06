import { getToken } from "./authenticate";

export async function addToFavourites(id) {
  try {
    const token = getToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error adding to favourites:", error);
    return [];
  }
}

export async function removeFromFavourites(id) {
  try {
    const token = getToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error deleting favourites:", err);  
    return [];
  }
}

export async function getFavourites() {
  try {
    const token = getToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favourites`,
      {
        method: "GET",
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error getting favourites:", err);
    return [];
  }
}
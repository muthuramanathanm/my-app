const API_URL = "https://zhd57zjrtb.execute-api.us-east-1.amazonaws.com/Stg/signIn";

export const authenticateUser = async (username, password) => {
  try {
    const requestBody = {
      httpMethod: "POST",
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log('bodyyyy == ',response.body);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "Internal Server Error" };
  }
};


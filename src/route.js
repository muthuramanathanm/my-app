import fetch from "cross-fetch";

const BASE_URL = "https://6q6twpjl4c.execute-api.us-east-1.amazonaws.com/test"; // Replace with your API Gateway endpoint

export const signIn = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        httpMethod: "POST",
        body: JSON.stringify({ username, password }),
      }),
    });

    console.log('response === ',response.json);

    if (response.ok) {
      const data = await response.json();
      console.log('the res data ==',data);
      return { ok: true, message: data.message };
    } else {
      console.log('elseee == ');
      return { ok: false, message: "Failed to sign in." };
    }
  } catch (error) {
    console.error("Error in signIn function:", error);
    return { ok: false, message: "An error occurred." };
  }
};


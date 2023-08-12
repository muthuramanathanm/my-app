import React, { useState } from "react";
import { signIn } from "./route"; // Import the signIn function

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    console.log("Usernameq:", username);
    console.log("Passwordq:", password);
    
    const response = await signIn(username, password); // Use the signIn function

    if (response.ok) {
      setMessage(response.message);
    } else {
      setMessage("Failed to sign in. Please check your credentials.");
    }
  };

  console.log("Rendering SignInForm"); // Placed outside JSX

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <p>{message}</p>
    </div>
  );
};

export default SignInForm;

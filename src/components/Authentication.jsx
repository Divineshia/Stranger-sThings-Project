import { useState } from "react";


export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  console.log("Token: ", token);
  async function authenticate(token) {
    try {
      const response = await fetch(
        `${BASE_URL}/someEndPoint`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ 
            user:{
                username,
                password,
            }
            /* whatever things you need to send to the API */ })
        });

      const result = await response.json();
      console.log("Authenticate Result: ", result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  

  return (
    <div>
      
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <Profile/>
      <AddPost/>
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}


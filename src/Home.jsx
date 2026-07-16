import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1>🏠 Home Page</h1>

      <h2>Registration Successful!</h2>

      <p><strong>Name:</strong> {state?.name}</p>
      <p><strong>Email:</strong> {state?.email}</p>
      <p><strong>Mobile:</strong> {state?.mobile}</p>
      <p><strong>City:</strong> {state?.city}</p>
    </div>
  );
}

export default Home;
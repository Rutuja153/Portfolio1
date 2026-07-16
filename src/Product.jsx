import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [display, setDisplay] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(formData);
  };

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          background:#f0f2f5;
        }

        .container{
          width:400px;
          margin:50px auto;
          background:#fff;
          padding:25px;
          border-radius:10px;
          box-shadow:0 0 10px rgba(0,0,0,0.2);
        }

        h1{
          text-align:center;
          margin-bottom:20px;
          color:#333;
        }

        input{
          width:100%;
          padding:12px;
          margin:10px 0;
          border:1px solid #ccc;
          border-radius:5px;
          font-size:16px;
        }

        button{
          width:100%;
          padding:12px;
          background:#007bff;
          color:white;
          border:none;
          border-radius:5px;
          font-size:16px;
          cursor:pointer;
          margin-top:10px;
        }

        button:hover{
          background:#0056b3;
        }

        .details{
          margin-top:25px;
          background:#e8f4ff;
          padding:15px;
          border-radius:8px;
        }

        .details h2{
          color:#007bff;
          margin-bottom:10px;
        }

        .details p{
          margin:8px 0;
          font-size:16px;
        }
      `}</style>

      <div className="container">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        {display && (
          <div className="details">
            <h2>Entered Details</h2>
            <p><strong>Name:</strong> {display.name}</p>
            <p><strong>Email:</strong> {display.email}</p>
            <p><strong>Mobile:</strong> {display.mobile}</p>
            <p><strong>City:</strong> {display.city}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
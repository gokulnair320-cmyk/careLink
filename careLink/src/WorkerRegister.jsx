import { useState } from "react";
import "./Register.css";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WorkerRegister() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location : "",
    gender : "",
    age : "",
    Phone : "",
    password : "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/worker/register", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(form)
      });
      const data = await response.json();
      if(data.success){
        alert("Worker registered successfully!");
        console.log(data);
        navigate("/");
      }
      else{
        alert(data.message || "Registration failed");
      }
    }
    catch(error){
      console.log("Error during registration:", error);
    }
    console.log("Worker registered:", form);
    alert("Worker registration submitted!");
    // TODO: send to backend
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Worker Registration</h2>
      <form className="full-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="State"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={form.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Phone"
          placeholder="Phone Number"
          value={form.Phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default WorkerRegister;
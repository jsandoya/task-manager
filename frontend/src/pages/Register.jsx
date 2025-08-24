import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMsg(null);

    try {
      await axios.post("/api/auth/register", { email, password });
      setMsg("User created successfully. You can login now.");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-xl w-80">
        <h1 className="text-xl font-bold mb-4">Register</h1>

        {msg && <p className="text-green-500 text-sm mb-2">{msg}</p>}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
          Register
        </button>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/");

    setUser("Authenticated user");
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl">Welcome</h1>
      <p>{user}</p>
      <button onClick={logout} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}

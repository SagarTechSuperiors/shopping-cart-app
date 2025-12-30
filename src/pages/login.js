import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!storedUser) {
      setError("No account found. Please signup first.");
      return;
    }

    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setError("Invalid email or password");
      return;
    }

    dispatch(login({ email, password }));
    router.push("/");
  };

  return (
    <>

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0b132b, #1c2541)",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <div
          className="card shadow-lg p-4"
          style={{
            width: "400px",
            backgroundColor: "#1c2541",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h4 className="text-white fw-bold mb-4 text-center">
            Login
          </h4>

          {error && (
            <div className="alert alert-danger py-2 text-center">
              {error}{" "}
              {error.includes("signup") && (
                <Link
                  href="/signup"
                  className="text-info fw-semibold ms-1"
                >
                  Signup
                </Link>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>

          <p className="text-center text-light mb-0">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-info fw-semibold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}


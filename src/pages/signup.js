import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (existingUser?.email === form.email) {
      setError("Account already exists. Please login.");
      return;
    }

    dispatch(
      signup({
        username: form.username,
        email: form.email,
        password: form.password,
      })
    );

    router.push("/login");
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
            width: "450px",
            backgroundColor: "#1c2541",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h4 className="text-white fw-bold mb-4 text-center">
            Create Account
          </h4>

          {error && (
            <div className="alert alert-danger py-2 text-center">
              {error}{" "}
              {error.includes("login") && (
                <Link
                  href="/login"
                  className="text-info fw-semibold ms-1"
                >
                  Login
                </Link>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Username"
              required
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />

            <button className="btn btn-success w-100 mb-3">
              Signup
            </button>
          </form>

          {/* FOOTER LOGIN LINK */}
          <p className="text-center text-light mb-0">
            Already have an account?{" "}
            <Link href="/login" className="text-info fw-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

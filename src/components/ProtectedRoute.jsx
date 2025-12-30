import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);
  if (!mounted || !isAuthenticated) {
    return (
      <div className="vh-100 bg-[#0b132b] d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return <>{children}</>;
}
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import CartPopup from "../CartPopup";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const totalItems = useSelector(
    (state) => state.cart.totalItems
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const isActive = (path) =>
    router.pathname === path
      ? "nav-link active fw-bold"
      : "nav-link";

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          
          <Link href="/" className="navbar-brand fw-bold text-white">
           <ShoppingCart size={28} strokeWidth={2.5} /> ShoppyCart
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link href="/" className={`${isActive("/")} text-white`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className={`${isActive("/blog")} text-white`}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`${isActive("/contact")} text-white`}
                >
                  Contact
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  href="/careers"
                  className={`${isActive("/careers")} text-white`}
                >
                  Careers
                </Link>
              </li>
               <li className="nav-item">
                <Link
                  href="/about"
                  className={`${isActive("/about")} text-white`}
                >
                  About
                </Link>
              </li>
            </ul>

           
            <div className="d-flex align-items-center gap-3">

              {isAuthenticated &&user?.username && (
                <span className="text-white small">
                  Hi, <strong className="text-md">{user.username}</strong>
                </span>
              )}

              {isAuthenticated && (
                <button
                  className="btn btn-outline-light position-relative"
                  onClick={() => setShowCart((p) => !p)}
                >
                  <FaShoppingCart />
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                    </span>
                  )}
                </button>
              )}

             
              {isAuthenticated ? (
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-outline-light btn-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <CartPopup
        visible={showCart}
        onClose={() => setShowCart(false)}
      />
    </>
  );
}


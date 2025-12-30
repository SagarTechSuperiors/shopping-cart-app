import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{ backgroundColor: "#1c2541" }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>ShopCart</h5>
            <p className="text-light">
              A modern shopping cart application built
              with Next.js and Redux Toolkit.
            </p>
          </div>

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Legal</h6>
            <p className="text-light">
              © {new Date().getFullYear()} ShopCart.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

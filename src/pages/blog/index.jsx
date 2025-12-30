import Link from "next/link";
import blogs from "../../data/blogs"; 
import SEO from "@/components/seo/SEO";

export default function BlogList() {
  return (
    <>
      <SEO
        title="The Shoppy Journal | Style & Fashion Guides"
        description="Expert advice on fashion trends, styling tips, and sustainable shopping — curated by the ShoppyCart editorial team."
      />

      <div className="container py-5">

        <header className="text-center mb-5 pb-3">
      

          <h1 className="fw-bold text-white display-4 mt-2">
            The Shoppy Journal
          </h1>

          <p className="text-white mx-auto" style={{ maxWidth: "600px" }}>
            Your destination for fashion guides, outfit ideas, and lifestyle tips—written by our editors to inspire your everyday style.
          </p>
        </header>

        <div className="row g-4">
          {blogs?.map((blog) => (
            <div key={blog.slug} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg border-0 bg-transparent overflow-hidden blog-entry-card">

                
                <div
                  className="blog-thumb-wrapper d-flex align-items-center justify-content-center"
                  style={{
                    height: "220px",
                    background: "#1c2541",
                  }}
                >
                  <span className="fs-1 opacity-25">🛍️</span>
                </div>
                <div
                  className="card-body p-4 d-flex flex-column"
                  style={{
                    background: "rgba(28, 37, 65, 0.6)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="d-flex justify-content-between mb-3">
                    <span className="badge rounded-pill bg-primary px-3 py-2">
                      {blog.category}
                    </span>
                    <small className="text-muted">{blog.date}</small>
                  </div>

                  <h3 className="card-title h5 fw-bold text-white mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-muted flex-grow-1 small lh-base opacity-75">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="btn btn-link text-primary p-0 text-decoration-none fw-bold mt-4 stretched-link"
                  >
                    READ ARTICLE <span className="ms-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-entry-card {
          transition: all 0.4s ease;
          border-radius: 20px;
        }
        .blog-entry-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
        }
        .tracking-widest {
          letter-spacing: 0.25em;
        }
      `}</style>
    </>
  );
}

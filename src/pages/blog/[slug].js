import { useRouter } from "next/router";
import Link from "next/link";
import blogs from "../../data/blogs";
import SEO from "@/components/seo/SEO";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;
  if (!router.isReady) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return (
      <div className="container py-5 text-center text-white vh-100 d-flex flex-column justify-content-center">
        <h3 className="mb-4 display-6 fw-bold">Article not found</h3>
        <p className="text-muted mb-4">
          The article you're trying to view does not exist.
        </p>
        <Link href="/blog" className="btn btn-primary px-4 py-2">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${blog.title} | Shoppy Journal`}
        description={blog.description}
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Back link */}
            <nav className="mb-5">
              <Link
                href="/blog"
                className="text-primary text-decoration-none fw-bold small"
              >
                ← BACK
              </Link>
            </nav>

            {/* Blog header */}
            <header className="mb-5">
              <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
                {blog.category}
              </span>

              <h1 className="display-3 fw-bold text-white mb-4 lh-sm">
                {blog.title}
              </h1>

              <div className="d-flex align-items-center py-3 border-top border-bottom border-secondary">
                <div className="text-muted small text-uppercase tracking-wider">
                  <span className="me-3 text-white">Published by ShoppyCart Editor</span>
                  <span className="mx-2">•</span>
                  <span className="text-white">{blog.date}</span>
                </div>
              </div>
            </header>

            {/* Blog content */}
            <article className="text-white fs-5 lh-lg blog-body-text">
              {blog.content
                .trim()
                .split(/\n+/)
                .map((paragraph, index) => (
                  <p key={index} className="mb-4 opacity-75">
                    {paragraph}
                  </p>
                ))}
            </article>

            {/* Footer */}
            <div className="mt-5 pt-5 border-top border-secondary">
              <h5 className="text-white fw-bold mb-3">Share this article</h5>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-body-text p {
          font-weight: 300;
          letter-spacing: 0.01em;
        }
        .tracking-widest {
          letter-spacing: 0.2em;
        }
      `}</style>
    </>
  );
}

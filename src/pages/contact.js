import SEO from "@/components/seo/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | ShopCart"
        description="Get in touch with ShopCart for support, feedback, or collaboration opportunities."
      />

      <section className="container py-5" style={{ maxWidth: "700px" }}>
        <h1 className="fw-bold mb-4 text-white">Contact Us</h1>

        <p className="text-light mb-4">
          Have questions or feedback? We’d love to hear from you.
          Fill out the form below and we’ll get back to you.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label text-white">Name</label>
            <input
              type="text"
              className="form-control"
              required
              aria-label="Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control"
              required
              aria-label="Email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Message</label>
            <textarea
              className="form-control"
              rows="4"
              required
              aria-label="Message"
            ></textarea>
          </div>

          <button className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

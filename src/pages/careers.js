import SEO from "@/components/seo/SEO";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa";

export default function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      icon: <FaLaptopCode className="text-primary fs-3" />,
      desc: "Work with React, Next.js, and Redux Toolkit to build the future of e-commerce.",
      location: "Remote",
      experience: "0–2 years",
    },
    {
      title: "UI/UX Designer",
      icon: <FaPalette className="text-primary fs-3" />,
      desc: "Craft beautiful, user-centric interfaces for our global shopping community.",
      location: "Remote",
      experience: "1+ years",
    },
    {
      title: "Backend Architect",
      icon: <FaRocket className="text-primary fs-3" />,
      desc: "Scale our logistics and order management systems for high-volume traffic.",
      location: "Hybrid",
      experience: "3+ years",
    }
  ];

  return (
    <>
      <SEO
        title="Careers | Join the ShoppyCart Team"
        description="Explore career opportunities at ShoppyCart and help us build modern commerce solutions."
      />

      <div className="container py-5">
      
        <div className="text-center mb-5 mt-4">
          <span className="text-primary fw-bold text-uppercase small tracking-widest">Join Our Mission</span>
          <h1 className="display-4 fw-bold text-white mt-2">Careers at ShoppyCart</h1>
          <p className="text-white mx-auto" style={{ maxWidth: "600px" }}>
            We’re looking for passionate individuals who love building high-quality 
            digital experiences. Come help us redefine retail.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {jobs.map((job, index) => (
            <div key={index} className="col-lg-9">
              <div 
                className="card border-0 shadow-lg p-4 career-card"
                style={{ 
                  background: "rgba(255, 255, 255, 0.03)", 
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-4">
            
                  <div className="icon-box bg-dark rounded-4 p-3 d-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px" }}>
                    {job.icon}
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="h4 fw-bold text-white mb-2">{job.title}</h3>
                    <p className="text-white small mb-3">{job.desc}</p>
                    <div className="d-flex gap-3 text-white-50 small fw-light">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.experience}</span>
                    </div>
                  </div>
                  <div className="mt-2 mt-md-0">
                    <button 
                      className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm"
                      onClick={() => alert(`Applying for ${job.title}...`)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 pt-4">
          <p className="text-white">
            Don't see a role that fits? Send your CV to 
            <span className="text-primary fw-bold"> careers@shoppycart.com</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .career-card {
          transition: all 0.3s ease-in-out;
        }
        .career-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(13, 110, 253, 0.5) !important;
        }
        .tracking-widest {
          letter-spacing: 0.2em;
        }
      `}</style>
    </>
  );
}
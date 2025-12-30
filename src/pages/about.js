import SEO from "@/components/seo/SEO";
import { FaGem, FaTruckFast, FaShieldHalved } from "react-icons/fa6";

const values = [
  { 
    title: "Quality First", 
    desc: "We curate only the finest products from verified global suppliers.",
    icon: <FaGem size={40} className="text-primary mb-3" />
  },
  { 
    title: "Fast Delivery", 
    desc: "Our logistics network ensures your package arrives within 48 hours.",
    icon: <FaTruckFast size={40} className="text-primary mb-3" /> 
  },
  { 
    title: "Secure Payments", 
    desc: "Industry-leading encryption protecting every single transaction.",
    icon: <FaShieldHalved size={40} className="text-primary mb-3" /> 
  }
];

export default function About() {
  return (
    <>
      <SEO title="Our Story | ShoppyCart" description="Discover ShoppyCart's journey to redefine premium online shopping." />

      <section className="container py-5 text-white">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Redefining Modern Ecommerce</h1>
          <p className="lead mx-auto text-white" style={{ maxWidth: '700px' }}>
            ShoppyCart isn't just a store; it's a curated experience designed for those who value quality, speed, and minimalist design.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {values.map((v, i) => (
            <div key={i} className="col-md-4">
              <div 
                className="card h-100 p-4 text-center border-0 shadow-lg" 
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px' 
                }}
              >
                <div className="d-flex justify-content-center">
                  {v.icon}
                </div>
                <h3 className="h5 fw-bold text-white mt-2">{v.title}</h3>
                <p className="small text-white opacity-75 mb-0">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
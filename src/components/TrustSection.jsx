import BrandCarousel from "./BrandCarousel";
import TestimonialsSlider from "./TestimonialSlider";


export default function TrustSection() {
  return (
    <section className="  text-white py-24 px-6 md:px-12 lg:px-24 ">
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-4xl  font-bold text-bg-accent mb-6">
          Trusted by 300+ leading brands in <br />
          only 5 years – see why.
        </h2>
      </div>

      <BrandCarousel />
      <TestimonialsSlider />
    </section>
  );
}

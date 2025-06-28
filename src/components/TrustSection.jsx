import BrandCarousel from "./BrandCarousel";
import TestimonialsSlider from "./TestimonialSlider";


export default function TrustSection() {
  return (
    <section className="bg-gradient-to-r from-black via-indigo-900 to-purple-900 text-white py-16">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by 600+ leading brands in <br />
          only 9 years – see why.
        </h2>
      </div>

      <BrandCarousel />
      <TestimonialsSlider />
    </section>
  );
}

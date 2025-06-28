import BrandCarousel from "./BrandCarousel";
import TestimonialsSlider from "./TestimonialSlider";


export default function TrustSection() {
  return (
    <section className="  text-white py-16">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          Trusted by 300+ leading brands in <br />
          only 5 years – see why.
        </h2>
      </div>

      <BrandCarousel />
      <TestimonialsSlider />
    </section>
  );
}

import DisplayInstructors from "@/components/DisplayInstructorsSection";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsCardSection from "@/components/TestimonialCardSection";
import UpcommingWebinarsSection from "@/components/UpcommingWebinarsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Welcome to Music Academy Project</h1> */}
      <HeroSection/>
      <FeaturedCoursesSection/>
      <WhyChooseUsSection/>
      <TestimonialsCardSection/>
      <UpcommingWebinarsSection/>
      <DisplayInstructors/>
      <Footer/>
    </main>
  );
}

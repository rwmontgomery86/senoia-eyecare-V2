import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Frames from "@/components/sections/Frames";
import Testimonials from "@/components/sections/Testimonials";
import Insurance from "@/components/sections/Insurance";
import Visit from "@/components/sections/Visit";
import BookingCTA from "@/components/sections/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Frames />
      <Testimonials />
      <Insurance />
      <Visit />
      <BookingCTA />
    </>
  );
}

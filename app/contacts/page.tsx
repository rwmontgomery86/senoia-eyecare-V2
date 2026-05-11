import ContactsHero from "@/components/sections/contacts/ContactsHero";
import MarloReorder from "@/components/sections/contacts/marlo-variants/VariantPhotoSplit";
import LensTypes from "@/components/sections/contacts/LensTypes";
import FittingProcess from "@/components/sections/contacts/FittingProcess";
import ContactBrands from "@/components/sections/contacts/ContactBrands";
import ContactsFAQ from "@/components/sections/contacts/ContactsFAQ";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata = {
  title: "Contact Lens Fitting",
  description:
    "Soft, toric, and multifocal contact lenses fit at Senoia Eyecare. New wearers welcome — every fitting starts with a comprehensive exam and ends with a follow-up.",
};

export default function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <MarloReorder />
      <LensTypes />
      <FittingProcess />
      <ContactBrands />
      <ContactsFAQ />
      <BookingCTA />
    </>
  );
}

export const metadata = {
  title: "Георешетки из полиэтилентерефталата",
  description: "Покупай не пожалеешь",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
    </>
  );
}

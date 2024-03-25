// Only the layout of <main> section is defined here
import Image from "next/image";
import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}

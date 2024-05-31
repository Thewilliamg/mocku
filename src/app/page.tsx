import Image from "next/image";
import Navbar from "../components/navbar"
import Container from "../components/container"

export default function Home() {
  return (
    <main className="flex">
      <div>
        <Navbar />
      </div>
      <div>
        <Container />
      </div>
    </main>
  );
}

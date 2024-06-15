import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Duar</h1>

      {/* bisa menambahkan style sendiri secara langsung */}
      <Button variant="destructive" className="px-10">Delete</Button>
    </main>
  );
}

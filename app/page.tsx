import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* bisa menambahkan style sendiri secara langsung */}
      <Button variant="destructive" className="px-10">Delete</Button>
    </main>
  );
}

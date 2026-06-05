import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-500 font-extrabold text-amber-300">Home Page</h1>

      <Link href="/dashboard" className="underline border-amber-100 pointer">Dashboard</Link>
    </div>
  );
}

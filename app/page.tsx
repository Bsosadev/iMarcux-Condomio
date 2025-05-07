import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div>
        <Link href={"/Auth/Signin"}>Login</Link> 
        <Link href={"/Auth/Signup"}>Register</Link> 
      </div>
    </div>
  );
}

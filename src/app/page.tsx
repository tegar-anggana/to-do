import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center pt-20">
      <Link href={"/private"}>Go to private</Link>
    </div>
  );
}

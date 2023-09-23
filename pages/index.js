import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>
        ir al about <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}

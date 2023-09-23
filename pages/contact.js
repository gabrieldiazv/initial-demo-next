import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";

const contactPage = () => {
  return (
    <MainLayout>
      <h1 className="title">
        ir al home <Link href="/">contact</Link>
      </h1>
    </MainLayout>
  );
};

export default contactPage;

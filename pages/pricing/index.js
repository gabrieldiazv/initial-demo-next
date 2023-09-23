import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";
const PricingPage = () => {
  return (
    <>
      <h1>
        ir al home <Link href="/">home</Link>
      </h1>
    </>
  );
};

PricingPage.getLayaout = function getLayaout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default PricingPage;

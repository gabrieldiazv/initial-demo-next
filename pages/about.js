import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";
const aboutPage = () => {
  return (
    <>
      <h1>
        ir al home <Link href="/">home</Link>
      </h1>
    </>
  );
};

aboutPage.getLayaout = function getLayaout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default aboutPage;

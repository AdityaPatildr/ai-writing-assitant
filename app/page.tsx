import CommonComp from "./components/commonComp";
import Navbar from "./components/navbar";
import MainHeading from "./components/mainHeading";

export default function Home() {
  return (
    <div className="bg-[color:var(--main-bg)] min-h-screen">
      <Navbar />
      <MainHeading />
      <CommonComp />
    </div>
  );
}

import CommonComp from "./components/commonComp";
import Navbar from "./components/navbar";
import MainHeading from "./components/mainHeading";

export default function Home() {
  return (
    <div className="bg-slate-500 min-h-screen">
      <Navbar />
      <MainHeading />
      <CommonComp />
    </div>
  );
}

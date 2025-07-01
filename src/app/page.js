import Main from "./main/page";
import SideBar from "./sidebar/page";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-row xs:flex xs:flex-col xs:items-center md:items-stretch lg:items-stretch lg:gap-8 md:gap-4 p-4 justify-center">

      <SideBar />

      <Main />


    </div>
  );
}

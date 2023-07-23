import ConnectWallet from "./ConnectWallet";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full absolute top-0 flex flex-row justify-between items-center px-10 py-10 bg-white">
      <Image src={"/trustboard.svg"} alt="" width="200" height="120"/>
      {/*<span className="text-3xl font-extrabold">TrustBoard</span>*/}
      <SearchBar />
      <div className="flex flex-row items-center h-8 bg-gray-100 gap-2 px-4 bg-opacity-50 py-6 rounded-md">
        <Image src={"/flag_us.svg"} alt="" width="20" height="20"/>
        <span>Eng (US)</span>
        <Image src={"/chevron.svg"} alt="" width="20" height="20"/>
      </div>
      {/* <Profile /> */}
      {/* <ConnectMetamask /> */}
      <ConnectWallet />
    </div>
  );
};

export default Header;

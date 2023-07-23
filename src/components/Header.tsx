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
      {/* <Profile /> */}
      {/* <ConnectMetamask /> */}
      <ConnectWallet />
    </div>
  );
};

export default Header;

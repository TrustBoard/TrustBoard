import ConnectWallet from "./ConnectWallet";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full absolute top-0 flex flex-row justify-between items-center px-10 py-10 bg-white">
      <span className="text-3xl font-extrabold">TrustBoard</span>
      <SearchBar />
      {/* <Profile /> */}
      {/* <ConnectMetamask /> */}
      <ConnectWallet />
    </div>
  );
};

export default Header;

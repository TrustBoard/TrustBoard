import Profile from "./Profile";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full absolute top-0 flex flex-row justify-between px-10 py-10 border">
      <span className="text-3xl font-extrabold">TrustBoard</span>
      <SearchBar />
      <Profile />
    </div>
  );
};

export default Header;

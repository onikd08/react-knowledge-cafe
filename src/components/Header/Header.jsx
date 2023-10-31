import profile_img from "../../images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile_img} alt="" />
    </header>
  );
};

export default Header;

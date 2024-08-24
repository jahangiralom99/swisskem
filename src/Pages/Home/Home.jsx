import Banner from "./Banner";
import OurDepartment from "./OurDepartment";
import OurMission from "./OurMission";
import Product from "./Product";
import ProductRang from "./ProductRang";
import SkinBeauty from "./SkinBeauty";
import Swisskem from "./Swisskem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Swisskem />
      <OurMission />
      <OurDepartment />
      <SkinBeauty />
      <ProductRang />
      <Product />
    </div>
  );
};

export default Home;

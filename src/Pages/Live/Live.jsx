import img1 from "../../assets/live-34-150x150 (1).jpeg";
import img2 from "../../assets/live-34-150x150 (1).jpeg";
import img3 from "../../assets/live-34-150x150 (1).jpeg";
import img4 from "../../assets/live-34-150x150 (1).jpeg";
import img5 from "../../assets/live-34-150x150 (1).jpeg";
import img6 from "../../assets/live-34-150x150 (1).jpeg";
import img7 from "../../assets/live-34-150x150 (1).jpeg";
import img8 from "../../assets/live-34-150x150 (1).jpeg";
const Live = () => {
  return (
    <div className="section">
      <h2 className="text-3xl font-bold text-center mt-6">Live</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 gap-8 mb-8">
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img2} alt="" />
        <img className="border p-1 w-full shadow-" src={img3} alt="" />
        <img className="border p-1 w-full shadow-" src={img4} alt="" />
        <img className="border p-1 w-full shadow-" src={img5} alt="" />
        <img className="border p-1 w-full shadow-" src={img6} alt="" />
        <img className="border p-1 w-full shadow-" src={img7} alt="" />
        <img className="border p-1 w-full shadow-" src={img8} alt="" />
        {/* <img src={img1} alt="" /> */}
      </div>
    </div>
  );
};

export default Live;

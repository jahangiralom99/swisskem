import img1 from "../../assets/352248345_1475106349937204_610941745305820054_n.jpg";
import img2 from "../../assets/352259196_1298545857677946_8746693435113032463_n.jpg";
import img3 from "../../assets/352314355_1050970162550616_2218608125481711933_n.jpg";
import img4 from "../../assets/352367223_806424467760564_7108769864614807822_n.jpg";
import img5 from "../../assets/352440960_3290420097915251_2780495756998502621_n.jpg";
import img6 from "../../assets/352440960_3290420097915251_2780495756998502621_n-1.jpg";
import img7 from "../../assets/352604290_1365598457360032_4787955190920425571_n-1.jpg";
import img8 from "../../assets/352256955_798799808223568_3145595834205580066_n.jpg";
const OurActivity = () => {
  return (
    <div className="section">
      <h2 className="text-3xl font-bold text-center mt-6">EVENTS</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 gap-3 mb-8">
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

export default OurActivity;

import img1 from "../../assets/01-MD-Gias-Uddin_1-188x300.jpg";
import img2 from "../../assets/03-Ahnaf-Ajmain-Zarif_1-188x300.jpg";
import img3 from "../../assets/04-Ashutosh-Matubbar-Sumon_1-188x300.jpg";
import img4 from "../../assets/05-Md.Ruhul-Amin_1-188x300.jpg";
import img5 from "../../assets/06-Md.-Delwar-Hosaain_1-188x300.jpg";
import img6 from "../../assets/07-Jubayer-al-Mahmud_1-188x300.jpg";

const OurOfficial = () => {
  return (
    <div className="section p-9">
      <h1 className="text-2xl font-bold ">Our Employee</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center lg:grid-cols-6 mt-8">
        <img className="w-full" src={img1} alt="MD-Gias-Uddin" />
        <img className="w-full" src={img2} alt="Ahnaf-Ajmain-Zarif" />
        <img className="w-full" src={img3} alt="Ashutosh-Matubbar-Sumon" />
        <img className="w-full" src={img4} alt="Ruhul-Amin" />
        <img className="w-full" src={img5} alt="Delwar-Hosaain" />
        <img className="w-full" src={img6} alt="Jubayer-al-Mahmud" />
      </div>
    </div>
  );
};

export default OurOfficial;

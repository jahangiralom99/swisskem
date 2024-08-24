import image1 from "../../assets/Skin-Beauty-Care.webp";
import image2 from "../../assets/No-Side-Effects.webp";
import image3 from "../../assets/Medically-Proven.webp";

const SkinBeauty = () => {
  return (
    <div className="section mt-8">
      <div className="grid md:grid-cols-3 gap-5 items-center p-10 bg-white">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img src={image1} alt="Skin & Beauty Care" className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800">
            Skin & Beauty Care
          </h3>
          <p className="text-gray-600">Safe and easy to use</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img src={image2} alt="No Side Effects" className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800">
            No Side Effects
          </h3>
          <p className="text-gray-600">Treat your body with the care</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img src={image3} alt="Medically Proven" className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800">
            Medically Proven
          </h3>
          <p className="text-gray-600">Guaranteed Results</p>
        </div>
      </div>
    </div>
  );
};

export default SkinBeauty;

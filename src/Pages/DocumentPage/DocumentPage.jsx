import img1 from "../../assets/01.-Trade-lic-150x150.jpg";

const DocumentPage = () => {
  return (
    <div className="section">
      <h2 className="text-3xl font-bold text-center mt-6">Document</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 gap-8 mb-8">
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        <img className="border p-1 w-full shadow-" src={img1} alt="" />
        {/* <img src={img1} alt="" /> */}
      </div>
    </div>
  );
};

export default DocumentPage;

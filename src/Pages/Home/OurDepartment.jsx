import image from "../../assets/factsheet-bg.webp";

const OurDepartment = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-teal-100 p-8 relative "
      >
        {/* Header */}
        <div className="section absolute z-10 -top-8 left-1/2 transform -translate-x-1/2 ">
          <button className="bg-[#283275] uppercase border-[3px] border-white text-white py-4 px-4 rounded-full shadow-lg">
            FACTSHEET OF Inthy International
          </button>
        </div>
        <div className="section flex flex-col lg:flex-row rounded-lg mt-8">
          {/* Social Compliances Section */}
          <div className="w-full lg:w-1/2 p-8 rounded-l-lg text-[#283275]">
            <h2 className=" text-2xl font-semibold">Social Compliances</h2>
            <p className=" mt-4">
              We strongly follow the environment and social compliance. We
              strongly oppose the child labour. And fully committed for human &
              social values.
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="relative border-[8px] border-[#283275] p-12 rounded-full">
                <div className="text-center">
                  <div className="text-5xl font-bold ">101%</div>
                  <div className=" font-medium mt-2">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Departments Section */}
          <div className="w-full lg:w-1/2 p-8 text-[#283275]">
            <h2 className=" text-2xl font-semibold">Our Departments</h2>
            <div className="mt-6">
              <div className="mb-6">
                <span className="">Customer Centric Approach</span>
                <div className="bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-teal-600 h-4 rounded-full flex justify-end items-center"
                    style={{ width: "101%" }}
                  >
                    <span className="text-white text-xs mr-2">101%</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <span className="">Research & Development</span>
                <div className="bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-teal-600 h-4 rounded-full flex justify-end items-center"
                    style={{ width: "80%" }}
                  >
                    <span className="text-white text-xs mr-2">80%</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <span className="">Team Co-ordination</span>
                <div className="bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-teal-600 h-4 rounded-full flex justify-end items-center"
                    style={{ width: "100%" }}
                  >
                    <span className="text-white text-xs mr-2">100%</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <span className="">Time Management</span>
                <div className="bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-teal-600 h-4 rounded-full flex justify-end items-center"
                    style={{ width: "91%" }}
                  >
                    <span className="text-white text-xs mr-2">91%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDepartment;

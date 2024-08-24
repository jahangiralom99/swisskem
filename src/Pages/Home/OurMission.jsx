const OurMission = () => {
  const items = [
    {
      icon: "🌱",
      title: "Our Philosophy",
      description:
        "Synergy of dermaceutical care on pharmaceutical treatment. Providing complete treatment to skin care difficulties. To make a difference in people’s everyday life by providing high quality products. To maintain a policy of respect and honesty towards the customer.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description:
        "To lead the way by advancing science and Improving both health and life quality through the research, development and launch of innovative, high quality products and services.",
    },
    {
      icon: "🍃",
      title: "Our Mission",
      description:
        "To provide our business partners effective and high quality dermoceuticals that help to improve skin health and thus a higher quality of life! Our mission to meet the growing healthcare challenges of mankind in the changing world.",
    },
  ];

  return (
    <div className="section mt-8">
      <div className="py-16 p-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6 lg:flex-row justify-around">
            {items.map((item, index) => (
              <div key={index} className="text-center mb-10 space-y-5 lg:mb-0 lg:w-1/3">
                <div className="flex justify-center mb-6">
                  <div className="bg-teal-400 rounded-full p-4 text-white text-4xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <hr className="border-t border-teal-400 w-20 mx-auto mb-4" />
                <p className="text-[#666666] text-[17px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;

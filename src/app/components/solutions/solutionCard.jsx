const SolutionCard = ({ imgUrl, description }) => {
  return (
    <div
      style={{
        boxShadow: "2.734px 2.734px 22.78px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="my-[70px] p-[6px] lg:p-[10px] flex flex-col w-[180px] h-[140px] sm:h-[170px] sm:w-[200px] lg:h-[300px] xl:h-[360px] lg:w-[90%] bg-dark-blue text-white">
      {/* activity card image */}
      <div
        className="w-full  bg-center bg-cover"
        style={{ backgroundImage: `url(${imgUrl})` }}>
        .
      </div>
      {/* activity description */}
      <div className="w-full h-full flex flex-col py-[10px] lg:py-[20px] px-[6px] lg:px-[20px] justify-center items-center">
        <p className="font-normal text-[8px] lg:text-lg overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;

export default function BrandCard({ icon, brandName }) {
  return (
    <div className=" w-[120px] h-[117px]">
      <div className="flex  flex-col justify-center items-center p-0 md:p-2 gap-2 md:w-[120px] md:h-[117px] w-[80px] h-[80px] rounded-full bg-slate-300">
        <div className="bg-slate-300 flex justify-center items-center rounded-full w-10 h-10 md:w-16 md:h-16">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <img
              src={icon}
              alt="Brand Icon"
              className=" object-contain w-10 h-10 md:w-16 md:h-16 rounded-full"
            />
          </div>
        </div>
      </div>
      <p className="text-center">{brandName}</p>
    </div>
  );
}

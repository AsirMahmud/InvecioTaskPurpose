export default function CategoryCard({ imgUrl, categoryName }) {
  return (
    <div className="w-[288px] flex h-[112px]  border gap-2  bg-slate-300">
      <div className="w-[120px] h-full  flex justify-center items-center ">
        <img
          className=" object-cover w-full h-full "
          src={imgUrl}
          alt="img"
        ></img>
      </div>
      <div className="w-[286px] h-full flex gap-4 flex-col justify-center">
        <p className="font-bold  ">{categoryName}</p>
      </div>
    </div>
  );
}

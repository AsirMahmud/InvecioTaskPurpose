export default function ListCard({ product, productDescription, imgurl }) {
  return (
    <div className="w-full flex bg-slate-100 overflow-hidden  h-[180px] border gap-6 ">
      <div className="w-[170px] h-full ">
        <img
          className="w-full h-full object-cover"
          src={imgurl}
          alt="img"
        ></img>
      </div>
      <div className="w-[286px] h-full flex gap-2 flex-col justify-center">
        <p className="font-bold  ">{product}</p>
        <p className="text-interface-3 text-sm text-wrap">
          {productDescription}
        </p>
        <div className="flex gap-2">
          <span className="font-bold">$8</span>{" "}
          <del className=" text-interface-3">$16</del>
          <span className="text-interface-3">-50%</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ imageUrl, categoryName }) {
  return (
    <div className="w-[236px] h-[231.93px]  border px-8 py-4">
      <div className=" ">
        <img
          src={imageUrl}
          alt="Your Image"
          className="w-[200px] h-[132.93px] object-cover "
        />
      </div>
      <div className="w-full flex justify-center  ">
        <p className="text-center mt-[12%] font-bold text-lg">{categoryName}</p>
      </div>
    </div>
  );
}

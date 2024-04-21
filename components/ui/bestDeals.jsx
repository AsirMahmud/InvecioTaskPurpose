export default function BestDeals({ imageUrl, categoryName }) {
  return (
    <div className="md:w-[236px] md:h-[244px] w-[150px] h-[150px]    border">
      <div className="mb-2 ">
        <img
          src={imageUrl}
          alt="Your Image"
          className="w-full md:h-[204px] h-[120px]   object-cover "
        />
      </div>
      <div className="w-full flex justify-center  items-center">
        <p>{categoryName}</p>
      </div>
    </div>
  );
}

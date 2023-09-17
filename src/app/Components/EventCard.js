
const EventCard = ({ title, description, date, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 relative cursor-pointer h-fit">
      <div className="absolute top-0 left-0 bg-blue-500 text-white p-2">
        {date}
      </div>
      {imageUrl && (
        <img src={imageUrl} alt={title} width={400} height={200} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-left">{title}</div>
        <p className="text-gray-700 text-base text-justify">{description}</p>
      </div>
      
    </div>
  );
}

export default EventCard;

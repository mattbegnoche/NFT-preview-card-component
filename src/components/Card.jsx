import PriceInfo from "./PriceInfo";
import TimeInfo from "./TimeInfo";

function Card({
  imageUrl,
  titleText = "This is an h1 title text",
  textContent = "Insert text content",
  daysLeft = 0,
  ETH = "0.00",
  authorImage,
  authorName,
}) {
  return (
    <figure className="max-w-80 p-6 rounded-2xl bg-blue-900 flex flex-col gap-6">
      <img
        className=" rounded-lg"
        src={imageUrl}
        alt="Image of equilibrium cube"
      />
      <div>
        <h1 className="text-xl font-semibold leading-7">{titleText}</h1>
        <p>{textContent}</p>
      </div>
      <div className="flex flex-row justify-between">
        <PriceInfo ETH={ETH} />
        <TimeInfo daysLeft={daysLeft} />
      </div>
      <div className="w-full h-px bg-blue-800"></div>
      <div className="flex flex-row items-center gap-5">
        <img className="w-10" src={authorImage} alt="author image" />
        <span>Creation of {authorName}</span>
      </div>
    </figure>
  );
}

export default Card;

import Image from "next/image";

export default function PlanCard({
  number,
  isSelected,
  onClick,
  imageSrc,
  title = "TYPE",
  subtitle,
  showCursor = true,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        w-full max-w-[160px] sm:max-w-[200px] md:w-64 
        h-[260px] sm:h-[320px] md:h-96 
        rounded-2xl md:rounded-3xl 
        ${showCursor ? "cursor-pointer" : ""}
        flex flex-col justify-between
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-xl
        
        ${
          isSelected
            ? "bg-gradient-to-b from-orange-400 bg-primary text-white"
            : "bg-gradient-to-b bg-neutralDarkLight text-gray-700"
        }
      `}
    >
      <div className="flex flex-col gap-1 sm:gap-2 p-3 sm:p-4">
        <h3 className="text-sm sm:text-base md:text-lg text-center font-semibold">
          {title} {number}
        </h3>
        <div className="text-sm sm:text-base md:text-xl uppercase font-bold text-center mt-1 sm:mt-2">
          {subtitle}
        </div>
        <div className="relative w-full h-32 sm:h-40 md:h-60">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={`${title} Image`}
              fill
              className="object-cover rounded-lg -mt-2 sm:-mt-4 md:-mt-6"
            />
          )}
        </div>
        <p className="text-xs sm:text-sm md:text-md text-center opacity-80 -mt-4 sm:-mt-6 md:-mt-12">
          {imageSrc?.src.includes("relax") && "Perfect time for healing"}
          {imageSrc?.src.includes("foody") && "Discover amazing local cuisine"}
          {imageSrc?.src.includes("shopping") && "Experience shopping paradise"}
          {imageSrc?.src.includes("activity") && "Exciting adventures await"}
        </p>
      </div>

      <div className="flex items-center justify-between w-full p-2 sm:p-3 md:p-4 border-t border-gray-300">
        <span className="text-sm md:text-md">✨</span>
      </div>
    </div>
  );
}

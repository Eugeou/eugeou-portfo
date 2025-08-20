import { EducationType } from "@/types";

export const EducationNode = ({data}: {data: EducationType}) => {
  // Filter out undefined values and create an array of [key, value] pairs
  const dataEntries = Object.entries(data).filter(
    ([_, value]) => value !== undefined
  );

  return (
    <div className="w-full h-full bg-white p-1 rounded-md overflow-y-auto">
      {dataEntries.map(([key, value], _index) => (
        <div
          key={key}
          className="w-full h-5 border border-gray-300 rounded-md flex items-center justify-between mb-1"
        >
          <div className="w-1/2 h-full bg-[#ff8c00] flex items-center px-2 text-white text-xs font-medium">
            {key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </div>
          <p className="px-2 text-xs text-gray-700 truncate">{String(value)}</p>
        </div>
      ))}
    </div>
  );
};

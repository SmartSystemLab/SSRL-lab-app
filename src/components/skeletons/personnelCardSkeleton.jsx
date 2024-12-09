const PersonnelCardSkeleton = () => (
  <div className="flex justify-around items-center hover:bg-navBg1 border rounded-xl p-1 animate-pulse">
    <div className="h-12 w-12 flex-shrink-0 rounded-full m-2 bg-gray-300"></div>
    <div className="ml-3 flex flex-col space-y-2 w-full">
      <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

export default PersonnelCardSkeleton;

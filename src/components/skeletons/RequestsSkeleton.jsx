const RequestsSkeleton = () => {
    return (
        <div className="flex items-center gap-4 border-b hover:bg-navBg1 fromTop animate-pulse">
            <div className="h-12 w-12 flex-shrink-0 rounded-full m-2 bg-gray-300"></div>
            <div className="flex-grow ">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-100 rounded w-1/4 mt-1"></div>
            </div>
            <div className="h-3 w-1/6 rounded-md bg-slate-200"></div>

        </div>
    )
}

export default RequestsSkeleton
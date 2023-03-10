export function Search() {
    return (
        <div className="relative w-full mx-auto max-w-6xl mt-12">
            <input type="text" placeholder="Search by products" className="block w-full py-2 pl-10 pr-3 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-6 h-6 text-gray-400 feather feather-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </div>
    )
}
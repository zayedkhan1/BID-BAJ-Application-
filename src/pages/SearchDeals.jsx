



//////////////////////////////////////////////



// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { formatMessageDate } from "../utility/utility";

// const SearchDeals = () => {
//   const { vin: paramVin } = useParams(); // VIN from URL

//   const [vin, setVin] = useState(paramVin || "");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searched, setSearched] = useState(false);

//   // 🔍 Fetch function (REUSABLE)
//   const fetchSearchResults = async (vinValue) => {
//     if (!vinValue.trim()) return;

//     try {
//       setLoading(true);
//       setSearched(true);

//       const response = await fetch(
//         `/api/vehicle/api/v1/appraisals/search/${vinValue}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       const result = await response.json();

//       setResults(result.appraisals || []);
//     } catch (error) {
//       console.error("Search fetch error:", error);
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔥 Run when page loads OR URL VIN changes
//   useEffect(() => {
//     if (paramVin) {
//       setVin(paramVin);
//       fetchSearchResults(paramVin);
//     }
//   }, [paramVin]);

//   // 🔍 Button click (NO navigation)
//   const handleSearch = () => {
//     fetchSearchResults(vin);
//   };

//   return (
//     <div className="mt-16 min-h-screen bg-gray-900 text-white p-6">

//       {/* 🔍 SEARCH BAR (NEW) */}
//       <div className="flex max-w-xl mt-5 gap-3 mb-8 mx-auto">
//         <input
//           type="text"
//           placeholder="Search by VIN..."
//           value={vin}
//           onChange={(e) => setVin(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSearch();
//           }}
//           className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white"
//         />

//         <button
//           onClick={handleSearch}
//           className="bg-[#769A7F] px-6 py-3 rounded-xl"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </div>

//       {/* TITLE */}
//       <h1 className="text-3xl font-bold mb-6">
//         Search Results{" "}
//         {searched && (
//           <>
//             for VIN: <span className="text-[#769A7F]">{vin}</span>
//           </>
//         )}
//       </h1>

//       {/* LOADING */}
//       {loading && <Loading />}

//       {/* NO RESULT */}
//       {!loading && searched && results.length === 0 && (
//         <p className="text-gray-400">No deals found for this VIN.</p>
//       )}

//       {/* RESULTS */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {results.map((item) => (
//           <Link
//             to={`/chat/${item?.message?.chat}`}
//             key={item.id}
//             className="bg-gray-800 p-5 rounded-xl border border-gray-700"
//           >
//             <p className="text-sm text-gray-400 mt-2">
//               VIN: {item.vin_no}
//             </p>

//             <h3 className="text-xl font-bold">
//               Mileage: {item.milage} ML
//             </h3>

//             <p className="text-sm text-gray-300 mt-2">
//               Created At: {formatMessageDate(item.created_at)}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchDeals;

















/////////////////////////////////////////////









import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { formatMessageDate } from "../utility/utility";


const SearchDeals = () => {
  const { vin: paramVin } = useParams();

  const [vin, setVin] = useState(paramVin || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchSearchResults = async (vinValue) => {
    if (!vinValue.trim()) return;

    try {
      setLoading(true);
      setSearched(true);

      const response = await fetch(
        `/api/vehicle/api/v1/appraisals/search/${vinValue}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const result = await response.json();
      setResults(result.appraisals || []);
    } catch (error) {
      console.error("Search fetch error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (paramVin) {
      setVin(paramVin);
      fetchSearchResults(paramVin);
    }
  }, [paramVin]);

  const handleSearch = () => {
    fetchSearchResults(vin);
  };

  if (loading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Subtle green glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#769A7F]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#769A7F]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Premium Search Card */}
        <div >

          <div >

            <div className="flex flex-col md:flex-row gap-4 mb-4 mt-4 max-w-3xl mx-auto">
              <div className="flex-1 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#769A7F] to-[#5a7a62] rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <input
                  type="text"
                  placeholder="Enter Vehicle Identification Number (VIN)"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="relative w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#769A7F]/50 focus:border-transparent transition-all duration-200 text-base"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="relative px-8 py-4 bg-[#769A7F] rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100"
              >
                Search Deals

              </button>
            </div>
          </div>
        </div>

        {/* Header with stats */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Search Results
            </h1>
            {searched && (
              <p className="text-gray-300 mt-2 text-lg">
                Showing deals for{" "}
                <span className="font-mono text-[#769A7F] bg-[#769A7F]/10 px-2 py-1 rounded-md">
                  {vin}
                </span>
              </p>
            )}
          </div>
          {searched && results.length > 0 && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <span className="text-[#769A7F] font-semibold">{results.length}</span>
              <span className="text-gray-300 ml-1">deal{results.length !== 1 ? "s" : ""} found</span>
            </div>
          )}
        </div>

   

        {/* No Results */}
        {!loading && searched && results.length === 0 && (
          <div className="text-center py-20 px-4">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 border border-gray-700 mb-6">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No deals found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              We couldn't find any appraisals for this VIN. Try searching with a different VIN or check back later.
            </p>
          </div>
        )}

        {/* Results Grid */}
        {!loading && results.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, index) => (
              <Link
                to={`/chat/${item?.message?.chat}`}
                key={item.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-[#769A7F]/50 hover:shadow-2xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#769A7F]/0 to-[#769A7F]/0 group-hover:from-[#769A7F]/10 group-hover:to-[#769A7F]/5 transition duration-500" />
                
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#769A7F] opacity-0 group-hover:opacity-100 transition duration-300" />
                
                <div className="relative p-6">
                  {/* VIN badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-[#769A7F]/20 rounded-full border border-[#769A7F]/30">
                      <span className="text-xs font-mono text-[#769A7F] tracking-wider">
                        {item.vin_no?.slice(0, 8)}...
                      </span>
                    </div>
                    <div className="px-2 py-1 bg-gray-700/50 rounded-full">
                      <span className="text-xs text-gray-400">VIN</span>
                    </div>
                  </div>

                  {/* Mileage - prominent */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">
                        {item.milage?.toLocaleString() || "N/A"}
                      </span>
                      <span className="text-gray-400 text-sm">miles</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-gray-500">Odometer reading</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                  {/* Footer with date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatMessageDate(item.created_at)}</span>
                    </div>
                    <div className="text-[#769A7F] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDeals;
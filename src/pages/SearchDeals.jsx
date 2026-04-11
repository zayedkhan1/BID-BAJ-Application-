import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { formatMessageDate } from "../utility/utility";

const SearchDeals = () => {
  const { vin } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `/api/vehicle/api/v1/appraisals/search/${vin}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const result = await response.json();

      setResults(result.appraisals|| []);

    } catch (error) {
      console.error("Search fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [vin]);

  if (loading) return <Loading />;

  return (
    <div className="mt-16 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for VIN: <span className="text-[#769A7F]">{vin}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-400">No deals found for this VIN.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {results.map((item) => (
            <Link to={`/chat/${item?.message?.chat}`}
              key={item.id}
              className="bg-gray-800 p-5 rounded-xl border border-gray-700"
            >
              <p className="text-sm text-gray-400 mt-2">
                VIN: {item.vin_no}
              </p>
             
             <h3 className="text-xl font-bold"> Milage: {item.milage} ML</h3>

              <p className="text-sm text-gray-300 mt-2">
                Created At: {formatMessageDate(item.created_at)}
              </p>
            </Link>
          ))}

        </div>
      )}
    </div>
  );
};

export default SearchDeals;
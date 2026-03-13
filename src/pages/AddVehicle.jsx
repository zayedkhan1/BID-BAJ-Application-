
import { useEffect, useState } from "react";
import { FaCar, FaPalette, FaTachometerAlt } from "react-icons/fa";
import UsersList from "../components/UsersList";

const AddVehicle = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [vehicle, setVehicle] = useState({
    appraised_to_user_id: [],
    vin_no: "",
    milage: "",
    milage_unit: "KM",
    basic_info: {
      tires_rating: '',
      windshield_crack: false,
      paint_scratch: false,
      other_damages: false,
      vehicle_grade: '',
      color: ""
    }
  });

  useEffect(() => {
    setVehicle((prev) => ({
      ...prev,
      appraised_to_user_id: selectedUsers
    }));
  }, [selectedUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleBasicInfo = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicle({
      ...vehicle,
      basic_info: {
        ...vehicle.basic_info,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Vehicle Data:", vehicle);

    if(vehicle.vin_no.length < 17){
      alert("VIN number must be at least 17 characters long.");
      return;
    }


    try {
      const res = await fetch("/api/vehicle/api/v1/add/multiple/appraisal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(vehicle)
      });
      const data = await res.json();
      console.log("Response from API:", data);
      if (!res.ok) {
        console.log("Failed to add vehicle: " + data.message);
      } else {
        alert("Vehicle added successfully!");
        console.log("Vehicle added successfully:", data);
      }
    } catch (error) {
      console.log("Error adding vehicle:", error);
    }
  };
   


  return (
    <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div>
        <UsersList setSelectedUsers={setSelectedUsers} />
      </div>

      <div className=" min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-4 sm:p-6 lg:p-5"> 
        <div className="bg-gray-800/90 backdrop-blur-sm shadow-2xl rounded-xl w-full max-w-3xl p-6 sm:p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-[#8abf9e] mb-6 flex items-center gap-2">
            <FaCar className="text-[#8abf9e]" /> Create Deal
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* VIN */}
            <div>
              <label className="font-semibold text-gray-200">VIN Number</label>
              <input
                type="text"
                name="vin_no"
                value={vehicle.vin_no}
                onChange={handleChange}
                placeholder="Enter VIN"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-lg mt-1 focus:outline-none focus:border-[#8abf9e] focus:ring-1 focus:ring-[#8abf9e] transition"
              />
            </div>

            {/* Mileage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-gray-200 flex items-center gap-1">
                  <FaTachometerAlt /> Mileage
                </label>
                <input
                  type="number"
                  name="milage"
                  value={vehicle.milage}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg mt-1 focus:outline-none focus:border-[#8abf9e] focus:ring-1 focus:ring-[#8abf9e] transition"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-200">Mileage Unit</label>
                <select
                  name="milage_unit"
                  value={vehicle.milage_unit}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg mt-1 focus:outline-none focus:border-[#8abf9e] focus:ring-1 focus:ring-[#8abf9e] transition"
                >
                  <option value="KM">KM</option>
                  <option value="MILE">MILE</option>
                </select>
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="font-semibold text-gray-200 flex items-center gap-1">
                <FaPalette /> Vehicle Color
              </label>
              <input
                type="text"
                name="color"
                value={vehicle.basic_info.color}
                onChange={handleBasicInfo}
                placeholder="BLACK"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-lg mt-1 focus:outline-none focus:border-[#8abf9e] focus:ring-1 focus:ring-[#8abf9e] transition"
              />
            </div>

            {/* Tires Rating */}
            <div>
              <label className="font-semibold text-gray-200 mb-2 block">Tires Rating</label>
              <div className="flex gap-4">
                {[1,2,3,4,5].map((num) => (
                  <label key={num} className="flex items-center gap-1 text-gray-200">
                    <input
                      type="radio"
                      name="tires_rating"
                      value={num}
                      checked={vehicle.basic_info.tires_rating === num.toString()}
                      onChange={handleBasicInfo}
                      className="accent-[#8abf9e]"
                    />
                    {num}
                  </label>
                ))}
              </div>
            </div>

            {/* Vehicle Grade */}
            <div>
              <label className="font-semibold text-gray-200 mb-2 block">Vehicle Grade</label>
              <div className="flex gap-4">
                {[1,2,3,4,5].map((num) => (
                  <label key={num} className="flex items-center gap-1 text-gray-200">
                    <input
                      type="radio"
                      name="vehicle_grade"
                      value={num}
                      checked={vehicle.basic_info.vehicle_grade === num.toString()}
                      onChange={handleBasicInfo}
                      className="accent-[#8abf9e]"
                    />
                    {num}
                  </label>
                ))}
              </div>
            </div>

            {/* Damages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 text-gray-200">
                <input
                  type="checkbox"
                  name="windshield_crack"
                  checked={vehicle.basic_info.windshield_crack}
                  onChange={handleBasicInfo}
                  className="w-4 h-4 accent-[#8abf9e] bg-gray-700 border-gray-600 rounded focus:ring-[#8abf9e]"
                />
                Windshield Crack
              </label>

              <label className="flex items-center gap-2 text-gray-200">
                <input
                  type="checkbox"
                  name="paint_scratch"
                  checked={vehicle.basic_info.paint_scratch}
                  onChange={handleBasicInfo}
                  className="w-4 h-4 accent-[#8abf9e] bg-gray-700 border-gray-600 rounded focus:ring-[#8abf9e]"
                />
                Paint Scratch
              </label>

              <label className="flex items-center gap-2 text-gray-200">
                <input
                  type="checkbox"
                  name="other_damages"
                  checked={vehicle.basic_info.other_damages}
                  onChange={handleBasicInfo}
                  className="w-4 h-4 accent-[#8abf9e] bg-gray-700 border-gray-600 rounded focus:ring-[#8abf9e]"
                />
                Other Damages
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#8abf9e] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#7aa88c] transition-colors duration-200 shadow-lg"
            >
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
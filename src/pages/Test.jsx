//import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState([]);
    //proxy: /api/vehicle/api/v1/add/appraisal
    //main:http://bidbaj.com/vehicle/api/v1/add/appraisal
    //using axios
    // const yourToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const response = await axios.get(
    //                     "http://bidbaj.com/vehicle/api/v1/add/appraisal", 
    //                     {
    //                         headers: {
    //                             Authorization:`${yourToken}`,
    //                         },   
    //                     }
    //                 );

    //                 console.log(response.data);
    //                 setData(response.data);
    //             } catch (error) {
    //                 console.error("Error fetching data:", error);
    //             }
    //         };

    //         fetchData();
    //     }, []);



    ///using fetch 
    const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "/api/vehicle/api/v1/add/appraisal",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${yourToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                // Check if response is ok
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json(); // convert to JSON
                // console.log(result);
                setData(result);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const users = data.users_list;
    console.log("Data state:", users);
    return (
        <div className='min-h-screen mt-20'>
            <h1>Test GET API</h1>
            {
                <div>
                    <h1 className='text-center font-extrabold text-4xl'>Total Data: {users?.length}</h1>

                    {
                        users?.map((user) => (
                            <div key={user.id}  >
                                <div  className=' p-5 border-2 border-gray-300 mb-5'>
                                    <p>Name: {user?.name}</p>
                                    <p>phone: {user?.phone}</p>
                                </div>

                            </div>
                        ))}
                </div>
            }


        </div>
    );
};

export default Test;



// OPTIONS: Used to describe the communication options available for a target resource or the server as a whole. Browsers automatically send an OPTIONS request as a "preflight" request in specific Cross-Origin Resource Sharing (CORS) scenarios to ensure the intended cross-origin request is safe and permitted by the server.
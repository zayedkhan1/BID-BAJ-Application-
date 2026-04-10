import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import HowInWorks from '../components/HowItWorks';
import AvailableCars from '../components/AvailableCars';
import DownloadApp from '../components/DownloadApp';
import Loading from '../components/Loading';

const Home = () => {
    const [data,setData]=useState(null);

    
    
      useEffect(() => {
        const getContact = async () => {
          try {
            const res = await fetch("api/api/home");
            const data = await res.json();
    
            setData(data); // depends on your API structure
          } catch (error) {
            console.error("Error fetching contact:", error);
          } 
        };
    
        getContact();
      }, []);
      
    console.log(data);




    return (
        <div>
            <Hero></Hero>
            <HowInWorks data={data}></HowInWorks>
            <AvailableCars data={data}></AvailableCars>
            <DownloadApp data={data} ></DownloadApp>
        </div>
    );
};

export default Home;
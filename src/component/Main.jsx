import React from "react";
 import Card from "./Card";
import Footer from "./Footer";

const Main = () => {
  return (
    // Entry landing page
    <div className="h-screen w-full relative">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        className="h-screen w-full bg-no-repeat bg-cover gap-2  pl-4 pt-48
            lg:flex lg:justify-end lg:pl-20 lg:pb-28 lg:flex-col 
        "
      >
        <h1 className="text-5xl text-white font-bold ">Kerala</h1>
        <p className="text-[#016d78]">The God's Home</p>

        <div id="fade" className="w-full h-[4vh] bg-[black] absolute bottom-0 left-0">

        </div>
      </div>

      
      <div className="h-[80%] w-full bg-[#d4cfc8] flex flex-col justify-center lg:items-center lg:bg-cover">
        <h1  className="text-white text-center font-medium text-[5vw]
             ">
         Travelling To Kerala
        </h1>
        <p  className="text-white text-center text-[3vw]">A Travel Blog</p>
        <p className="text-white p-4 text-[4vw] text-center
        lg:text-2xl lg:w-[50%]
        "> 
          We look to provide the most authentic contentt from athletes,
          adventuren, explorers travellers autound the Kerala. Our long them
          mission is to educate inspire and enuble all peoples to experience &
          protect wildeness.
        </p>
      </div>
    


    <div id="imgContainer" className="h-auto flex flex-col lg:flex-row items-center   
    justify-start lg:justify-around bg-[#d4cfc8] lg:overflow-scroll">
        <Card src={"boat.jpg"} head="Kerala" para="a traditional houseboat "/>
        <Card src={"dance.jpg"}  head="Kathakali" para=" Famous and popular classical dance"/>
        <Card src={"onam.jpg"}  head="Onam" para="Festival of kerala"/>
        <Card src={"beach.jpg"}  head="Kovalam" para="Beach in Kerala"/>
       
    </div>

    <Footer/>
    </div>
  );
};

export default Main;

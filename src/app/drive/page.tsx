"use client"
import React from "react";
import File from "@/components/Files";
import { useState } from "react";
import WrapperModule from "@/components/WrapperModule";

const Page = () => {
  
  const rows = [];
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();

  const hiddenFileInput = React.useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

 function fileChange(e) {
  setFile(e.target.files[0]);
  setFileName(e.target.files[0].name);
  }

  return <div className="flex flex-row  w-full ">
    <WrapperModule>
      <div className="flex flex-row gap-4 justify-center items-center w-full">
        <File fileName='Recap week 1'/>
        <File fileName='BSA Meeting'/>
        <File fileName='ETHCC Lausanne'/>
        <File fileName='EPFL Ranking'/>
        {fileName == "" ? <p></p> : <File fileName = {fileName}/>}
        
        
      </div>
      
    </WrapperModule>
    <div className="flex flex-col">
      <button
        onClick={handleClick}
        className="flex mt-[180px] w-26 border-2 h-auto rounded text-white bg-color2 p-2 mr-12 hover:text-color2 hover:bg-white border-color2">
      
        {/* <img src="/icons/drive_notActive.svg" alt="file icon" className="w-3 md:w-4" /> */}
        <span className="text-sm md:text-base">Add File</span>
      </button>
      <input
        ref={hiddenFileInput}
        type="file"
        name="my_file"
        className="hidden"
        onChange={fileChange}
      />
    </div>;
  </div>;
};

export default Page;

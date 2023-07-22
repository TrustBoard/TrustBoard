import React from "react";
import Image from "next/image";


const File = (props) => {
    return (
        <button className="h-32 w-32 gap-4 border rounded-sm flex items-center justify-center hover:shadow flex-col">
            <img src='/icons/drive_notActive.svg' className=" h-14 w-14"/>
            <span className=" text-black">{props.fileName}</span>
        </button>
    );
}

export default File;
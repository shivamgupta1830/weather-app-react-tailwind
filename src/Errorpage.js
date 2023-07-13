import React from "react";

function Errorpage() {
  return (
    <div className="flex flex-col justify-between items-center mt-20">
      <p className="text-black text-3xl font-bold">
        Error in fetching data..!!!
      </p>
      <img
        src="https://static.wixstatic.com/media/cb0e64_e1e004d104024def96648ef488e7df8c~mv2.png/v1/fill/w_257,h_225,al_c,q_85,enc_auto/Picture15.png"
        alt=""
        className="w-[272px] mt-5 "
      />
    </div>
  );
}

export default Errorpage;

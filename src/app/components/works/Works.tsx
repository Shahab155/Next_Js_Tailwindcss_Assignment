import React from "react";
import Image from "next/image";

export default function Works() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <main className="my-12 flex justify-center items-center">
        {/* container  */}
        <div className="mx-4 container max-w-[1030px] my-12">
          {/* content container */}
          <section className=" flex flex-col h-auto md:h-[934px] max-w-[919px]">
            {/* heading  */}
            <h3 className="font-[600] text-[22px] relative bottom-5 text-center md:text-start">
              Featured Works
            </h3>
            {/* cards-container  */}
            <div className="h-auto md:h-[896px] flex flex-col justify-around gap-20  ">
              {/* card-1  */}
              <div className="flex flex-col items-center  md:flex-row gap-8 rounded-md  hover:scale-105 transition-all">
                {/* image  */}
                <Image
                  className="w-[400px] md:w-fit"
                  src="/Images/works1.png"
                  alt=""
                  width={245}
                  height={180}
                />
                {/* text-content  */}
                <div className="flex flex-col gap-6 text-center md:text-start">
                  <h2 className="font-[700] text-[30px]">
                    Designing Dashboards
                  </h2>
                  {/* badge year and dashboard  */}
                  <div className="flex gap-5 justify-center md:justify-start">
                    <button className="bg-[#F98585] px-4 rounded-[50px] text-white font-[700]">
                      {year}
                    </button>
                    <p className="text-[20px] font-[400] text-[#0000009E]">
                      Dashboard
                    </p>
                  </div>
                  <p className="font-[300] text-[18px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              {/* card-2  */}
              <div className="flex flex-col items-center  md:flex-row gap-8 rounded-md  hover:scale-105 transition-all">
                {/* image  */}
                <Image
                  className="w-[400px] md:w-fit"
                  src="/Images/works2.png"
                  alt=""
                  width={245}
                  height={180}
                />
                {/* text-content  */}
                <div className="flex flex-col gap-6 text-center md:text-start">
                  <h2 className="font-[700] text-[30px]">
                    Designing Dashboards
                  </h2>
                  {/* badge year and dashboard  */}
                  <div className="flex gap-5 justify-center md:justify-start">
                    <button className="bg-[#F98585] px-4 rounded-[50px] text-white font-[700]">
                      {year}
                    </button>
                    <p className="text-[20px] font-[400] text-[#0000009E]">
                      Dashboard
                    </p>
                  </div>
                  <p className="font-[300] text-[18px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              {/* card-3 */}
              <div className="flex flex-col items-center  md:flex-row gap-8 rounded-md  hover:scale-105 transition-all">
                {/* image  */}

                <Image
                  className="w-[400px] md:w-fit"
                  src="/Images/works3.png"
                  alt=""
                  width={245}
                  height={180}
                />

                {/* text-content  */}
                <div className="flex flex-col gap-6 text-center md:text-start">
                  <h2 className="font-[700] text-[30px]">
                    Designing Dashboards
                  </h2>
                  {/* badge year and dashboard  */}
                  <div className="flex gap-5 justify-center md:justify-start">
                    <button className="bg-[#F98585] px-4 rounded-[50px] text-white font-[700]">
                      {year}
                    </button>
                    <p className="text-[20px] font-[400] text-[#0000009E]">
                      Dashboard
                    </p>
                  </div>
                  <p className="font-[300] text-[18px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

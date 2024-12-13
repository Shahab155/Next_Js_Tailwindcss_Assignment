import React from "react";

export default function Posts() {
  return (
    <>
      <main className="my-20  md:h-[502px] h-auto flex justify-center items-center bg-red-100">
        {/* container  */}
        <div className=" mx-4 container max-w-[1030px] ">
          {/* content   */}
          <section className="">
            {/* heading and view all  */}
            <div className="flex justify-between">
              <h3 className="py-5 font-[500] text-[22px]">Recent Post</h3>
              <button className="font-[500] text-[22px] text-[#F98585]">
                View All
              </button>
            </div>
            {/* cards container  */}
            <div className="flex flex-col justify-between items-center gap-14 md:gap-0 md:flex-row ">
              {/* card 1 */}
              <div className="flex flex-col gap-8 p-[40px] w-[100%] md:w-[45%] rounded-md shadow-xl shadow-[rgba(0,0,0,0.2)]  bg-white hover:scale-110 transition-all hover:bg-red-300 hover:text-white cursor-pointer">
                <h2 className="font-[700] text-[26px]">
                  Making a design system from scratch
                </h2>
                <p className="text-[#000000B2] text-[18px] font-[400]">
                  <span className="mr-2">12 12 2024</span> |{" "}
                  <span className="ml-2">Design , Pattern</span>
                </p>
                <p className="font-[400] text-[#21243D]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              {/* card 2 */}

              <div className="flex flex-col gap-8 p-[40px] w-[100%] md:w-[45%] md:h-[356px] bg-white rounded-md shadow-xl shadow-[rgba(0,0,0,0.2)] hover:scale-110 transition-all hover:bg-red-300 hover:text-white cursor-pointer">
                <h2 className="font-[700] text-[26px]">
                  Making a design system from scratch
                </h2>
                <p className=" text-[#000000B2] text-[18px] font-[400]">
                  <span className="mr-2">12 12 2024</span> |{" "}
                  <span className="ml-2">Design , Pattern</span>
                </p>
                <p className=" font-[400] text-[#21243D]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

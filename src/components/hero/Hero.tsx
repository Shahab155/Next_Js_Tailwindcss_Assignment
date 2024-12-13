import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main className="flex justify-center items-center">
        {/* container  */}

        <div className="mx-4  container max-w-[1030px] bg-[#FAF5F5] ">
          {/* content  */}
          {/* content-container  */}
          <section className="md:h-[500px]  h-auto flex flex-col gap-14 md:flex-row items-center md:justify-between">
            {/* hero-text  */}
            <div className="md:w-[60%]  w-[90%] h-auto md:h-[305px] flex flex-col gap-8 items-start md:justify-between">
              <h1 className="leading-[60px] md:tracking-[2%] font-[900] text-5xl  text-[#21243D] ">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="font-[400] text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="hover:bg-red-600 bg-[#F98585] w-[205px] min-h-[50px] shadow-black shadow-md text-white font-[400] rounded-sm ">
                Download Resume
              </button>
            </div>
            {/* hero-image  */}
            <div>
              <Image
                src={"/Images/hero-image.png"}
                alt="hero-image"
                width={298}
                height={306}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

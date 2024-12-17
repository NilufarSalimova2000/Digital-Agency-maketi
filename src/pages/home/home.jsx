import React from "react";
import { Header } from "../../components/header";
import HeroBg from "../../assets/hero_bg.png";
import HeroImg from "../../assets/hero_img.svg";
import SectionImg from "../../assets/section_img.png"
import { ServiceIcon } from "../../assets/icons/service-icon";
import { ArrowIcon } from "../../assets/icons/arrow-icon";

export const Home = () => {
   return (
      <>
         <Header />
         <main>
            <section style={{ backgroundImage: `url(${HeroBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-[108px]">
               <div className="container">
                  <div className="flex items-center justify-center">
                     <div className="px-[30px] md:w-[380px] lg:w-[480px] md:px-[0]">
                        <h2 className="font-bold text-[16px] lg:text-[20px] leading-[155%] text-[#e87d0e] mb-[31px] lg:mb-[17px]">Digital Marketing</h2>
                        <h1 className="font-bold text-[34px] lg:text-[50px] leading-[155%] text-[#000] mb-[28px]">Work that we produce for our clients</h1>
                        <p className="font-medium text-[14px] leading-[200%] text-[#000] mb-[35px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <button className="font-medium text-[15px] text-[#fff] rounded-[40px] bg-[#e87d0e] py-[12px] px-[20px]">Get more details</button>
                     </div>
                     <div className="hidden md:block">
                        <img src={HeroImg} alt="imag" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="pt-[48px] lg:pt-[83px] pb-[95px]">
               <div className="container">
                  <h2 className="lg:w-[800px] lg:mx-auto font-semibold text-[16px] md:text-[25px] leading-[187%] text-[#222] mb-[72px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                  <div className="hidden md:block">
                     <h3 className="font-semibold text-[30px] leading-[187%] text-[#222] mb-[32px]">Lorem Ipsum</h3>
                     <p className="font-normal text-[16px] leading-[187%] text-[#525252] w-[545px] mb-[46px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
                  <div>
                     <img src={SectionImg} alt="imag" />
                  </div>
               </div>
            </section>

            <section className="mb-[107px]">
               <div className="container">
                  <h3 className="font-semibold text-[20px] md:text-[25px] lg:w-[826px] lg:mx-auto leading-[187%] text-[#222] text-center mb-[18px]">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="font-normal text-[12px] md:text-[16px] leading-[187%] text-[#525252] text-center mb-[106px] lg:w-[826px] lg:mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <ul className="flex flex-col gap-[65px] md:flex md:flex-row md:flex-wrap">
                     <li className="flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                     <li className="flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                     <li className="flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                     <li className="flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                     <li className="hidden lg:flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                     <li className="hidden lg:flex text-center flex-col items-center justify-center w-[220px] mx-auto">
                        <div className="mb-[30px]"><ServiceIcon /></div>
                        <h3 className="font-medium text-[16px] leading-[187%] text-[#000] mb-[24px]">Mobile Game Development</h3>
                        <div><ArrowIcon /></div>
                     </li>
                  </ul>
               </div>
            </section>

            <section className="py-[55px] md:py-[70px] bg-[#f5f5f5]">
               <div className="container">
                  <h3 className="font-semibold text-[24px] md:text-[30px] leading-[187%] text-[#222] mb-[32px]">Lorem Ipsum</h3>
                  <p className="font-normal text-[16px] leading-[187%] text-[#525252] mb-[33px] md:mb-[65px] w-[264px] md:w-[545px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <ul className="flex items-center justify-center sm:gap-[38px]">
                     <li style={{boxShadow: "0 4px 94px 0 rgba(0, 0, 0, 0.05)"}} className="w-[299px] lg:w-[378px] bg-[#fff] 
                     rounded-[20px] p-[30px]">
                        <p style={{background: "rgba(12, 190, 100, 0.15)"}} className="font-normal text-[14px] leading-[187%] text-[#0cbe64] rounded-[8px] py-[6px] px-[11px] w-[119px] mb-[18px]">Lorem ipsum</p>
                        <h3 className="font-semibold text-[20px] leading-[187%] text-[#000] mb-[14px]">Lorem ipsum</h3>
                        <p className="font-normal text-[12px] leading-[187%] text-[#525252] mb-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <a className="font-medium text-[14px] leading-[187%] text-[#dc7000] text-right block" href="#">Read more</a>
                     </li>
                     <li style={{boxShadow: "0 4px 94px 0 rgba(0, 0, 0, 0.05)"}} className="hidden md:block w-[299px] lg:w-[378px] bg-[#fff] 
                     rounded-[20px] p-[30px]">
                        <p style={{background: "rgba(12, 190, 100, 0.15)"}} className="font-normal text-[14px] leading-[187%] text-[#0cbe64] rounded-[8px] py-[6px] px-[11px] w-[119px] mb-[18px]">Lorem ipsum</p>
                        <h3 className="font-semibold text-[20px] leading-[187%] text-[#000] mb-[14px]">Lorem ipsum</h3>
                        <p className="font-normal text-[12px] leading-[187%] text-[#525252] mb-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <a className="font-medium text-[14px] leading-[187%] text-[#dc7000] text-right block" href="#">Read more</a>
                     </li>
                     <li style={{boxShadow: "0 4px 94px 0 rgba(0, 0, 0, 0.05)"}} className="hidden lg:block w-[299px] lg:w-[378px] bg-[#fff] 
                     rounded-[20px] p-[30px]">
                        <p style={{background: "rgba(12, 190, 100, 0.15)"}} className="font-normal text-[14px] leading-[187%] text-[#0cbe64] rounded-[8px] py-[6px] px-[11px] w-[119px] mb-[18px]">Lorem ipsum</p>
                        <h3 className="font-semibold text-[20px] leading-[187%] text-[#000] mb-[14px]">Lorem ipsum</h3>
                        <p className="font-normal text-[12px] leading-[187%] text-[#525252] mb-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <a className="font-medium text-[14px] leading-[187%] text-[#dc7000] text-right block" href="#">Read more</a>
                     </li>
                  </ul>
               </div>
            </section>
         </main>
      </>
   )
}
// Loading.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import wails from "./assets/wails.png";
import flutter from "./assets/flutter.png";
import react from "./assets/react.png";
import javascript from "./assets/javascript.png";
import java from "./assets/java.png";
import go from "./assets/go.png";
import vue from "./assets/vue.png";
import node from "./assets/node.png";
import docker from "./assets/docker.png";
import aws from "./assets/aws.png";
import kubernets from "./assets/kubernets.png";
import nirman from "./assets/nirman.svg";
import "./app.css";

function Loading() {
  const spansRef = useRef([]);
  const title = "Nir man TechLab";

  useEffect(() => {
    gsap.fromTo(
      spansRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 1.8,
        duration: 1,
        ease: "power2.out",
        stagger: 0.09,
      }
    );
  }, []);

useEffect(() => {
    const isMobile = window.innerWidth < 768; 

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.7 },
    });

    if (isMobile) {
    
      tl.fromTo(".outer", { opacity: 0, scale: 0 ,rotate:0}, { opacity: 1, scale: 1,rotate:360 }, 0)

        .fromTo(
          ".circle",
          { x: -150, y: -700, opacity: 0, scale: 10 },
          { x: 0, y: 0, opacity: 1, scale: 1 },
          "<0.1"
        )
        .fromTo(
          ".circle1",
          { x: 150, y: -700, opacity: 0, scale: 10 },
          { x: 0, y: 0, opacity: 1, scale: 1 },
          "<0.1"
        )
        .fromTo(
          ".circle2",
          { x: 100, y: 0, opacity: 0, scale: 10 },
          { x: 0, y: 0, opacity: 1, scale: 1 },
          "<0.1"
        )
        .fromTo(
          ".circle3",
          { y: 100, opacity: 0, scale: 10 },
          { y: 0, opacity: 1, scale: 1 },
          "<0.1"
        )
        .fromTo(
          ".circle4",
          { x: -100, opacity: 0, scale: 10 },
          { x: 0, opacity: 1, scale: 1 },
          "<0.1"
        )

        .fromTo(
          ".middle",
          { opacity: 0, scale: 0 ,rotate:0},
          { opacity: 1, scale: 1 ,rotate:-360},
          ">-0.2"
        )
        .fromTo(
          ".c1",
          { x: -100, y: 80, opacity: 0, scale: 10 },
          { x: 0, y: 0, opacity: 1, scale: 1 },
          "<0.1"
        )
        .fromTo(
          ".c2",
          { y: -100, scale: 10, opacity: 0 },
          { y: 0, scale: 1, opacity: 1 },
          "<0.1"
        )
        .fromTo(
          ".c3",
          { x: 100, y: 80, scale: 10, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1 },
          "<0.1"
        )

        .fromTo(
          ".inner",
          { opacity: 0, scale: 0,rotate:0 },
          { opacity: 1, scale: 1,rotate:360 },
          ">-0.2"
        )
        .fromTo(
          ".c4",
          { x: -60, y: -30, scale: 10, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1 },
          "<0.1"
        )
        .fromTo(
          ".c5",
          { y: 60, scale: 10, opacity: 0 },
          { y: 0, scale: 1, opacity: 1 },
          "<0.1"
        )
        .fromTo(
          ".c6",
          { x: 60, y: 30, scale: 10, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1 },
          "<0.1"
        )

        .fromTo(
          ".final",
          { opacity: 0, scale: 0.5,rotate:360 },
          { opacity: 1, scale: 1 ,rotate:360},
          "start"
        )

        .fromTo(
          "svg",
          { opacity: 0, rotateY: 360, scale: 0.5 },
          { opacity: 1, rotateY: 0, scale: 1 },
          "start"
        );
    } else {
      tl.fromTo(
        ".outer",
        { opacity: 0, scale: 0.5,rotate:360},
        { opacity: 1, scale: 1,rotate:0},
        0
      )

        .fromTo(
          ".circle",
          { x: -400, y: -440, opacity: 0, scale: 0.5 ,rotate:360},
          { x: 0, y: 0, opacity: 1, scale: 1 ,rotate:0},
          "<"
        )
        .fromTo(
          ".circle1",
          { x: 300, y: -240, opacity: 0, scale:0.5,rotate:-360 },
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )
        .fromTo(
          ".circle2",
          { x: 300, y: 0, opacity: 0, scale:0.5,rotate:360 },
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )
        .fromTo(
          ".circle3",
          { x: 0, y: 75, opacity: 0, scale: 0.5,rotate:-360 },
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )
        .fromTo(
          ".circle4",
          { x: -200, y: 0, opacity: 0, scale: 0.5 ,rotate:360},
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )

        .fromTo(
          ".middle",
          { opacity: 0, scale: 0.5,rotateY:360},
          { opacity: 1, scale: 1,rotateY:0 },
          ">-0.2"
        )
        .fromTo(
          ".c1",
          { x: -300, y: 100, opacity: 0, scale: 5 ,rotate:360},
          { x: 0, y: 0, opacity: 1, scale: 1 ,rotate:0},
          "<0.1"
        )
        .fromTo(
          ".c2",
          { x: 0, y: -200, opacity: 0, scale: 5 ,rotate:-360},
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )
        .fromTo(
          ".c3",
          { x: 100, y: -100, opacity: 0, scale: 5,rotate:360 },
          { x: 0, y: 0, opacity: 1, scale: 1,rotate:0 },
          "<0.1"
        )

        .fromTo(
          ".inner",
          { opacity: 0, scale: 0.5,rotateY:-360},
          { opacity: 1, scale: 1,rotateY:0},
          ">-0.2"
        )
        .fromTo(
          ".c4",
          { x: -100, y: -45, opacity: 0, rotate:360,scale:10 },
          { x: 0, y: 0, opacity: 1,rotate:0,scale:1},
          "<0.1"
        )
        .fromTo(
          ".c5",
          { x: 0, y: 100, opacity: 0,rotate:-360,scale:10 },
          { x: 0, y: 0, opacity: 1,rotate:0,scale:1 },
          "<0.1"
        )
        .fromTo(
          ".c6",
          { x: 100, y: 45, opacity: 0,rotate:360,scale:10},
          { x: 0, y: 0, opacity: 1,rotate:0,scale:1},
          "<0.1"
        )

        .fromTo(
          ".final",
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1 },
          "start"
        )
        .fromTo(
          "svg",
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 180,
            duration: 0.6,
            transformOrigin: "center center",
            ease: "linear",
          },
          "start"
        );
    }

    return () => tl.kill();
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Title */}
      <h1
        className="
    absolute 
    z-0 
    mx-[0.3em] 
    font-extrabold 
    select-none 
    tracking-wide 
    scale-y-200 
    whitespace-nowrap 
    text-ntechlab-title

    text-[10vw]       top-[80vw]         hidden       /* base (mobile) */
    sm:text-[8vw]     sm:top-[55vw]      sm:block      /* small devices */
    md:text-[6vw]     md:top-[40vw]      md:block      /* medium */
    lg:text-[11vw]     lg:top-[18vw]      lg:block      /* large */
    xl:text-[11vw]     xl:top-[13vw]      xl:block      /* extra large */
  "
      >
        {Array.from(title).map((char, index) => (
          <span
            key={index}
            ref={(el) => (spansRef.current[index] = el)}
            style={{ display: "inline-block", opacity: 0 }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Outer Circle */}
      <div className="outer aspect-square w-[85vw] max-w-[600px] relative flex justify-center items-center bg-[#FFF2F2] border border-[#B14B6940] rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] shadow-[#B14B6960]">
        {/* Outer Icons */}
        {[
          {
            className: "circle",
            src: wails,
            bg: "bg-[#FFDCDA]",
            style: {
              top: {
                base: "8%",
                sm: "7%",
                md: "6%",
                lg: "5%",
                xl: "5%",
              },
              left: {
                base: "8%",
                sm: "10%",
                md: "12%",
                lg: "12%",
                xl: "12%",
              },
            },
          },
          {
            className: "circle1",
            src: flutter,
            bg: "bg-[#D6F2FF]",
            style: {
              top: {
                base: "8%",
                sm: "7%",
                md: "6%",
                lg: "5%",
                xl: "5%",
              },
              right: {
                base: "8%",
                sm: "10%",
                md: "12%",
                lg: "12%",
                xl: "12%",
              },
            },
          },
          {
            className: "circle2",
            src: react,
            bg: "bg-[#E8FCFF]",
            style: {
              top: {
                base: "45%",
                sm: "43%",
                md: "42%",
                lg: "40%",
                xl: "39%",
              },
              right: {
                base: "-7%",
                sm: "-6%",
                md: "-5%",
                lg: "-4%",
                xl: "-4%",
              },
            },
          },
          {
            className: "circle3",
            src: javascript,
            bg: "bg-[#FFF7CB]",
            transform: "-translate-x-1/2",
            style: {
              bottom: {
                base: "-7%",
                sm: "-6%",
                md: "-5%",
                lg: "-4%",
                xl: "-4%",
              },
              left: {
                base: "50%",
                sm: "47%",
                md: "48%",
                lg: "49%",
                xl: "50%",
              },
            },
          },
          {
            className: "circle4",
            src: vue,
            bg: "bg-[#E0FFE2]",
            style: {
              top: {
                base: "45%",
                sm: "43%",
                md: "42%",
                lg: "40%",
                xl: "39%",
              },
              left: {
                base: "-7%",
                sm: "-6%",
                md: "-5%",
                lg: "-4%",
                xl: "-4%",
              },
            },
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`
        absolute 
        ${item.bg} 
        ${item.className} 
        w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
        rounded-full 
        flex justify-center items-center 
        border border-[#B14B69]
        ${item.transform || ""}
      `}
            style={{
              top: item.style?.top?.base,
              right: item.style?.right?.base,
              left: item.style?.left?.base,
              bottom: item.style?.bottom?.base,
              transform: item.transform,
            }}
          >
            <img
              src={item.src}
              alt={item.className}
              className="w-17 h-17 object-contain p-2"
            />
          </div>
        ))}

        {/* Middle Circle */}
        <div className="middle aspect-square w-[64vw] max-w-[450px] flex justify-center items-center bg-[#FFF2F2] border border-[#B14B6960] rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] shadow-[#B14B6960] relative">
          {/* Middle Icons */}
          {[
            {
              className: "c1",
              src: java,
              bg: "bg-[#FFDCDA]",
              style: {
                bottom: {
                  base: "5%",
                  sm: "2%",
                  md: "4%",
                  lg: "6%",
                  xl: "6%",
                },
                left: {
                  base: "5%",
                  sm: "6%",
                  md: "8%",
                  lg: "10%",
                  xl: "10%",
                },
              },
            },
            {
              className: "c2",
              src: go,
              bg: "bg-[#FFDCDA]",
              style: {
                top: {
                  base: "-7%",
                  sm: "-6%",
                  md: "-7%",
                  lg: "-8%",
                  xl: "-8%",
                },
                left: {
                  base: "40%",
                  sm: "33%",
                  md: "36%",
                  lg: "38%",
                  xl: "40%",
                },
              },
            },
            {
              className: "c3",
              src: node,
              bg: "bg-[#CAFFCC]",
              style: {
                bottom: {
                  base: "5%",
                  sm: "2%",
                  md: "4%",
                  lg: "6%",
                  xl: "6%",
                },
                right: {
                  base: "5%",
                  sm: "6%",
                  md: "8%",
                  lg: "10%",
                  xl: "10%",
                },
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`
      absolute 
      ${item.bg} 
      ${item.className} 
      w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
      rounded-full 
      flex justify-center items-center 
      border border-[#B14B69]
      ${item.transform || ""}
    `}
              style={{
                top: item.style?.top?.base,
                bottom: item.style?.bottom?.base,
                left: item.style?.left?.base,
                right: item.style?.right?.base,
                transform: item.transform,
              }}
            >
              <img
                src={item.src}
                alt={item.className}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}

          {/* Inner Circle */}
          <div className="inner aspect-square w-[40vw] max-w-[300px] bg-[#FFF2F2] border border-[#B14B6960] rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] shadow-[#B14B6960] flex items-center justify-center relative">
            {/* Inner Icons */}
            {[
              {
                className: "c4",
                src: docker,
                bg: "bg-[#E2F3FF]",
                style: {
                  top: {
                    base: "10%",
                    sm: "23%",
                    md: "22%",
                    lg: "20%",
                    xl: "18%",
                  },
                  left: {
                    base: "-8%",
                    sm: "-6%",
                    md: "-7%",
                    lg: "-8%",
                    xl: "-8%",
                  },
                },
              },
              {
                className: "c5",
                src: aws,
                bg: "bg-[#FFE4BB]",
                style: {
                  bottom: {
                    base: "-14%",
                    sm: "-6%",
                    md: "-9%",
                    lg: "-8%",
                    xl: "-8%",
                  },
                  left: {
                    base: "35%",
                  },
                  transform: "-translate-x-1/2",
                },
              },
              {
                className: "c6",
                src: kubernets,
                bg: "bg-[#D4EFFF]",
                style: {
                  top: {
                    base: "10%",
                    sm: "23%",
                    md: "22%",
                    lg: "20%",
                    xl: "20%",
                  },
                  right: {
                    base: "-8%",
                    sm: "-6%",
                    md: "-7%",
                    lg: "-8%",
                    xl: "-8%",
                  },
                },
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
      absolute 
      ${item.bg} 
      ${item.className} 
      w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
      rounded-full 
      flex justify-center items-center 
      border border-[#B14B69]
      ${item.transform || ""}
    `}
                style={{
                  top: item.style?.top?.base,
                  bottom: item.style?.bottom?.base,
                  left: item.style?.left?.base,
                  right: item.style?.right?.base,
                  transform: item.transform,
                }}
              >
                <img
                  src={item.src}
                  alt={item.className}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}

            {/* Final Center SVG */}
            <div className="final w-[20vw] max-w-[150px] aspect-square bg-[#FFE8E8] border border-[#B14B6990] rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] shadow-[#B14B6960] flex items-center justify-center">
              <svg
                  viewBox="0 0 198 180"
                  fill="none"
                  xmlns={nirman}
                  className="w-9 h-9 lg:w-16 lg:h-16"
                >
                  <path
                    d="M128.572 98.5705L0.000175987 179.999L0.000183105 17.1415L128.572 98.5705Z"
                    fill="#B14B69"
                  ></path>
                  <path
                    d="M85.7149 64.286L197.144 128.572L197.144 4.87072e-06L85.7149 64.286Z"
                    fill="#B14B69"
                  ></path>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;

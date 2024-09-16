import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechList = ({ items }) => {
  const component = useRef(null);

  useEffect(() => {
    let ctx;
    if (component.current) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            pin: true,
            start: "top bottom",
            end: "bottom top",
            scrub: 7,
          },
        });

        tl.fromTo(
          ".tech-row",
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(600, 400)
                : gsap.utils.random(-600, -400);
            },
          },
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(-600, -400)
                : gsap.utils.random(600, 400);
            },
            ease: "power1.inOut",
          }
        );
      }, component);
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      <div className="container mx-auto py-8">
        {items.map(({ tech_color, tech_name }, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ""}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className="tech-item text-3xl font-extrabold uppercase tracking-tighter"
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechList;

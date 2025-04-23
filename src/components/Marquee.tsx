import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type MarqueeProps = {
  scroller: HTMLElement;
};
const Marquee: Component<MarqueeProps> = () => {
  let section2Ref!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref,
          start: "0% 0%",
          end: "120% 0%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        ".images .right",
        {
          marginTop: "0",

          duration: 1,
        },
        0
      );
      tl.to(
        ".images .left",
        {
          marginTop: "150%",
          duration: 1,
        },
        0
      );
    });
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
  });

  return (
    <div class="container wrapper">
      <div class="section_1"></div>
      <div class="section_2" ref={section2Ref}>
        <div class="cont-flex">
          <div class="content">
            <h1>Photography art</h1>
            <p>
              Photography is the art, application, and practice of creating
              images by recording light, either electronically by means of an
              image sensor, or chemically by means of a light-sensitive material
              such as photographic film.
            </p>
          </div>
          <div class="images">
            <div class="left">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
            <div class="right">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_3"></div>
    </div>
  );
};
export default Marquee;

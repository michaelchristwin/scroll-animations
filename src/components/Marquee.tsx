import { Component, For, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollMarqueeProps = {
  scroller: HTMLElement;
};

const Marquee: Component<ScrollMarqueeProps> = (props) => {
  let section2Ref!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: props.scroller,
          trigger: section2Ref,
          invalidateOnRefresh: true,
          start: "0% 0%",
          end: "120% 0%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".images .right", { y: "-50%", ease: "none" }, 0);
      tl.to(".images .left", { y: "50%", ease: "none" }, 0);
    });
    ScrollTrigger.normalizeScroll();
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
  });

  return (
    <section class="w-full p-5">
      <div
        class="w-full sm:h-[100vh] h-fit overflow-hidden"
        ref={(el) => (section2Ref = el)}
      >
        <div class="flex items-center h-full w-full justify-between">
          <div class="w-[45%] space-y-2.5">
            <div>
              <h2 class="text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]">
                The Metering Hardware
              </h2>
              <p class="text-center text-base sm:text-lg font-medium mt-2">
                Maxwell 1.0.7
              </p>
            </div>
            <div class="w-full grid grid-cols-1 gap-7 h-fit">
              <div class="w-full space-y-3">
                <p>
                  Designed specifically to bridge the gap between distributed
                  energy resources (such as rooftop solar assets) and the web3.0
                  economy. Its data is crucial for accurate tracking,
                  verification, and billing of the energy transactions within
                  the protocol.
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="w-full space-y-3">
                  <h3 class="text-lg sm:text-xl font-bold">Security</h3>
                  <p>
                    Utilizes ED25519 elliptical curve digital signatures to
                    ensure data integrity. Keys are stored on a tamper-resistant
                    crypto chip that self-destructs if accessed externally.
                    These security measures prevent unauthorized access and
                    tampering, guaranteeing accurate and trustworthy data.
                  </p>
                </div>
                <div class="w-full space-y-3">
                  <h3 class="text-lg sm:text-xl font-bold">Network</h3>
                  <p>
                    Operates wirelessly via LoRaWAN (LongFi), a long-range,
                    low-power protocol designed for IoT with range up to 3 km.
                    Ideal for remote installations where traditional wireless
                    communication is limited or costly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="images h-[100vh] flex items-center w-[45%] justify-between"
            style={{
              mask: "linear-gradient(transparent, white 10%, white 85%, transparent)",
            }}
            id="images"
          >
            <div class="left flex flex-col m-[2rem] will-change-transform gap-[2rem]">
              <For each={[1, 2, 3, 4, 5]}>
                {(item) => (
                  <div
                    class={`aspect-square w-[250px] h-[250px] flex justify-center items-center bg-amber-700 text-white`}
                  >
                    {item}
                  </div>
                )}
              </For>
            </div>
            {/*Right*/}
            <div class="right flex flex-col m-[2rem] will-change-transform gap-[2rem] mt-[40rem]">
              <For each={[1, 2, 3, 4, 5].reverse()}>
                {(item) => (
                  <div
                    class={`aspect-square w-[250px] h-[250px] flex justify-center items-center bg-amber-700 text-white`}
                  >
                    {item}
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Marquee;

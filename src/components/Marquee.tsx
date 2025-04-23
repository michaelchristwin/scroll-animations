import { Component, For, onCleanup, onMount } from "solid-js";
import { createTimeline, Timeline, onScroll } from "animejs";
type MarqueeProps = {
  scroller: HTMLElement;
};
const Marquee: Component<MarqueeProps> = (props) => {
  let section2Ref!: HTMLDivElement;
  let leftCol!: HTMLDivElement;
  let rightCol!: HTMLDivElement;
  let stickyContainer!: HTMLDivElement;
  let timeline: Timeline;

  onMount(() => {
    timeline = createTimeline({
      defaults: {
        ease: "linear",
        duration: 500,
        composition: "blend",
      },
      autoplay: onScroll({
        target: stickyContainer,
        container: props.scroller,
        enter: "top top",
        leave: "bottom bottom",
        sync: 0.5,
      }),
    });
    timeline
      .add(leftCol, {
        translateY: ["0%", "-50%"],
        duration: 1000,
      })
      .add(
        rightCol,
        {
          translateY: ["0%", "50%"],
          duration: 1000,
        },
        0
      );
    timeline.init();
  });

  onCleanup(() => {
    timeline.reverse();
  });

  return (
    <>
      <section class="spacer"></section>
      <section class="w-full p-5 sticky-container" ref={stickyContainer}>
        <div
          class="w-full sticky-content overflow-hidden"
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
                    energy resources (such as rooftop solar assets) and the
                    web3.0 economy. Its data is crucial for accurate tracking,
                    verification, and billing of the energy transactions within
                    the protocol.
                  </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div class="w-full space-y-3">
                    <h3 class="text-lg sm:text-xl font-bold">Security</h3>
                    <p>
                      Utilizes ED25519 elliptical curve digital signatures to
                      ensure data integrity. Keys are stored on a
                      tamper-resistant crypto chip that self-destructs if
                      accessed externally. These security measures prevent
                      unauthorized access and tampering, guaranteeing accurate
                      and trustworthy data.
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
              <div
                class="left flex flex-col m-[2rem] will-change-transform gap-[2rem]"
                ref={leftCol}
              >
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
              <div
                class="right flex flex-col m-[2rem] will-change-transform gap-[2rem] mt-[40rem]"
                ref={rightCol}
              >
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
      <section class="spacer"></section>
    </>
  );
};
export default Marquee;

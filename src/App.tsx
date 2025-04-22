import { onCleanup, onMount } from "solid-js";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Marquee from "./components/Marquee";

export default function App() {
  let lenis: Lenis;
  let scrollerRef!: HTMLElement;

  onMount(() => {
    lenis = new Lenis({
      autoRaf: true,
      wrapper: scrollerRef,
    });
    // lenis.on("scroll", ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    // });
    // gsap.ticker.lagSmoothing(0);
  });

  onCleanup(() => lenis.destroy());

  return (
    <main class={`h-[100vh] overflow-y-scroll`} ref={scrollerRef}>
      {/* <Hero />
      <HorizontalGallery /> */}
      <Marquee scroller={scrollerRef} />
    </main>
  );
}

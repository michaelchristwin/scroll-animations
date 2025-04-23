import { onMount } from "solid-js";
import Marquee from "./components/Marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function App() {
  let scrollerRef!: HTMLElement;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: scrollerRef,
    });
  });
  return (
    <main class={`h-[100vh] overflow-y-scroll`} ref={scrollerRef}>
      <Marquee scroller={scrollerRef} />
    </main>
  );
}

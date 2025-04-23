import Marquee from "./components/Marquee";

export default function App() {
  let scrollerRef!: HTMLElement;

  return (
    <main class={`h-[100vh] overflow-y-scroll`} ref={scrollerRef}>
      {/* <Hero />
      <HorizontalGallery /> */}
      <Marquee scroller={scrollerRef} />
      {/* <Sticky /> */}
    </main>
  );
}

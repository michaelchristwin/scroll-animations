import { onCleanup, onMount } from "solid-js";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Hero from "./components/Hero";
import HorizontalGallery from "./components/HorizontalGallery";

export default function App() {
  let lenis: Lenis;

  onMount(() => {
    lenis = new Lenis({
      autoRaf: true,
    });
  });

  onCleanup(() => lenis.destroy());

  return (
    <main class={``}>
      <Hero />
      <HorizontalGallery />
    </main>
  );
}

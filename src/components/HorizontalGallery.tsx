import { For, onCleanup, onMount } from "solid-js";

export default function HorizontalGallery() {
  let hScroll!: HTMLElement;
  let hScrollContent!: HTMLDivElement;

  const updateScroll = () => {
    const scrollY = window.scrollY;
    const offsetTop = hScroll.offsetTop;
    const height = hScroll.offsetHeight;
    const scrollInside = scrollY - offsetTop;

    // Total width of the content inside hScrollContent
    const contentWidth = hScrollContent.offsetWidth;

    // Ensure the content scrolls horizontally based on the total width of the content
    const maxScroll = contentWidth - window.innerWidth; // Max horizontal scroll distance

    if (scrollY >= offsetTop && scrollY <= offsetTop + height) {
      // Apply translation based on the scroll position, but limit to max scroll distance
      const translateX = (scrollInside / height) * maxScroll;
      hScrollContent.style.transform = `translateX(-${translateX}px)`;
    }
  };

  onMount(() => {
    window.addEventListener("scroll", updateScroll);
    updateScroll();
  });
  onCleanup(() => {
    window.removeEventListener("scroll", updateScroll);
  });

  return (
    <section ref={hScroll} class="relative h-[400vh] bg-neutral-100">
      <div class="sticky top-0 h-screen flex items-center border border-red-500 overflow-x-hidden">
        <div
          ref={hScrollContent}
          class="flex gap-4 transition-transform duration-200 will-change-transform"
        >
          <For each={Array.from({ length: 10 })}>
            {(_, i) => (
              <div
                class="w-[400px] h-[300px] bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg"
                style={{ transform: `scale(${1 - i() * 0.05})` }}
              >
                Card {i() + 1}
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

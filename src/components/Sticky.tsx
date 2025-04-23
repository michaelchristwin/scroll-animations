import { Component } from "solid-js";

const Sticky: Component = () => {
  return (
    <>
      <section class="spacer"></section>
      <section class="sticky-container">
        <div class="sticky-content">
          <div class={`w-[45%]`}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              delectus culpa nobis eius provident autem ut quo nostrum
              dignissimos quia amet ipsam quam facere repellendus, saepe fugiat,
              minus porro numquam?
            </p>
          </div>
          <div class={`grid grid-cols-2 gap-4`}>
            <div class="mt-[20rem]">
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
            </div>
            <div>
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
              <div class={`w-[250px] h-[300px] shadow-2xl`}></div>
            </div>
          </div>
        </div>
      </section>
      <section class="spacer"></section>
    </>
  );
};
export default Sticky;

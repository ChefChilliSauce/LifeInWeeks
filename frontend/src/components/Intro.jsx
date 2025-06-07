import React from "react";

function Intro(props) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8 mb-8">
      <h1 className="text-2xl font-bold mb-2 tracking-tight select-none text-gray-900 ">
        Mapping My Life, Week by Week
      </h1>
      <p className="text-lg text-gray-700 ">
        This page is my personal timeline—every square you see below stands for
        one week of my life since {props.date}. The green squares show the weeks
        I’ve already lived; the gray ones represent the future that’s still open
        to me. Key milestones—moments that shaped my journey—are highlighted for
        quick reflection. It’s a simple way to zoom out, see how far I’ve come,
        and remind myself just how many stories, memories, and opportunities fit
        into a lifetime. <br />
        <b>
          On touchscreens, press and hold the highlighted squares to see more
          details about those milestones.
        </b>
        <br />
        Inspired by Tim Urban’s{" "}
        <a
          href="https://waitbutwhy.com/2014/05/life-weeks.html"
          className="text-[#4ade80] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Life in Weeks
        </a>{" "}
        concept.
      </p>
    </section>
  );
}

export default Intro;

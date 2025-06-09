import React from "react";

function Intro(props) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8 mb-8 select-none">
      <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 ">
        Your Life, One Week at a Time
      </h1>
      <p className="text-lg text-gray-700 ">
        This is your personal life map, starting on {props.date}—the day your
        story began. Every square you see below marks a week you’ve lived, and
        together they paint the full picture of your journey so far. Green
        squares highlight the weeks you’ve experienced, while gray ones await
        the stories you’ll write in the future. Special milestones you’ve chosen
        are illuminated along the way, capturing your biggest wins, lessons, and
        memories. Pause to reflect, zoom out for perspective, and let this
        timeline remind you just how much you’ve accomplished and how much
        possibility lies ahead. Your life is a collection of moments—this page
        makes every one visible. <br />
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

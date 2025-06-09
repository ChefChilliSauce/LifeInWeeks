import React from "react";

function PublicIntro(props) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8 mb-8 select-none">
      <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 ">
        A Journey in Weeks: {props.heading}’s Life at a Glance
      </h1>
      <p className="text-lg text-gray-700 ">
        Welcome to {props.heading}’s timeline—an unfolding story that began on{" "}
        {props.date}. Each square below marks a single week in {props.heading}’s
        life: the green ones represent the chapters already written, while the
        gray ones are weeks yet to come. Significant milestones—birthdays,
        accomplishments, and memorable moments—stand out, making it easy to
        reflect on the events that have shaped this journey so far. This visual
        map invites you to step back, see the passage of time in vivid color,
        and appreciate the rich tapestry of stories, challenges, and victories
        that make up a life. Whether you’re here to be inspired, reminisce, or
        simply curious, take a moment to scroll through and celebrate the
        journey of {props.heading}—week by week, memory by memory. <br />
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

export default PublicIntro;

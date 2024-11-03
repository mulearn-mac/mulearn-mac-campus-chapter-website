import React from "react";

function Section6() {
  return (
    <div>
      {" "}
      <p className="Title text-orange fs-3 pt-4">Validation.</p>
      <p className="description">
        Once you submit a task, the discord moderators checks your task and
        gives you karma points. The task you submitted must follow all the
        instructions that are in the task and{" "}
        <strong className="">
          you <span className="text-danger">must not copy</span> the submission
          of others!!
        </strong>{" "}
        If you are caught red handed for copying{" "}
        <strong className="">
          then you'll <span className="text-danger">loss</span> a considerable
          amount of <span className="text-danger">karma points</span>
        </strong>{" "}
        based on the the task. If you have followed all the instructions and
        have completed the task correctly, then you'll be awarded the karma
        points assosciated with that task. If there are some mistakes, then your
        task will be rejected. The reason for rejection will also be specified.{" "}
        <strong className="mark">
          You <span className="text-success">will not</span> lose any karma
          points even if your submission is rejected. You{" "}
          <span className="text-success">can resubmit</span> it after correcting
          the problems anytime.
        </strong>
      </p>
      <hr className="text-center w-50 mx-auto" />
    </div>
  );
}

export default Section6;

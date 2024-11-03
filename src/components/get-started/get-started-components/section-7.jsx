function Section7() {
  return (
    <div>
      <p className="Title text-orange fs-3 pt-4">
        Flags Assosciated with validation
      </p>

      <p className="description">
        After the moderator checks a task, they'll put (puts a reaction to that
        post) some flag to your submission. There are 3 flags.
        <p className="sub-title  fw-500 ">1. The Checkered Flag</p>
        <span className="d-block display-1 text-center">🏁</span>
        <br />
        The checkered flag means,{" "}
        <strong className="text-success">your task has been approved </strong>
        and you'll recieve karma points after some time.
        <br />
        <br />
        <p className="sub-title  fw-500 ">2. The Green Flag (Green Tick)</p>
        <span className="d-block display-1 text-center">✅</span>
        <br />
        The Green Flag means,{" "}
        <strong className="text-success">
          you have been awarded karma points
        </strong>{" "}
        for that task submission.
        <br />
        <br />
        <p className="sub-title  fw-500 "> 3. The Red Flag </p>
        <span className="d-block display-1 text-center">🚩</span>
        The Red flag means your task has been rejected. You must resubmit the
        task after fixing the problem.
      </p>

      <p className="description">
        These are the 3 flags that you'll be seeing assosciated with your
        submissions.
      </p>

      <hr className="text-center w-50 mx-auto" />
    </div>
  );
}

export default Section7;

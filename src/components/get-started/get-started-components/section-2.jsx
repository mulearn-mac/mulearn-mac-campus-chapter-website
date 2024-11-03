function Section2() {
  return (
    <div>
      <p className="Title text-orange fs-3 pt-4">The Gamification</p>

      <p className="description">
        Students engage in the community mainly by doing tasks.{" "}
        <strong className="">
          Every task has certain karma points assosciated with it.
        </strong>{" "}
        Just after you join the community you get access to 3 channels, which
        are: <code>lvl-1-info</code>, <code>lvl-2-info</code> &{" "}
        <code>lvl-3-info</code>. These channels conatins certain tasks ehich are
        related to certain general skills that everyone should have. Hence these
        tasks are called <span className="mark">General Enablement Tasks</span>.
        Every tasks has a unique <span className="mark">hashtag</span> (a code
        word that starts with #)assosciated with it. The hashtags of General
        Enablement Tasks starts with <span className="fw-700">#ge-</span>.
      </p>
      <hr className="text-center w-50 mx-auto" />
    </div>
  );
}

export default Section2;

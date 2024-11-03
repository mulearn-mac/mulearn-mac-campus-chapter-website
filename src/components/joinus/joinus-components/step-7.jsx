import { Link } from "react-router-dom";

function Step7() {
  return (
    <div>
      <h3 className="text-center p-4 bg-secondary text-light rounded">
        7. muLearn: A Guide for Beginners.
      </h3>
      <p>
        <span className="h4">Welcome to muLearn</span>, The Place where ME and
        YOU are gonna learn and upskill together!!
      </p>
      <p>
        After Completing all the above steps, you can{" "}
        <Link to="/joinus/guide">Get Started</Link> with μLearn here
      </p>
    </div>
  );
}

export default Step7;

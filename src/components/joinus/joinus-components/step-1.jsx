import img1 from "../../../assets/img/joinus/1.jpg";
import img2 from "../../../assets/img/joinus/2.jpg";
import img3 from "../../../assets/img/joinus/3.jpg";

function Step1() {
  return (
    <div className="description">
      <h3 className="text-center p-4 bg-secondary text-light rounded">
        1. Register for a muLearn account and obtain your muId
      </h3>
      <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal">
        As an official community, mulearn has a well defined system and every
        mulearn member has his/her own profile and a dashboard. So the first
        step is to register for a muLearn account/profile and get your muId
        which serves as your user ID.
      </p>

      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">1.1</span>
          <span className="stepSub h6">
            Goto <a href="https://app.mulearn.org/register">app.muLearn.org</a>
          </span>{" "}
          and you&apos;ll see a registration form as below.
        </p>
        <img
          src={img1}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-success m-auto"
        />
        <p className=" px-2 py-3 tips alert alert-info h6 my-2 py-2  font-weight-normal ">
          Fill the details there and continue. No need to select any
          communities, as you are not part of any communities. Also there is no
          need to fill refferal muId either.{" "}
          <strong>Now continue to next step</strong>.
        </p>
      </div>

      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">1.2</span>
          <span className="stepSub h6">
            In the next step you must choose a suitable option. In your case it
            should be <strong>I'm currently Studying</strong>.
          </span>
        </p>
        <img
          src={img2}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />
        <p className="px-2 py-3 stepItem">
          Now <strong>Continue to next step</strong>.
        </p>
      </div>
      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">1.3</span>
          <span className="stepSub h6">
            This step is to collect your college details. Choose{" "}
            <strong>Mar Augusthinose College, Ramapuram</strong> as your college
            and then select your department and year of passing out.
          </span>
        </p>
        <img
          src={img3}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />
        <p className="px-2 py-3 stepItem">
          Now <strong>Submit the registration form</strong>
        </p>
        .
        <hr />
        <div className="small alert alert-success font-weight-lighter">
          <p>
            Congratulations!{" "}
            <span className="font-weight-bolder">
              You've successfully created your muLearn profile.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step1;

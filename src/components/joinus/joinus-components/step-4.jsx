import img10 from "../../../assets/img/joinus/10.jpg";
import img11 from "../../../assets/img/joinus/11.jpg";
import img12 from "../../../assets/img/joinus/12.jpg";
import img13 from "../../../assets/img/joinus/13.jpg";
import img14 from "../../../assets/img/joinus/14.jpg";

function Step4() {
  function noBro() {
    document.getElementById("noBro").classList += "d-block";
  }

  return (
    <div className="Description">
      <h3 className="text-center p-4 bg-secondary text-light rounded">
        4. Connect your muId with your discord account.
      </h3>
      <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal ">
        You now have a muLearn account and a Discord account. But currently they
        are disconnected. We need to connect them inorder to see your
        performance, points etc... in your muLearn profile. So let's do that.
      </p>

      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">4.1</span>
          <span className="stepSub h6">
            Goto personal messages section in your Discord app. There you can
            see a bot named <mark> AARONCHETTAN</mark>. Open that chat. You
            should've already got a message ending with a connect muid option.
            Click on that connect muid. When you click on that you'll see an
            input box popping up.
          </span>
        </p>

        <a
          className="btn  fw-600 py-0 my-3 text-center d-block m-auto link-danger"
          onClick={noBro}
        >
          Click here if you cannot find aaronchettan or his message??
        </a>

        <div id="noBro" className="d-none">
          <p>
            If you cannot find aaronchettan in your personal chat nor his
            message do the following:
            <p>
              <span>
                Go to <code>#self-introduction</code> channel and sent{" "}
                <code>#ge-self-intro</code> and you'll instantly get a message
                from aaronchettan. If you are still not getting it, feel free to
                connect with our core team members.
              </span>
            </p>
          </p>
        </div>

        <figure className="figure">
          <img
            className="exImg img-fluid img-thumbnail figure-img"
            src={img10}
            alt="muLearn registration form image"
          />
          <figcaption className="figure-caption text-center">
            Aaronchettan in personal messages section.
          </figcaption>
        </figure>

        <hr />

        <figure className="figure">
          <img
            className="exImg img-fluid img-thumbnail figure-img"
            src={img11}
            alt="muLearn registration form image"
          />
          <figcaption className="figure-caption text-center">
            Connect muid option in aaronchettans chat.
          </figcaption>
        </figure>
      </div>
      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">4.2</span>
          <span className="stepSub h6">
            Now goto your{" "}
            <a href="https://app.mulearn.org/dashboard">muLearn Dashboard</a>{" "}
            and copy your muId from there. Every muId's ends with{" "}
            <strong>@mulearn</strong>.
          </span>
        </p>
        <img
          src={img12}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />
      </div>
      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">4.3</span>
          <span className="stepSub h6">
            Now return to Discord and paste your muId in the popup you got when
            you clicked on connect muId option in the message from Aaronchettan.
          </span>
        </p>
        <img
          src={img13}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />
        <p className="my-3">
          Then click submit and you'll get a confirmation message.
        </p>
        <img
          src={img14}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />

        <hr />
        <div className="small alert alert-success font-weight-lighter h4 my-2">
          <p>
            Congratulations!{" "}
            <span className="font-weight-bolder">
              You've successfully created your muLearn profile, Joined muLearn
              discord server and finally you've connected your muId with your
              Discord account!! It's time for you to start doing some tasks and
              get yourself familiarise with the server. For now lets do the
              first task <code>self-introduction</code>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step4;

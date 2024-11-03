import img4 from "../../../assets/img/joinus/4.jpg";
import img5 from "../../../assets/img/joinus/5.jpg";
import img6 from "../../../assets/img/joinus/6.jpg";
import img7 from "../../../assets/img/joinus/7.jpg";

function Step2() {
  return (
    <div className="description">
      <h3 className="text-center p-4 bg-secondary text-light rounded">
        2. Create a Discord account and Join muLearn Discord server.
      </h3>
      <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal">
        muLearn works inside Discord. There we have our own server and a bunch
        of channels. So to become part of muLearn you must first Create an
        account in discord and join muLearn Discord server.
      </p>

      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">2.1</span>
          <span className="stepSub h6">
            Goto Play store and download{" "}
            <a href="https://play.google.com/store/apps/details?id=com.discord&pcampaignid=web_share">
              Discord app{" "}
            </a>
            . If you are using other devices You may{" "}
            <a href="https://discord.com/download">go here.</a>
          </span>
        </p>
        <img
          src={img5}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-danger m-auto"
        />
      </div>
      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">2.2</span>
          <span className="stepSub h6">
            After downloading Discord Create an account in it and login to the
            app.
          </span>
        </p>
        <img
          src={img6}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-success m-auto"
        />
      </div>
      <hr />
      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">2.3</span>
          <span className="stepSub h6">
            Now Goto your <a href="https://app.mulearn.org/">muLearn profile</a>{" "}
            and click on <strong>Connect Discord</strong> option there.{" "}
          </span>
        </p>
        <img
          src={img4}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-success m-auto"
        />
        <p className="px-2 py-3 tips alert alert-info h6 my-2 py-2  font-weight-normal">
          You'll be redirected to Discord Server of muLearn.
        </p>
      </div>
      <hr />

      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">2.4</span>
          <span className="stepSub h6">
            Click on <strong>Accept Invite</strong> option and join muLearn
            Server.
          </span>
        </p>
        <img
          src={img7}
          alt="muLearn registration form image"
          className="exImg img-fluid img-thumbnail alert-success m-auto"
        />

        <hr />
        <p className="small px-2 py-3 alert alert-success  font-weight-lighter  my-2">
          Congratulations!{" "}
          <strong> You've successfully joined muLearn Discord Server</strong>.
        </p>
      </div>
    </div>
  );
}

export default Step2;

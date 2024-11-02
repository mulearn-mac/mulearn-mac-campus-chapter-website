import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/joinus.css";

import img1 from "../../assets/img/joinus/1.jpg";
import img2 from "../../assets/img/joinus/2.jpg";
import img3 from "../../assets/img/joinus/3.jpg";
import img4 from "../../assets/img/joinus/4.jpg";
import img5 from "../../assets/img/joinus/5.jpg";
import img6 from "../../assets/img/joinus/6.jpg";
import img7 from "../../assets/img/joinus/7.jpg";
import img9 from "../../assets/img/joinus/9.jpg";
import img10 from "../../assets/img/joinus/10.jpg";
import img11 from "../../assets/img/joinus/11.jpg";
import img12 from "../../assets/img/joinus/12.jpg";
import img13 from "../../assets/img/joinus/13.jpg";
import img14 from "../../assets/img/joinus/14.jpg";

import imgWhatsapp from "../../assets/img/social/whatsapp.svg";

function JoinUsTabs({ activeTab }) {
  function noBro() {
    document.getElementById("noBro").classList += "d-block";
  }

  function requestToJoin() {
    document.getElementById("requestDiv").innerHTML = `
        <a class="btn btn-success" href="https://api.whatsapp.com/send?phone=919495806285&text=Hello%2C%0AI%20want%20to%20join%20muLearn%20whatsapp%20group.%20"><img src="${imgWhatsapp}" alt="" class="whatsapp">  Christo John</a>

        <a class="btn btn-danger" href="https://api.whatsapp.com/send?phone=919188785036&text=Hello%2C%0AI%20want%20to%20join%20muLearn%20whatsapp%20group.%20"> <img src="${imgWhatsapp}" alt="" class="whatsapp"> Binnet Binoy</a>
    `;
  }

  return (
    <div className="en-Oxanium">
      <div className=" hero text-center mb-5 ">
        <h1 className="display-1 pt-5">Join Us</h1>
        <p>And Make Yourself a better you</p>
        <p className="px-3 px-md-4 overflow-auto no-scrollbar small text-left small">
          If you are still not in muLearn whatsapp group of MAC Ramapuram
          <span
            className="link-primary h5 rqBt d-block"
            onClick={requestToJoin}
          >
            Request To Join
          </span>
        </p>

        <div className="pt-3" id="requestDiv"></div>
      </div>

      <hr />
      <p className="h2 text-center text-secondary py-2 ">How to Join Us ??</p>

      <Tab.Container activeKey={activeTab}>
        <Tab.Content>
          <Tab.Pane className="px-3" eventKey="step-1">
            <div className="description">
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Register for a muLearn account and obtain your muId
              </h3>
              <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal">
                As an official community, mulearn has a well defined system and
                every mulearn member has his/her own profile and a dashboard. So
                the first step is to register for a muLearn account/profile and
                get your muId which serves as your user ID.
              </p>

              <div>
                <p className="px-2 py-3 stepItem h4 Sub">
                  <span className="stepNumberSub">1.1</span>
                  <span className="stepSub h6">
                    Goto{" "}
                    <a href="https://app.mulearn.org/register">
                      app.muLearn.org
                    </a>
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
                  communities, as you are not part of any communities. Also
                  there is no need to fill refferal muId either.{" "}
                  <strong>Now continue to next step</strong>.
                </p>
              </div>

              <hr />
              <div>
                <p className="px-2 py-3 stepItem h4 Sub">
                  <span className="stepNumberSub">1.2</span>
                  <span className="stepSub h6">
                    In the next step you must choose a suitable option. In your
                    case it should be <strong>I'm currently Studying</strong>.
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
                    <strong>Mar Augusthinose College, Ramapuram</strong> as your
                    college and then select your department and year of passing
                    out.
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
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-2">
            <div className="description">
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Create a Discord account and Join muLearn Discord server.
              </h3>
              <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal">
                muLearn works inside Discord. There we have our own server and a
                bunch of channels. So to become part of muLearn you must first
                Create an account in discord and join muLearn Discord server.
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
                    After downloading Discord Create an account in it and login
                    to the app.
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
                    Now Goto your{" "}
                    <a href="https://app.mulearn.org/">muLearn profile</a> and
                    click on <strong>Connect Discord</strong> option there.{" "}
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
                    Click on <strong>Accept Invite</strong> option and join
                    muLearn Server.
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
                  <strong>
                    {" "}
                    You've successfully joined muLearn Discord Server
                  </strong>
                  .
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-3">
            <div className="description">
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Accept rules and conditions.
              </h3>
              <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal ">
                After joining muLearn you must accept our rules and conditions.
                muLearn's Discord Server is <strong>super strict</strong> with
                our rules. If we find out anyone violating any of our rules,
                they will be kicked out of the community for sure!
              </p>

              <div>
                <p className="px-2 py-3 stepItem h4 Sub">
                  <span className="stepNumberSub">3.1</span>
                  <span className="stepSub h6">
                    {" "}
                    In a couple of minutes after joining the server you'll get a
                    pop-up like the screenshot below. Only after accepting these
                    rules can you remain in the community. You can also find
                    these same rules in the <code> rules-and-readme</code>{" "}
                    channel of our server.
                  </span>
                </p>
                <div className="acceptRulesImg no-scrollbar">
                  <img
                    className="w-100"
                    src={img9}
                    alt="muLearn registration form image"
                  />
                </div>
                <p className="alert alert-success my-2">
                  After that continue to next step.
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-4">
            <div className="Description">
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Connect your muId with your discord account.
              </h3>
              <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal ">
                You now have a muLearn account and a Discord account. But
                currently they are disconnected. We need to connect them inorder
                to see your performance, points etc... in your muLearn profile.
                So let's do that.
              </p>

              <div>
                <p className="px-2 py-3 stepItem h4 Sub">
                  <span className="stepNumberSub">4.1</span>
                  <span className="stepSub h6">
                    Goto personal messages section in your Discord app. There
                    you can see a bot named <mark> AARONCHETTAN</mark>. Open
                    that chat. You should've already got a message ending with a
                    connect muid option. Click on that connect muid. When you
                    click on that you'll see an input box popping up.
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
                    If you cannot find aaronchettan in your personal chat nor
                    his message do the following:
                    <p>
                      <span>
                        Go to <code>#self-introduction</code> channel and sent{" "}
                        <code>#ge-self-intro</code> and you'll instantly get a
                        message from aaronchettan. If you are still not getting
                        it, feel free to connect with our core team members.
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
                    <a href="https://app.mulearn.org/dashboard">
                      muLearn Dashboard
                    </a>{" "}
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
                    Now return to Discord and paste your muId in the popup you
                    got when you clicked on connect muId option in the message
                    from Aaronchettan.
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
                      You've successfully created your muLearn profile, Joined
                      muLearn discord server and finally you've connected your
                      muId with your Discord account!! It's time for you to
                      start doing some tasks and get yourself familiarise with
                      the server. For now lets do the first task{" "}
                      <code>self-introduction</code>
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-5">
            <div>
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Introduce yourself to the community.
              </h3>
              <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal ">
                Now it's time for you to introduce youself to the community.{" "}
                <strong>
                  (Before that make sure your discord profile picture is updated
                  to your own photo. Your face must be clear in your profile
                  picture.)
                </strong>
                <p className="mt-5">After changing your profile picture,</p>{" "}
                goto <code>#self-introduction </code> channel and sent a message
                introducing yourself including your <mark>name</mark>,{" "}
                <mark>college</mark>, <mark>course</mark> and which{" "}
                <mark>year</mark> you are (eg: 2nd year BCA), and your{" "}
                <mark>interests</mark>. Do not forget to include{" "}
                <code>#ge-self-intro </code> hashtag.
              </p>
              <span>example message:</span> <br />
              <code className="card bg-light border-info p-3 col-10 col-md-6 my-4">
                #ge-self-intro <br />
                Hello, <br />
                I am Christo John, a second year BCA student from Mar
                Augusthinose college, Ramapuram. <br /> Interested in web
                development, UiUx and Artificial Intgelligence. Hope to learn
                from you all...
              </code>
              <p>
                You're all set to embark on a journey of excellence. After this
                you may find tasks that suits you and start doing them. You can
                find tasks in the <code>lvl1-info</code>, <code>lvl2-info</code>{" "}
                and <code>lvl3-info</code> channels in muLearn discord server.
                You should gain atleast{" "}
                <strong>400 karma points from lvl2 tasks</strong> and{" "}
                <strong>800 karma points from lvl3 tasks</strong>. Once you do
                get that much, then only can you be considered as a true muLearn
                member, and get access to lots of other chanels. More on that in
                the <strong>muLearn a Beginners guide section</strong>. Before
                that you must fill our <strong>Campus chapter Form</strong>.
              </p>
            </div>
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-6">
            <div>
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                Join Discord server of our Campus Chapter
              </h3>
              <p className="h3 mb-3">
                muLearn Campus Chapter at Mar Augusthinose College, Ramapuram.
              </p>
              <p className="mb-2">
                Now It's time to{" "}
                <strong>
                  Join the <a href="">Discord server </a> of our college.{" "}
                </strong>
                (Every Campus affiliated with mulearn has their own discord
                server.)
              </p>
              <p>
                <hr className="w-75 mx-auto" />
                <span className="h5">muLearn</span> has affiliations with
                numerous colleges all across Kerala. Here at Mar Augusthinose
                College, we also have an affiliation with muLearn. muLearn has
                established <span className="mark">Campus Chapters</span> in
                each of their affiliated colleges. A{" "}
                <strong>Campus Chapter</strong> is like a branch of muLearn in a
                college. Interested students could join muLearn through these
                campus chapters. Every campus chapter has a{" "}
                <strong>core team</strong>(
                <span className="mark">EXECOM + IG Leads</span> ) that takes
                care of its operations. The head of this core team is a faculty
                member of the college, and other members are chosen from the
                students.{" "}
                <strong>
                  They strive hard to attract more students to this community
                  and manages all the mulearn campus activities
                </strong>
                .
              </p>

              <p>
                In our college, muLearn was initially introduced and began its
                activities on <strong>20 March 2023</strong>. Currently, our
                college's campus chapter has 115 muLearn members.{" "}
                <mark>
                  To facilitate student tracking and provide guidance, it is
                  required for anyone who has joined muLearn and linked their
                  muId with the muLearn Discord server to fill this form. This
                  form is exclusive to students at Mar Augusthinose College.
                  Once completed, you will be assigned to one of the six teams
                  in our college, each led by knowledgeable core team members
                  capable of offering guidance and pointing out mistakes
                </mark>
                . Within 24 hours of form submission, you will be assigned to a
                team with a designated team lead who will oversee your progress.
                They will assist you with tasks and provide guidance on all
                matters related to muLearn.{" "}
                <mark>
                  <strong>
                    We are a community of like-minded individuals dedicated to
                    the well-being of our community, and your interest toward
                    the community is the only thing that truly matters
                  </strong>
                </mark>
                .
              </p>
            </div>
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-7">
            <div>
              <h3 className="text-center p-4 bg-secondary text-light rounded">
                muLearn: A Guide for Beginners.
              </h3>
              <p>
                <span className="h4">Welcome to muLearn</span>, The Place where
                ME and YOU are gonna learn and upskill together!!
              </p>
              <p>
                After Completing all the above steps, you can{" "}
                <Link to="/joinus/guide">Get Started</Link> with μLearn here
              </p>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default JoinUsTabs;

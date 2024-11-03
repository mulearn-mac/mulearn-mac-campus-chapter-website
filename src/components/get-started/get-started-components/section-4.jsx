import img1 from "../../../assets/img/mu-guide/1.png";
import img2 from "../../../assets/img/mu-guide/2.png";
import img3 from "../../../assets/img/mu-guide/3.png";
import img4 from "../../../assets/img/mu-guide/4.png";
import img5 from "../../../assets/img/mu-guide/5.png";

function Section4() {
  return (
    <div>
      {" "}
      <p className="Title text-orange fs-3 pt-4">
        How To Join an Interest Group?
      </p>
      <p className="description">
        After becoming a Level 4 member you can join any Interest Group as you
        like. For that:
      </p>
      <p className="description">
        Goto{" "}
        <a href="https://app.mulearn.org" className="text-decoration-none">
          app.mulearn.org
        </a>
        . In the basic details section you can find a section named{" "}
        <strong className="">Interest Groups </strong> with an edit option.
        Click on that and select Your Interest Group.{" "}
        <strong className="">
          You can select upto 3 interest groups and also you can change interest
          groups anytime you wish.
        </strong>
      </p>
      <p className="description">
        Once you select your Interest Group you can see a section with the same
        name as your interest group in the discord server. (Eg: For web
        development it is <code>WEB DEVELOPMENT</code> ).
      </p>
      <img src={img1} alt="" className="py-2 cImg d-block mx-auto" />
      <p className="description">
        Similarly{" "}
        <strong>
          there will be sections for all the interest groups you've selected
        </strong>
        .
        <br />
        In each section there are certain channels.
        <br />
        <br />
        <span className="fw-600">
          1. Channel with the same name as the interest group and ends with info
        </span>
        <img src={img2} alt="" className="py-2 cImg d-block mx-auto" />
        This channel contains general tasks/resources for you to get started
        with that Interest Group. You can learn basic concepts from the tasks in
        this channel.
        <br />
        <br />
        <span className="fw-600">2. lvl-4-info,lvl-5-info,lvl-6-info</span>
        <img src={img3} alt="" className="py-2 cImg d-block mx-auto" />
        This channels contains level 4, level 5, and level 6 tasks. Also these
        tasks helps you get pracical experience by doing different real life
        problems/projects.
        <br />
        <br />
        <span className="fw-600">
          3. Channel with same name as the interest group and with the icon of
          #.
        </span>
        <img src={img4} alt="" className="py-2 cImg d-block mx-auto" />
        All the tasks related to that Interest Group is submitted in this
        channel.
        <br />
        <br />
        <span className="fw-600">
          4. A channel with same name as the Interest Group, but with the icon
          of a Loud Speaker.
        </span>
        <img src={img5} alt="" className="py-2 cImg d-block mx-auto" />
        In Week days (Mon-Fri) every interest group will have a weekly meting.
        In this meeting/gathering anyone can join and ask their doubts/help
        others clarify their doubts and even discuss about their
        ongoing/upcoming projects with others. Those meetings are held in this
        channel. It is a regular meeting and every interest group has a fixed
        day and time. For web development it is Thursday 7:30 PM. This meeting
        is named as <span className="mark">Office Hour</span>.
        <strong>
          All channels with this icon are called voice channels, where we engage
          as in a voice call.
        </strong>
        <br />
        <br />
        <span className="fw-600">5. Other channels.</span>
        <br />
        There are some other random channels for different interest group (For
        example here #exercism in web development). These channels are for task
        submission related to certain events (past or ongoing events).
      </p>
      <p className="description">
        This is basically how sections of each Interest group are organized.
        Once you become a Level 4 member you can choose your Interest Group and
        start doing tasks. You can choose upto 3 Interest Groups at a time and
        can change Interest Groups anytime. To become a level 5 member you need
        to earn atleast 1600 karma points from level 4 tasks. You can Find level
        4 tasks in lvl-4-info channel of all Interest Groups. (You can choose
        Level 4 tasks from any Interest Group and only needs a total of 1600
        Karma points from Level 4 tasks. For Example you can earn 900 points
        from level 4 tasks of web development, 300 points from level 4 tasks of
        IoT, 400 points from level 4 tasks of Cyber Security to make a total of
        1600 points. That is only the quantity matters, you can earn from level
        4 task of any Interest Groups. ) Once you get 1600 Karma Points from
        Level 4 tasks you will become a <strong>level 5</strong> member.
      </p>
      <p className="description">
        To become a level 6 member you need to earn atleast 1600 karma points
        from level 5 tasks. You can Find level 5 tasks in lvl-5-info channel of
        all Interest Groups. Once you get 1600 Karma Points from Level 5 tasks
        you will become a <strong>level 6</strong> member.
      </p>
      <p className="description">
        To become a level 7 member you need to earn atleast 1600 karma points
        from level 6 tasks. You can Find level 6 tasks in lvl-6-info channel of
        all Interest Groups. Once you get 1600 Karma Points from Level 6 tasks
        you will become a <strong>level 7</strong> member.
      </p>
      <p className="description">
        <strong>Level 7</strong> is the maximum level as of now. More levels
        will be added eventually.
      </p>
      <p className="description">
        That's basically everything about the Discord Level System.
      </p>
      <hr className="text-center w-50 mx-auto" />
    </div>
  );
}

export default Section4;

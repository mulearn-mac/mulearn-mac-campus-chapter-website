import imgWhatsapp from "../../../assets/img/social/whatsapp.svg";

function Header() {
  function requestToJoin() {
    document.getElementById("requestDiv").innerHTML = `
            <a class="btn btn-success" href="https://api.whatsapp.com/send?phone=919495806285&text=Hello%2C%0AI%20want%20to%20join%20muLearn%20whatsapp%20group.%20"><img src="${imgWhatsapp}" alt="" class="whatsapp">  Christo John</a>
    
            <a class="btn btn-danger" href="https://api.whatsapp.com/send?phone=919188785036&text=Hello%2C%0AI%20want%20to%20join%20muLearn%20whatsapp%20group.%20"> <img src="${imgWhatsapp}" alt="" class="whatsapp"> Binnet Binoy</a>
        `;
  }

  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Header;

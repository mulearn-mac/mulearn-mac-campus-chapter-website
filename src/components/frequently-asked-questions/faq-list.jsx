import React, { useEffect } from "react";

function FAQList() {
  function printFaq() {
    var accordion = document.getElementById("accordion");
    fetch(
      "https://opensheet.elk.sh/1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo/faq"
    )
      .then((res) => res.json())
      .then((questions) => {
        console.log(questions);
        accordion.innerHTML = "";
        for (let x in questions) {
          if (questions[x].priority == 1) {
            accordion.innerHTML += `
              <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading${x}">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${x}" aria-expanded="false" aria-controls="flush-collapse${x}">
                ${questions[x].question}
                </button>
              </h2>
              <div id="flush-collapse${x}" className="accordion-collapse collapse" aria-labelledby="flush-heading${x}" data-bs-parent="#accordion">
                <div className="accordion-body">
                  ${questions[x].answer}
                </div>
              </div>
            </div>
          `;
          }
        }
        accordion.innerHTML += `
          <div className="d-md-none sticky-bottom accordion-item">
          <h2 className="accordion-header" id="flush-headingX">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
              Ask your Doubts
            </button>
          </h2>
          <div id="flush-collapseX" className="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordion">
            <div className="accordion-body" >
                <form method="post" action="" className="w-fit mx-auto FormBody" >      
                    <textarea name="entry.1418484372" className="d-block my-2"  name="" id="faqFormSmall" cols="30" rows="3" placeholder="Enter your question / doubt" ></textarea>
                    <button type="button" className="btn btn-primary d-block mx-auto col-5" onclick="submitQuestion(document.getElementById('faqFormSmall').value); document.getElementById('new-question').value = ''">Submit</button>
                </form>
            </div>
          </div>
        </div>
      `;
      });
  }

  function submitQuestion(question) {}

  useEffect(() => {
    printFaq();
  }, []);

  return (
    <div>
      <h3 className="badge p-2 fs-3 d-block w-fit mx-auto bg-info">Frequently Asked Questions</h3>
    </div>
  );
}

export default FAQList;

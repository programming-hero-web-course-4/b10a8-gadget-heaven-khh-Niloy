import React, { useState } from "react";

export default function FeedBack() {
  function handleSubmit() {
    const showingModal = document.getElementById("my_modal_1");
    if (showingModal && message != "" && message2 != "") {
      showingModal.showModal();
    }
  }

  const [message, setmessage] = useState("");
  const [message2, setmessage2] = useState("");

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-2xl font-semibold">We Value Your Feedback!</h1>
        <p className="text-sm font-light mt-2">
          Share Your Thoughts and Help Us Improve
        </p>
      </div>

      <div className="w-[80%] mx-auto mt-5">
        <div className="bg-[#f6f6f6] p-5 rounded-2xl text-black font-semibold py-5">
          <h1 className="text-lg">Problem type:</h1>
          <textarea
            className="resize-none p-2 text-black font-normal border border-black/10 rounded-md focus:outline-none my-2"
            name=""
            id=""
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            cols="50"
            rows="1"
          ></textarea>
          <h1 className="text-lg">Describe your problem:</h1>
          <textarea
            className="resize-none p-2 text-black font-normal border border-black/10 rounded-md focus:outline-none my-2 w-full"
            name=""
            id=""
            value={message2}
            onChange={(e) => setmessage2(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>

          <button
            onClick={() => handleSubmit()}
            className="hover:bg-[#9538E2] duration-300 hover:text-white border text-[#9538E2] border-[#9538E2] w-full py-2 rounded-md "
          >
            Submit
          </button>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className="font-bold text-xl mt-3">Your feedback matters!</h3>
          <div className="border border-black/5 w-[90%] my-3"></div>
          <p className="text-center">
            Thanks for sharing your thoughts. We will do our best to address
            your suggestions!
          </p>
          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              <button
                onClick={() => {
                  setmessage("");
                  setmessage2("");
                }}
                className="py-2 rounded-full font-medium hover:bg-red-600 hover:text-white duration-300 bg-[#110000]/5 w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

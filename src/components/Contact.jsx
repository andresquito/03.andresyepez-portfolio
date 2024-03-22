import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="flex  h-screen w-screen lex items-center flex-col rounded-xl "
    >
      <form
        //   Send email 45:00
        action="https://getform.io/f/jbwxgkwa"
        method="POST"
        className="flex flex-col items-center justify-center p-4  bg-blue-50 border border-black  rounded-xl mt-40 "
      >
        <h2 className="font-bold text-[40px]  text-center">Contact</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border  mt-6  sm:w-[300px] h-10 bg-[#1F1D2B] pl-4 rounded-xl"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border  mt-6  sm:w-[300px] h-10 bg-[#1F1D2B] pl-4 rounded-xl"
        />
        <textarea
          name="message"
          placeholder="Message"
          id=""
          resize="none"
          className="border mt-6   sm:w-[300px]  h-20  bg-[#1F1D2B] w-full py-2 pl-4  text-gray-300 rounded-xl"
        ></textarea>
        <button
          type="submit"
          className="border border-slate-800 mt-8 sm:w-[150px] p-2 bg-lime-300 font-bold rounded-xl"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;

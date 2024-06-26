/* eslint-disable react/no-unescaped-entities */
import { bookMeeting } from "../../assets/images";

const BookMeeting = () => {
  return (
    <section className="flex items-center justify-center relative">
      <img src={bookMeeting} alt="book-meeting" />
      <div className="flex-col items-center justify-center absolute top-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-28 text-white animation">
            Chatbot-platform's AI Development Platform
          </h1>
          <h2 className="text-[80px] text-white animation">
            Let the builders build
          </h2>
          <p className="text-20 text-white animation">
            The only enterprise AI platform that comes with batteries included.
          </p>
          <button
            className="animation flex items-center justify-center px-6 py-5 bg-grey-1000 rounded-xl hover:bg-pink-700 group duration-200 mt-10"
            type="button"
          >
            <span className="text-16 font-semibold group-hover:text-grey-1000 text-white">
              BOOK A MEETING
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;

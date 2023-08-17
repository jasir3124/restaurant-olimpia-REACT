export default function ContactSection() {
  return (
    <div className="contactSection">
      <div className="titleCont">
        <h1>Contact Us</h1>
        <hr className="TitleUnderline" />
      </div>
      <div className="contactCont">
        <div className="contactForm">
          <input type="text" placeholder="Your Name"></input>
          <input type="text" placeholder="Your Email"></input>
          <input type="number" placeholder="Your number"></input>
          <textarea
            type="text"
            cols="30"
            rows="10"
            placeholder="Message (Optional)"
          ></textarea>

          <button class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div class="text">Submit</div>
          </button>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.4618108696366!2d20.970844180279602!3d42.011903604911126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353f1a9aea267bd%3A0x18b4e25b142c30b6!2sDigital%20School%20Tetovo!5e0!3m2!1sen!2smk!4v1692307328009!5m2!1sen!2smk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

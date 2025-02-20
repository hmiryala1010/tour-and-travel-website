import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212739.27270176614!2d-102.05536932763464!3d33.57802153930466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add37ddd39%3A0x1af0042922e84287!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1740082616953!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: "0" }} // ✅ FIXED: Style should be an object
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

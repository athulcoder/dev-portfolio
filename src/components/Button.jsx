import React from "react";

const Button = ({ className, text, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        let target = document.getElementById("counters");

        if (target && id) {
          //
          let offset = window.innerHeight * 0.15;
          let top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;

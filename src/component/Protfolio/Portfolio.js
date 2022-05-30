import React from "react";

const Portfolio = () => {
  return (
    <section className="my-portfolio px-10">
      <div className="title">
        <h1>WELCOME TO MY PROTFOLIO</h1>
      </div>
      <div className="skills grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="web-skills">
          <h1>HTML</h1>
          <progress
            className="progress progress-accent w-full"
            value="80"
            max="100"
          ></progress>
          <h1>CSS</h1>
          <progress
            className="progress progress-accent w-full"
            value="10"
            max="100"
          ></progress>
          <h1>JS</h1>
          <progress
            className="progress progress-accent w-full"
            value="40"
            max="100"
          ></progress>
          <h1>REACT</h1>
          <progress
            className="progress progress-accent w-full"
            value="70"
            max="100"
          ></progress>
          <h1>FIREBASE</h1>
          <progress
            className="progress progress-accent w-full"
            value="100"
            max="100"
          ></progress>
          <h1>NODE JS</h1>
          <progress
            className="progress progress-accent w-full"
            value="100"
            max="100"
          ></progress>
          <h1>PHP</h1>
          <progress
            className="progress progress-accent w-full"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="information flex flex-col justify-start items-center">
          <input
            className="text-xl"
            type="text"
            disabled
            value="shohayabhasan@yahoo.com"
          />
          <p className="text-xl my-3">
            I AM SHOHAYAB HOSSAIN TALHA, A PROFESSIONAL WEB DESIGNER WHO
            SPECIALIZES IN HTML5, CSS3, JAVASCRIPT, JQUERY, SASS, AND BOOTSTRAP.
          </p>
          <p className="text-xl my-3">
            HSC, Adamjee Cantonment College, Dhaka Cantonment, Dhaka 1206.
          </p>
          <p className="text-xl my-3">
            SSC,Cantonment Board High School, Rajendrapur Cantonment, Gazipur
            1742.
          </p>
          <ul className="flex justify-center items-center">
            <li>
              <a href="https://shohayabt.github.io/shohayab.xyz/">
                <button className="btn-full signout m-2">PROJECT 1</button>
              </a>
            </li>
            <li>
              <a href="https://assignment-11-54f8e.web.app/">
                <button className="btn-full signout m-2">PROJECT 2</button>
              </a>
            </li>
            <li>
              <a href="https://shohayabt.github.io/Fashion-With-CSS3/">
                <button className="btn-full signout m-2">PROJECT 3</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/modules/pagination/pagination.min.css";
import { Mousewheel, Pagination } from "swiper";
// typed
// import Typed from "react-typed";
import Projects from "./Projects";
import MobileProjects from "./MobileProjects";
function Home() {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      const texts = ["Home", "About", "Skills", "Projects", "Contact Me"];
      return `<span class="${className}">${texts[index]}</span>`;
    },
  };

  return (
    <React.Fragment>
      {/* =================== Desktop start ==================== */}
      <section className="pc">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          pagination={pagination}
        >
          <SwiperSlide>
            <section
              id="hero"
              className="intro section-bg animate_fadeIn animate__animated"
            >
              <div className="hero-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-1 page-bg"></div>
              <div className="hero-warrper">
                <div className="hero-left">
                  <h1 className="section-title">
                    Hi, This is Monoj Kumar! Full Stack Developer Specializing
                    in Laravel and React.
                  </h1>

                  <p>
                    I build scalable web applications and intuitive user
                    interfaces. Currently working as a Full Stack Developer.
                  </p>
                  <div className="join-btn">
                    <a
                      href="./images/monoj.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./images/join-discord-btn.png" alt="" />
                      <div className="join-btn-text">
                        <p>Resume</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hero-right">
                  <div className="hero-imgs">
                    <img src="./images/hero-img-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="social-link-item">
                <a
                  href="https://www.facebook.com/monojkumar202"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/facebook.png" alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/monojkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/linkedin.png" alt="" />
                </a>
                <a
                  href="https://wa.me/8801757859893"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/whatsapp.png" alt="" />
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {/* =================== About start ================== */}
            <section className="virtual-office cpb-6 section-bg">
              <div className="page-bg-3 page-bg"></div>
              <div className="virtual-wrapper">
                <div className="virtual-left">
                  <div className="virtual-img">
                    <img src="./images/virtual-2.png" alt="" />
                  </div>
                </div>
                <div className="virtual-right">
                  <div className="virtual-img">
                    <img src="./images/virtual-1.png" alt="" />
                  </div>
                  <div className="virtual-contents">
                    <h2>
                      <span>About</span> Me
                    </h2>
                    <p>
                      Welcome to a space where creativity meets innovation. I’m
                      Monoj Kumar, a passionate Full Stack Developer with
                      expertise in Laravel, React.js, and Next.js. I craft
                      scalable web solutions and intuitive user interfaces to
                      bring ideas to life.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* =================== About end ================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ================= Skill Start ==================== */}
            <section className="remote section-bg">
              <div className="page-bg-4 page-bg"></div>

              <div className="container">
                <div className="skill-wrapper">
                  <div className="community-title">
                    <h1 className="section-title">
                      Sk<span>ills</span>{" "}
                    </h1>
                  </div>

                  <div className="skill-content skill-content-1">
                    <h4>
                      <span>FRONT-END</span>
                    </h4>
                    <div className="skill-items">
                      <div className="skill-item">
                        <img
                          src="./images/html.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/css.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/bootstrap.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>

                      <div className="skill-item">
                        <img
                          src="./images/tailwind.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/javascript.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/react-js.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/redux.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/next-js.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/typescript.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="skill-content skill-content-2">
                    <h4>
                      <span>BACK-END</span>
                    </h4>
                    <div className="skill-items-2">
                      <div className="skill-item">
                        <img
                          src="./images/laravel.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/php.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/node.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/mysql.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                      <div className="skill-item">
                        <img
                          src="./images/monogo.svg"
                          alt=""
                          className="skill-icon-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ================= Skill end ==================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* =================== Projects start ========================= */}
            <Projects projectData={projectData} />
            {/* =================== Projects end ========================= */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ===================== Contact Me  start ================== */}
            <section className="backer cpb-6 section-bg">
              <div className="page-bg-6 page-bg"></div>
              <div className="container">
                <div className="backer-wrapper">
                  <div className="backer-title">
                    <h1 className="section-title">
                      <span>Contact US</span>
                    </h1>
                  </div>
                  <div className="backer-items">
                    <div className="backer-item backer-item-1">
                      <div className="contact-img">
                        <img src="./images/contact-1.svg" alt="" />
                      </div>
                      <div className="contact-content">
                        <div className="contact-icon">
                          <img src="./images/map.svg" alt="" />
                        </div>
                        <h4>Address</h4>
                        <p>Dinajpur, Rongpur, Bangladesh</p>
                      </div>
                    </div>
                    <div className="backer-item backer-item-2">
                      <div className="contact-img">
                        <img src="./images/contact-1.svg" alt="" />
                      </div>
                      <div className="contact-content">
                        <div className="contact-icon">
                          <img src="./images/email.svg" alt="" />
                        </div>
                        <h4>Email ADDRESS</h4>
                        <a href="mailto:monoj93roy@gmail.com">
                          monoj93roy@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="backer-item backer-item-3">
                      <div className="contact-img">
                        <img src="./images/contact-1.svg" alt="" />
                      </div>
                      <div className="contact-content">
                        <div className="contact-icon">
                          <img src="./images/phone.svg" alt="" />
                        </div>
                        <h4>PHONE NUMBER</h4>
                        <a href="tel:+01757859893">01757859893</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-warrper">
                <div className="footer-bg">
                  <img src="./images/footer-bg.png" alt="" />
                </div>
                <div className="footer-con">
                  <div className="socials">
                    <div className="social-list">
                      <a
                        href="https://www.facebook.com/monojkumar202"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/facebook1.png" alt="" />
                          <p>Facebook</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/monojkumar"
                        target="_blank"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/linkedin1.png" alt="" />
                          <p>Linkedin</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a
                        href="https://t.me/monojkumar"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/telegram.png" alt="" />
                          <p>Telegram</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a
                        href="https://wa.me/8801757859893"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/whatsapp1.png" alt="" />
                          <p>WhatsApp</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="copyright">
                    <p>
                      &copy; {new Date().getFullYear()} Monoj All Rights
                      Reserved. Designed & Developed by Monoj Kumar
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </section>
            {/* =====================  Contact Me end ================== */}
          </SwiperSlide>
        </Swiper>
      </section>
      {/* =================== Desktop end ==================== */}

      {/* ================ Mobile device  start =============== */}
      <div className="mobile-home">
        {/* =============== Hero Section Start ===================== */}
        <section
          className="hero-mobile"
          id="hero"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="container">
            <div className="hero-mobile-warrper">
              <div className="hero-mobile-left">
                <h1
                  className="mobile-section-title mobile-hero-section-title"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Hi, This is Monoj Kumar! Full Stack Developer Specializing in
                  Laravel and React.
                </h1>
                <p data-aos="fade-down" data-aos-duration="2500">
                  I build scalable web applications and intuitive user
                  interfaces. Currently working as a Full Stack Developer.
                </p>
                <button
                  className="mobile-join-discord-btn"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <a href="./images/monoj.pdf" target="_blank">
                    <img src="./images/join-discord-btn-mobile.png" alt="" />
                  </a>
                </button>
              </div>
              <div
                className="hero-mobile-right"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
              >
                <img src="./images/hero-img-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* =============== Hero Section End ===================== */}

        {/* =================== virtual-office start ================== */}
        <section className="mobile-virtual" id="about">
          <div className="container">
            <div className="mobile-virtual-wrapper">
              <div className="mobile-virtual-right">
                <div className="mobile-virtual-content">
                  <h1 className="mobile-section-title"> About me</h1>
                  <p>
                    Welcome to a space where creativity meets innovation. I’m
                    Monoj Kumar, a passionate Full Stack Developer with
                    expertise in Laravel, React.js, and Next.js. I craft
                    scalable web solutions and intuitive user interfaces to
                    bring ideas to life.
                  </p>
                </div>
              </div>
              <div className="mobile-virtual-left">
                <img src="./images/virtual-2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* =================== virtual-office end ================== */}
        {/* =================== Remote job start ================== */}
        <section className="mobile-remote" id="skill">
          <div className="container">
            <div className="skill-wrapper">
              <div className="community-title">
                <h1 className="mobile-section-title">
                  Sk<span>ills</span>{" "}
                </h1>
              </div>

              <div className="skill-mobile-content">
                <h4>
                  <span>FRONT-END</span>
                </h4>
                <div className="skill-items">
                  <div className="skill-item">
                    <img
                      src="./images/html.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/css.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/bootstrap.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>

                  <div className="skill-item">
                    <img
                      src="./images/tailwind.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/javascript.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/react-js.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/redux.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/next-js.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/typescript.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                </div>
              </div>
              <div className="skill-mobile-content skill-mobile-content-2">
                <h4>
                  <span>BACK-END</span>
                </h4>
                <div className="skill-items-2">
                  <div className="skill-item">
                    <img
                      src="./images/laravel.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/php.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/node.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/mysql.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-item">
                    <img
                      src="./images/monogo.svg"
                      alt=""
                      className="skill-icon-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Remote job end ================== */}

        {/* =================== Project start ========================= */}
        <MobileProjects projectData={projectData} />
        {/* =================== Project end ========================= */}

        {/* ===================== Backer start ================== */}
        <section className="mobile-backer" id="contact">
          <div className="container">
            <div className="backer-wrapper">
              <div className="backer-title">
                <h1 className="mobilesection-title">
                  <span>Contact US</span>
                </h1>
              </div>
              <div className="backer-items backer-items-mobile">
                <div className="backer-item backer-item-1">
                  <div className="contact-img">
                    <img src="./images/contact-1.svg" alt="" />
                  </div>
                  <div className="contact-content">
                    <div className="contact-icon">
                      <img src="./images/map.svg" alt="" />
                    </div>
                    <h4>Address</h4>
                    <p>Dinajpur, Rongpur, Bangladesh</p>
                  </div>
                </div>
                <div className="backer-item backer-item-2">
                  <div className="contact-img">
                    <img src="./images/contact-1.svg" alt="" />
                  </div>
                  <div className="contact-content">
                    <div className="contact-icon">
                      <img src="./images/email.svg" alt="" />
                    </div>
                    <h4>Email ADDRESS</h4>
                    <a href="mailto:monoj93roy@gmail.com">
                      monoj93roy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="backer-item backer-item-3">
                  <div className="contact-img">
                    <img src="./images/contact-1.svg" alt="" />
                  </div>
                  <div className="contact-content">
                    <div className="contact-icon">
                      <img src="./images/phone.svg" alt="" />
                    </div>
                    <h4>PHONE NUMBER</h4>
                    <a href="tel:+01757859893">01757859893</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-warrper mobile-footer-warrper">
            <div className="footer-con footer-con-mobile">
              <div className="socials">
                <div className="social-list">
                  <a
                    href="https://www.facebook.com/monojkumar202"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/social-bg.png" alt="" />
                    <div className="social-content">
                      <img src="./images/facebook1.png" alt="" />
                      <p>Facebook</p>
                    </div>
                  </a>
                </div>
                <div className="social-list">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/monojkumar"
                    target="_blank"
                  >
                    <img src="./images/social-bg.png" alt="" />
                    <div className="social-content">
                      <img src="./images/linkedin1.png" alt="" />
                      <p>Linkedin</p>
                    </div>
                  </a>
                </div>
                <div className="social-list">
                  <a
                    href="https://t.me/monojkumar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src="./images/social-bg.png" alt="" />
                    <div className="social-content">
                      <img src="./images/telegram.png" alt="" />
                      <p>Telegram</p>
                    </div>
                  </a>
                </div>
                <div className="social-list">
                  <a
                    href="https://wa.me/8801757859893"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/social-bg.png" alt="" />
                    <div className="social-content">
                      <img src="./images/whatsapp1.png" alt="" />
                      <p>WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Monoj All Rights Reserved.
                  Designed & Developed by Monoj Kumar
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Backer end ================== */}
      </div>

      {/*  */}
    </React.Fragment>
  );
}

export default Home;

const projectData = [
  {
    key: 1,
    projectItemClass: "project-item cummunity-item-1",
    projectImage: "./images/project-1.png",
    altText: "Full Stack Web Tech Services For NFT & Fintech Companies",
    projectTitle: "Full Stack Web Tech Services For NFT & Fintech Companies",
    projectSkills: [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "MySQL",
      "RESTful APIs",
    ],
    projectLinks: {
      githubLink: "https://github.com/monojkumar2001/nfes",
      liveViewLink: "https://nfes.vercel.app/",
    },
  },
  {
    key: 2,
    projectItemClass: "project-item cummunity-item-2",
    projectImage: "./images/project-2.png",
    altText: "One Country, One Card",
    projectTitle:
      "Smart Card Generator – One-Stop Solution for Dynamic QR Codes",
    projectSkills: [
      "Next Js",
      "Tailwind CSS",
      "NPM QR",
      "Laravel",
      "MySQL",
      "JWT",
      "RESTful APIs",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing",
    projectLinks: {
      githubLink: "/",
      liveViewLink: "https://smartcardgenerator.net/",
    },
  },
  {
    key: 3,
    projectItemClass: "project-item cummunity-item-3",
    projectImage: "./images/project-3.png",
    altText: "EAS NFT – A Cutting-Edge NFT Marketplace & Web3 Platform",
    projectTitle: "EAS NFT – A Cutting-Edge NFT Marketplace & Web3 Platform",
    projectSkills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "RESTful APIs",
      "Web3.js ",
      "JWT",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing",
    projectLinks: {
      githubLink: "https://github.com/monojkumar2001/eas-nft-next",
      liveViewLink: "https://www.easnft.com",
    },
  },
  {
    key: 4,
    projectItemClass: "project-item cummunity-item-4",
    projectImage: "./images/project-4.png",
    altText: "",
    projectTitle: "ORXS - Road to Redemption | NFT & Web3 Platform",
    projectSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Framer Motion",
      "Web3.js",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing",
    projectLinks: {
      githubLink: "https://github.com/monojkumar2001/orxs",
      liveViewLink: "https://orxs.vercel.app",
    },
  },
  {
    key: 5,
    projectItemClass: "project-item cummunity-item-1",
    projectImage: "./images/project-5.png",
    altText: "",
    projectTitle: "MusicSphere - Ultimate Music Promotion Platform",
    projectSkills: [
      "Next.js",
      "CSS",
      "TypeScript",
      "Laravel",
      "MySQL",
      "RESTful APIs",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing",
    projectLinks: {
      githubLink: "https://github.com/monojkumar2001/music_frontend",
      liveViewLink: "https://ms-frontend-lovat.vercel.app/",
    },
  },
  {
    key: 6,
    projectItemClass: "project-item cummunity-item-1",
    projectImage: "./images/project-6.png",
    altText: "",
    projectTitle: "Discover, collect, and sell extraordinary NFTs",
    projectSkills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Laravel(PHP)",
      "Web3.js ",
      "Solidity",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing",
    projectLinks: {
      githubLink: "https://github.com/monojkumar2001/red-marketplace",
      liveViewLink: "https://red-marketplace.vercel.app/",
    },
  },
];

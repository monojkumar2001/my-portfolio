import React from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/modules/pagination/pagination.min.css";
import { Mousewheel, Pagination } from "swiper";
// typed
import Typed from "react-typed";
import Projects from "./Projects";
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
                    <Typed
                      strings={[
                        `Hi, This is Monoj Kumar! Full Stack Developer Specializing in Laravel and React. `,
                      ]}
                      typeSpeed={30}
                      backSpeed={50}
                      loop={false}
                    ></Typed>
                  </h1>

                  <p>
                    I build scalable web applications and intuitive user
                    interfaces. Currently working as a Full Stack Developer.
                  </p>
                  <div className="join-btn">
                    <a href="./images/monoj.pdf" target="_blank"
                  rel="noopener noreferrer">
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
            <Projects />
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
      <section className="mobile-home">
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
                  className="mobile-section-title"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Future infrastructure for workforce
                </h1>
                <p data-aos="fade-down" data-aos-duration="2500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button
                  className="mobile-join-discord-btn"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="3000"
                >
                  <a href="">
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

        {/* ================= talent Start ==================== */}
        <section className="talent-mobile" id="talent">
          <div className="container">
            <div className="talent-mobile-wrapper">
              <div
                className="talent-mobile-item"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>Talent pool</h3>
                <p>
                  Discover the right candidate from a big pool of talent
                  marketplace.{" "}
                </p>
              </div>
              <div
                className="talent-mobile-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>s b t s</h3>
                <p>
                  Collect SBTs as badges and achievements to get recognized
                  among the peers.{" "}
                </p>
              </div>
              <div
                className="talent-mobile-item"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>Autonomous Agreement Protocol </h3>
                <p>
                  We have built a protocol to define an escrow smart contract
                  with inbuilt dispute resolution.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= talent end ==================== */}

        {/* =================== virtual-office start ================== */}
        <section className="mobile-virtual" id="virtual">
          <div className="container">
            <div className="mobile-virtual-wrapper">
              <div
                className="mobile-virtual-left"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img src="./images/virtual-2.png" alt="" />
              </div>
              <div className="mobile-virtual-right">
                <div
                  className="mobile-virtual-content"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h1 className="mobile-section-title">Virtual Offices</h1>
                  <p>
                    Having a meeting or an event in your office? Or missing out
                    the experience of sitting with your colleagues is something
                    which makes us travel to the office every day. Pentonium
                    offers to build virtual spaces ( offices / meeting rooms )
                    according to the brands and help them launch events,
                    gathering or other activities, customized just for the brand
                    keeping the brand value alive.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== virtual-office end ================== */}
        {/* =================== Remote job start ================== */}
        <section className="mobile-remote" id="remote">
          <div className="container">
            <div className="mobile-remote-wrapper">
              <div
                className="mobile-remote-left"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img src="./images/remote-job-img-1.png" alt="" />
              </div>
              <div className="mobile-remote-right">
                <div
                  className="mobile-remote-content"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <h1 className="mobile-section-title">remote job</h1>
                  <p>
                    Build your business without an office has never been so
                    easy, offering tools to monitor and engage remote employees
                    with an extended form of autonomous agreement protocol,
                    saving money and offering transparency at the same time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Remote job end ================== */}

        {/* =================== Community start ========================= */}
        <section className="cummunity" id="cummunity">
          <div className="container">
            <div className="mobile-community-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                Community
              </h1>
              <div className="mobile-community-items">
                <div className="mobile-community-item cummunity-item-1">
                  <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Community</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-2">
                  <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Events</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-3">
                  <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Learn</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-4">
                  <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Grow</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Community end ========================= */}
        {/* ===================== Backer start ================== */}
        <section className="cummunity" id="backer">
          <div className="container">
            <div className="mobile-community-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                OUR BACKERS
              </h1>
              <div className="mobile-community-items backer-items">
                <div className="mobile-community-item backers-item cummunity-item-1">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-1.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-1.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-2">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-2.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-2.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-3">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-3.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-3.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-4">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-4.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-4.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Backer end ================== */}

        {/* =========== Footer start ======================= */}
        <section className="mobile-footer">
          <div className="mobile-footer-bg">
            <img src="./images/footer-bg.png" alt="" />
          </div>
          <div className="mobile-footer-con">
            <div className="socials">
              <div className="social-list">
                <a href="https://twitter.com/pentonium_ptm" target="_blank">
                  <img src="./images/social-bg.png" alt="" />
                  <div className="social-content">
                    <img src="./images/twitter.png" alt="" />
                    <p>Twitter</p>
                  </div>
                </a>
              </div>
              <div className="social-list">
                <a href="" target="_blank">
                  <img src="./images/social-bg.png" alt="" />
                  <div className="social-content">
                    <img src="./images/discord.png" alt="" />
                    <p>Discord</p>
                  </div>
                </a>
              </div>
              <div className="social-list">
                <a href="" target="_blank">
                  <img src="./images/social-bg.png" alt="" />
                  <div className="social-content">
                    <img src="./images/telegram.png" alt="" />
                    <p>Telegram</p>
                  </div>
                </a>
              </div>
              <div className="social-list">
                <a href="https://pentonium.medium.com/" target="_blank">
                  <img src="./images/social-bg.png" alt="" />
                  <div className="social-content">
                    <img src="./images/mediums.png" alt="" />
                    <p>Medium</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="copyright">
              <p>
                © 2023 Hooked All Rights Reserved. All names, logos, images,and
                brands are property of their respective owners. Non-Affiliation
                and Disclaimer
              </p>
            </div>
          </div>
        </section>
        {/* =========== Footer end ======================= */}
        {/* ================ Mobile device  end =============== */}
      </section>

      {/*  */}
    </React.Fragment>
  );
}

export default Home;

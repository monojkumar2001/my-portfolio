import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Projects = ({ projectData }) => {
  return (
    <section className="cummunity section-bg">
      <div className="page-bg-5 page-bg"></div>
      <div className="container">
        <div
          className="community-wrapper project"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="community-title">
            <h1 className="section-title">
              Proj<span>ects</span>
            </h1>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // cssMode={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prevs",
              nextEl: ".nexts",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1300: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="project-wrapper"
          >
            {[...projectData, ...projectData].map((item) => (
              <SwiperSlide key={item.key}>
                <div className={item.projectItemClass}>
                  <div className="project-img">
                    <img
                      src={item.projectImage}
                      alt={item.altText || "Project"}
                    />
                  </div>
                  <div className="project-content">
                    <a
                      href={item.projectLinks.liveViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title"
                    >
                      {item.projectTitle}
                    </a>
                    <div className="project-skill">
                      <ul>
                        {item.projectSkills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      <div className="project-github-link">
                        <a
                          href={item.projectLinks.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="./images/code.svg" alt="monoj" />
                        </a>
                      </div>
                      <a
                        href={item.projectLinks.liveViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-view-btn"
                      >
                        Live View
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-navigation">
            <button className="prevs">
              <img src="./images/arrow-left.svg" alt="Previous" />
            </button>
            <button className="nexts">
              <img src="./images/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

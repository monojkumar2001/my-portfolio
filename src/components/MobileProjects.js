import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const MobileProjects = ({ projectData }) => {
  return (
    <section className="mobile-project" id="projects">
      <div className="container">
        <div className=" mobile-project-wrapper">
          <div className="community-title">
            <h1 className="mobile-section-title">
              Proj<span>ects</span>
            </h1>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            cssMode={true}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 15 },
              400: { slidesPerView: 1.2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1300: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="mobile-sproject-wrapper"
          >
            {projectData.map((item) => (
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

          <div className="custom-mobile-navigation">
            <button className="prev">
              <img src="./images/arrow-left.svg" alt="Previous" />
            </button>
            <button className="next">
              <img src="./images/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProjects;

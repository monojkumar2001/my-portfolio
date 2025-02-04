import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Projects = () => {
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
            cssMode={true}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1300: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="project-wrapper"
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

          <div className="custom-navigation">
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

export default Projects;

const projectData = [
  {
    key: 0,
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
    key: 1,
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
    key: 2,
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
    key: 3,
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
    key: 4,
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
    key: 5,
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

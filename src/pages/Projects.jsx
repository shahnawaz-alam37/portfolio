import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import AnimatedBackground from '../components/AnimatedBackground'
import GlassCard from '../components/GlassCard'
import medinsight1 from '../assets/photos/medinsight 1.jpg'
import medinsight2 from '../assets/photos/medinsight 2.jpg'
import drai from '../assets/photos/drai 1.png'
import { BsArrowRight } from 'react-icons/bs'

const Projects = () => {
  const projects = [
    {
      title: "MedInsight",
      images: [medinsight1, medinsight2],
      description: [
        "Developed a comprehensive medical data management system including a mobile app, web app, and Node.js backend API with MongoDB and AWS S3 storage.",
"The system incorporates an AI-powered chatbot that synthesizes key patient information and a document analysis feature using OCR to validate and explore unstructured data.",
"This project demonstrates an end-to-end approach to building an AI-driven system, with a focus on data integrity and quality control.",
      ],
      // link: "https://your-project-url.com"
    },
    {
      title: "Dr. AI",
      images: [drai],
      description: [
        "Led the end-to-end development of an AI-driven medical training tool built in under 36 hours for a hackathon. Designed system architecture, integrated frontend (React) with backend (Flask), and incorporated external APIs like ElevenLabs TTS and speech recognition for real-time doctor-patient simulations.", 
        "Developed and integrated an evaluation system to analyze post-conversation transcripts, assessing the AI patient's communication and the doctor's diagnostic approach, directly addressing the need for quality control in training simulations",
        "Guided the team through full-stack integration and ensured project delivery under tight deadlines"
      ],
      link: "https://www.youtube.com/watch?v=YCKaKhuZ_RM"
    }
  ]

  return (
    <div className="min-vh-100 d-flex align-items-center position-relative">
      <AnimatedBackground />
      <div className="container py-5">
        <h1 
          className="text-center mt-5 fw-bold" 
          style={{
            background: "linear-gradient(135deg, #6366f1 30%, #8b5cf6 45%, #f59e0b 60%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            width: "100%"
          }}
        >
          My Projects
        </h1>
        
        <div className="d-flex flex-column">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.title} 
              delay={index * 0.2}
              sx={{ 
                margin: '2rem auto',
                maxWidth: '1200px',
                padding: '2rem'
              }}
            >
              <div className="row g-5 justify-content-center align-items-center">
                {/* Images Section with Carousel */}
                <div className="col-12 col-md-5 px-4">
                  {project.images.length > 1 ? (
                    <Carousel 
                      interval={null}
                      className="project-carousel"
                      indicators={false}
                    >
                      {project.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <div className="img-container" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="w-100 rounded"
                              style={{
                                objectFit: 'contain',
                                width: '100%',
                                height: 'auto',
                                maxHeight: '500px'
                              }}
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <div className="img-container" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                      <img
                        src={project.images[0]}
                        alt={`${project.title} screenshot`}
                        className="w-100 rounded"
                        style={{
                          objectFit: 'contain',
                          width: '100%',
                          height: 'auto',
                          maxHeight: '500px'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="col-12 col-md-7 px-4">
                  <h2 
                    className="fw-bold mb-4" 
                    style={{
                      background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    {project.title}
                  </h2>
                  
                  {project.description.map((paragraph, i) => (
                    <p key={i} className="mb-6" style={{ lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.85)',fontSize: '1.1rem' }}>
                      {paragraph}
                    </p>
                  ))}

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light d-inline-flex align-items-center gap-2 mt-3"
                    >
                      View Project
                      <BsArrowRight />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

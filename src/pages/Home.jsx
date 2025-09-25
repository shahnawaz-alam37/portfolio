import React from "react";
import resume from '../assets/resume (1).pdf';
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaBriefcase
} from "react-icons/fa";
import { motion } from 'framer-motion';
import AnimatedBackground from "../components/AnimatedBackground";
import GlassCard from "../components/GlassCard";
import profileimg from "../assets/photos/profile.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Material-UI",
    "AWS",
    "Docker",
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px", // Space for navbar
      }}
    >
      <AnimatedBackground />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          {/* LEFT: Profile Image */}
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Placeholder for profile image */}
              {/* <div 
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  border: "4px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2 style={{ color: 'white', fontWeight: 'bold', margin: 0 }}>SA</h2>
              </div> */}
              {/* If you have the image, replace the div above with: */}
              <img
                src={profileimg}
                alt="Shahnawaz Alam"
                className="img-fluid"
                style={{ 
                  maxWidth: "350px", 
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
              />
            </motion.div>
          </Col>

          {/* RIGHT: Text + Buttons + Socials + Tech */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 
                className="fw-bold mb-3" 
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 80%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.1"
                }}
              >
                Hi, I'm <span style={{ color: 'white' }}>Shahnawaz Alam</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                A passionate <span className="fw-semibold" style={{ color: '#6366f1' }}>full-stack developer</span> 
                {' '}creating exceptional digital experiences with cutting-edge technologies.
              </h4>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 32px",
                    fontWeight: "600"
                  }}
                  onClick={() => navigate('/projects')}
                >
                  <FaBriefcase className="me-2" /> View My Work
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  href={resume}
                  download="Shahnawaz_Alam_Resume.pdf"
                  style={{
                    borderRadius: "12px",
                    padding: "12px 32px",
                    fontWeight: "600",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <FaDownload className="me-2" /> Download Resume
                </Button>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="d-flex gap-3 mb-5">
                {[
                  { icon: FaGithub, href: "https://github.com/shahnawaz-alam37" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/shahnawaz-alam37" },
                  { icon: FaEnvelope, href: "mailto:your.email@example.com" }
                ].map((Social, index) => (
                  <motion.a
                    key={index}
                    href={Social.href}
                    target={Social.icon !== FaEnvelope ? "_blank" : undefined}
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "white",
                      textDecoration: "none",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <Social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <h6 className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Technologies I work with:
                </h6>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        margin: '4px',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: '20px',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        cursor: 'default',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
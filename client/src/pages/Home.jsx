import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container">
      
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>
            Welcome to <span>MyPolitician</span>
          </h1>
          <p>Empowering Citizens. Inspiring Progress.</p>
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Movement
          </motion.button>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://thumbs.dreamstime.com/b/empowering-female-leadership-woman-politician-advocating-ideas-engaging-citizens-political-discourse-stage-created-345866885.jpg" alt="Leader" />
        </motion.div>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>About the Leader</h2>
        <p>
          A visionary political leader committed to bringing transparency, progress,
          and development to the community. With years of experience and a heart for public service,
          our leader strives to make a real difference in the lives of people.
        </p>
      </motion.section>

      <motion.section
        className="priorities-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Our Priorities</h2>
        <div className="priorities-list">
          {[
            'Transparency and good governance',
            'Quality education for all',
            'Youth empowerment and employment',
            'Health and hygiene for every citizen',
          ].map((priority, index) => (
            <motion.div
              className="priority-card"
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
               {priority}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Be a Part of the Change</h2>
        <p>Join hands with us to create a brighter, stronger future for our nation.</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Volunteer Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Home;

import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";
import jiomartImg from "./Images/jiomart.png";

export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              duration: 0.5,
            }}
            className={"sectionHeading"}
            data-outline="Projects"
          >
            Projects
          </motion.h2>
          <div className={styles.containerThree}>
            <motion.div
              className={styles.item}
              initial={{ x: 70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="cc-platform.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Investment And Analytics Platform</h2>

                <p className={styles.projectDesc}>
                CorpCare Investment and Analytics is a platform built for HNIs,
                UHNIs, and corporates to invest in mutual funds and they can track
                their investment in mutual funds, bonds, fixed deposits, and
                AIF/PMS.
                  <h3>Features</h3>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Signin, Signup, KYC Verification, CAN Creation</li>
                    <li>•Analytical Dashboard for Mutual Funds, Fixed Deposits, Bonds,AIF/PMS</li>
                    <li>Mutual Funds Explore Page</li>
                    <li>Investment Page for Mutual Funds, Fixed Deposits, Bonds</li>
                    <li>User Profile section to update user details</li>
                  </ul>
                  <h2><b><i> Tech Stack :</i></b> Next Js | Redux | Typecript | Tailwind CSS | React-Query
                  | React-Hook-Form | Recharts | YUP</h2>
                  <h2>
                   <b><i> Area of Responsibility :</i></b>  My role in the project involves constructing
                      responsive UI based on Figma designs, seamlessly integrating APIs
                      across all pages. I consistently implement platform modifications in
                      alignment with evolving business requirements.

                  </h2>
                </p>
                <div className={styles.buttons}>
                
                  <a
                    href="https://client.corpcare.co.in/signin"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Live Link{" "}
                  </a>
                </div>
              </div>
            </motion.div>
            {/* ========================================================================================================================================= */}
            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="website-cc.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>CorpCare Website</h2>

                <p className={styles.projectDesc}>
                This website serves as a lending platform for CorpCare, allowing
                users to explore the services offered by CorpCare.

                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Home Page, Services Pages, Products Pages</li>
                    <li>About Company, Research Pages</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b>  AstroJs | React |Tailwind CSS | Typescript | Strapi CMS
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  Previously, this project was built using
                  Next.js and Strapi, which was developed by the previous team. They
                  overengineered the project with a heavy dependency on Strapi.
                  However, since this is a static website, it does not require such a
                  significant reliance on Strapi. Therefore, I rebuilt the website using
                  Astro.js, and only the blogs and research paper sections are being
                  sourced from Strapi.

                  </h2>
                </p>
                <div className={styles.buttons}>
                  
                  <a
                    href="https://corpcare.co.in/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Live Link{" "}
                  </a>
                </div>
              </div>
            </motion.div>
            {/* ========================================================================================================================================= */}

          </div>
        </div>
      </section>
    </div>
  );
};

import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";

export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <motion.h2
               initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: .8 }}
        transition={{
          duration: 3.5,
          type: "spring",
          stiffness: 300,
        }}
          
            className={"sectionHeading"} data-outline="Projects">
            Projects
          </motion.h2>
          <div className={styles.containerThree}>
            <motion.div
              className={styles.item}
              initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: .1 }}
        transition={{
          duration: 3.5,
          type: "spring",
          stiffness: 300,
        }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://i.imgur.com/lPI0qTc.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Myntra Clone</h2>

                <p className={styles.projectDesc}>
                  Build this E-commerce web application with my team members in
                  7 days.
                  <h3>Features</h3>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Add a item to Cart</li>
                    <li>Purchase an item</li>
                  </ul>
                  <h2>Tech Stack: HTML | CSS | Javascript | Local Storage</h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="https://github.com/shivraj32644/MyntraClone"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    GitHub Link
                  </a>
                  <a
                    href="https://myntracom.netlify.app/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.item}

              initial={{ x: 70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: .1 }}
        transition={{
          duration: 3.5,
          type: "spring",
          stiffness: 300,
        }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://i.imgur.com/2QNF7AG.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>HappyFox Clone</h2>

                <p className={styles.projectDesc}>
                  Build clone of HappyFox.com with my team members in 5 Days.
                  HappyFox is a (SaaS) support platform. That offer an
                  enterprise-grade help desk ticketing system and an intuitively
                  designed live chat software.
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Admin Panel</li>
                    <li>Create Tickets</li>
                  </ul>
                  <h2>
                    Tech Stack: HTML | CSS | Javascript | JSON-Server | API{" "}
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="https://github.com/Vinay-Khairnar/HappyFox-Clone"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Github Link
                  </a>
                  <a
                    href="https://idyllic-scone-5f37c8.netlify.app/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

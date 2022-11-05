import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <h2 className={'sectionHeading'} data-outline="Projects">
            Projects
          </h2>
          <div className={styles.containerThree}>
            


            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.img}>
                  <img
                    src="https://i.imgur.com/lPI0qTc.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Myntra Clone</h2>
                <h3 className={styles.projectSubTitle}>
                  Clone of Ecommerce Website
                </h3>
                <p className={styles.projectDesc}>
                  I made this web application with my team members. This application
                  is the clone of Ecommerce Website Myntra.
                  <ul>
                    <h3>Features</h3>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Add a item to Cart</li>
                    <li>Purchase an item</li>
                  </ul>
                </p>
                <div className={styles.buttons}>
                  <a href="https://github.com/shivraj32644/MyntraClone" target='_blank' className={styles.primaryBtn}>
                    GitHub Link
                  </a>
                  <a href="https://neon-faun-fc0da3.netlify.app/index.html" target='_blank' className={styles.primaryBtn}>
                    Preview{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.img}>
                  <img
                    src="https://i.imgur.com/2QNF7AG.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>HappyFox Clone</h2>
                <h3 className={styles.projectSubTitle}>
                HappyFox is a SaaS support platform. 
                </h3>
                <p className={styles.projectDesc}>
                I made this web application with my team members. This application
                  is the clone of HappyFox which is a software-as-a-service (SaaS)
                  support platform. That offer an enterprise-grade help desk
                  ticketing system and an intuitively designed live chat software.
                  <ul>
                    <h3>Features</h3>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Admin Panel</li>
                    <li>Create Tickets</li>
                  </ul>
                </p>
                <div className={styles.buttons}>
                  <a href="https://github.com/Vinay-Khairnar/HappyFox-Clone" target='_blank' className={styles.primaryBtn}>
                    Github Link
                  </a>
                  <a href="https://idyllic-scone-5f37c8.netlify.app/" target='_blank' className={styles.primaryBtn}>
                    Preview{" "}
                  </a>
                </div>
              </div>
            </div>















          </div>
        </div>
      </section>
    </div>
  );
};

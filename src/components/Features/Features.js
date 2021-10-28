import React from "react";
import AnalyticsImg from "images/analytics.svg";
import styles from "./Features.module.css";

const Features = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1 className={styles.featuresTitle}>
                    Short links solve big problems
                </h1>
                <p>Ensure scalability and growth</p>
                <p>Empower yourself with real-time data</p>
                <p>Optimize and track using Shortly analytics tools</p>
                <p>Maintain control over your links</p>
            </div>
            <img src={AnalyticsImg} alt="" className={styles.img} />
        </section>
    );
};

export default Features;

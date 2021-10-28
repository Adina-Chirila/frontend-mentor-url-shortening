import React from "react";
import Shortening from "../Shortening/Shortening";
import StatisticsBoxes from "../StatisticsBoxes/StatisticsBoxes";
import styles from "./Statistics.module.css";

const Statistics = () => {
    return (
        <section className={styles.statistics}>
            <div className="container">
                <Shortening />
                <div className={styles.statisticsContent}>
                    <h3 className={styles.statisticsTitle}>
                        Advanced Statistics
                    </h3>
                    <p className={styles.statisticsText}>
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                </div>
                <StatisticsBoxes />
            </div>
        </section>
    );
};

export default Statistics;

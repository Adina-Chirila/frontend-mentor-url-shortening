import React from "react";
import styles from "./Resources.module.css";

const Resources = () => {
    return (
        <section className={styles.resourcesContainer}>
            <h1>API Documentation</h1>
            <ul>
                <li>
                    Base API:{" "}
                    <span>
                        <code>https://api.shrtco.de/v2/</code>
                    </span>
                </li>
                <li>
                    Authentication: <span>not required</span>
                </li>
                <li>
                    Rate Limits: <span> one request per second/IP address</span>
                </li>
            </ul>
            <a href="https://shrtco.de/docs/">Find out more</a>
        </section>
    );
};

export default Resources;

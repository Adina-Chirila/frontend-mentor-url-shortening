import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Free",
            price: 0,
            featured: false,
            redirects: "unlimited",
            customDomainNames: 0,
            reports: 0,
        },
        {
            title: "Basic",
            price: 10,
            featured: true,
            redirects: "unlimited",
            customDomainNames: 5,
            reports: 5,
        },
        {
            title: "Premium",
            price: 15,
            featured: false,
            redirects: "unlimited",
            customDomainNames: 10,
            reports: 10,
        },
    ];
    return (
        <section className={styles.pricingContainer}>
            <h1 className={styles.pricingTitle}>
                Get the most from your links
            </h1>
            <div className={styles.boxes}>
                {pricingPlans.map((plan) => {
                    const {
                        title,
                        price,
                        featured,
                        redirects,
                        customDomainNames,
                        reports,
                    } = plan;
                    return (
                        <div className={styles.box}>
                            <h2>
                                {title} <span>{featured && "POPULAR"}</span>
                            </h2>
                            <h3>
                                ${price}
                                <span>/month</span>
                            </h3>
                            <button className={styles.getStartedBtn}>
                                Get Started
                            </button>
                            <p>Redirects: {redirects}</p>
                            <p>Custom domains: {customDomainNames}</p>
                            <p>Reports: {reports}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pricing;

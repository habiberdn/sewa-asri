import styles from "./../styles/css/components/chart.module.css";

export function BookingsChart() {
    return (
        <section className={styles["chart"]}>
            <h3 className={`h3-medium ${styles["label"]}`}>Statistik Reservasi di Tahun 2024</h3>

            <main className={`${styles["visualization"]} ${styles["reservation-visualization"]}`}>
                <section className={styles["scale"]}>
                    <section className={styles["scale-value"]}>
                        <p className={`label-regular ${styles["value"]}`}>32</p>
                        <p className={`label-regular ${styles["value"]}`}>20</p>
                        <p className={`label-regular ${styles["value"]}`}>16</p>
                        <p className={`label-regular ${styles["value"]}`}>8</p>
                        <p className={`label-regular ${styles["value"]}`}>5</p>
                        <p className={`label-regular ${styles["value"]}`}>0</p>
                    </section>

                    <div aria-label="invisible-shape" className={styles["invisible-shape"]} />
                </section>

                <section className={styles["chart-visualization"]}>
                    <section className={styles["grid"]}>
                        <section className={styles["vertical-grid"]}>
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["vertical-line"]}`} />
                        </section>

                        <section className={styles["horizontal-grid"]}>
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                            <hr className={`${styles["line"]} ${styles["horizontal-line"]}`} />
                        </section>
                    </section>

                    <section className={styles["data-chart"]}>
                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Jan</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Feb</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Mar</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Apr</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Mei</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Jun</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Jul</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Aug</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Oct</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Nov</p>
                        </article>

                        <article className={styles["data"]}>
                            <div 
                                className={styles["bar-chart"]}
                                aria-label="bar-chart" 
                                onMouseEnter={() => console.info("information")}
                            />
                            <p className={`label-regular ${styles["data-label"]}`}>Dec</p>
                        </article>
                    </section>
                    
                </section>
            </main>

            <article className={styles["info"]}>
                <p className={`label-regular ${styles["label"]}`}>Semua villa</p>
            </article>
        </section>
    );
}
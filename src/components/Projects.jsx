import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Name Generator Using Machine Learning",
            description: "Developed a Generative AI project that generates names using Neural Networks. The model was trained with existing datasets and used PyTorch for Backward Propagation through the Neural Network.",
            tech: ["Python", "Pandas", "PyTorch", "TensorFlow", "Jupyter Notebook"],
            date: "January 2023",
            highlights: [
                "Implemented neural network architecture for name generation",
                "Trained model on large datasets for accurate results",
                "Used PyTorch for efficient backward propagation"
            ]
        },
        {
            title: "E-Commerce Web Application",
            description: "Impressive and creative design of a full-stack e-commerce web application. Developed and tested all modules to achieve the best version of the application.",
            tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
            date: "April 2022",
            highlights: [
                "Designed responsive and user-friendly interface",
                "Implemented complete backend with Java and MySQL",
                "Developed and tested all application modules"
            ]
        },
        {
            title: "Doubtcool - Education Blogging Platform",
            description: "Designed and developed a user-friendly blogging platform for students and aspirants. Major modules include Search Engine and User Profile Networking.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
            date: "August 2019 - April 2020",
            highlights: [
                "Built comprehensive search engine functionality",
                "Implemented user profile and networking features",
                "Created platform specifically for educational content"
            ]
        },
        {
            title: "Pandas TA - Open Source Contribution",
            description: "Contributed to Pandas Technical Analysis library, specifically enhancing the SUPERTREND Module to provide more flexibility in analyzing financial market data with different ranges for more accurate results.",
            tech: ["Python", "Pandas", "Technical Analysis"],
            date: "October 2022",
            highlights: [
                "Enhanced SUPERTREND module functionality",
                "Improved data analysis flexibility",
                "Contributed to library with 130+ indicators"
            ],
            github: "https://github.com/twopirllc/pandas-ta"
        }
    ];

    return (
        <section id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">Some of my notable work and contributions</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1rem'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        marginBottom: '0.5rem',
                                        color: 'var(--accent-primary)',
                                        flex: 1
                                    }}>
                                        {project.title}
                                    </h3>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: 'var(--text-secondary)',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    marginBottom: '1rem'
                                }}>
                                    <Calendar size={14} />
                                    {project.date}
                                </div>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.7,
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                <ul style={{
                                    listStyle: 'none',
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.5rem',
                                            paddingLeft: '1.2rem',
                                            position: 'relative',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.8rem'
                                            }}>
                                                ▹
                                            </span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--accent-primary)',
                                            padding: '0.35rem 0.75rem',
                                            borderRadius: '6px',
                                            fontSize: '0.8rem',
                                            fontWeight: 500
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

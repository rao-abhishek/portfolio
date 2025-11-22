import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

// Calculate years of experience
const calculateExperience = () => {
    const startDate = new Date('2023-04-01'); // Lumel start date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const yearsOfExperience = calculateExperience();

    const highlights = [
        {
            icon: <Briefcase size={24} />,
            title: `${yearsOfExperience}+ Years Experience`,
            description: "Product development at Lumel"
        },
        {
            icon: <Award size={24} />,
            title: "97% Performance Boost",
            description: "Optimized Canvas grid rendering"
        },
        {
            icon: <GraduationCap size={24} />,
            title: "B.Tech in CSE",
            description: "CGPA: 8.72/10"
        }
    ];

    return (
        <section id="about" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know more about my journey and expertise</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                className="card"
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    color: 'var(--accent-primary)',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: 600
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="card"
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            My Journey
                        </h3>
                        <div style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            fontSize: '1.05rem'
                        }}>
                            <p style={{ marginBottom: '1rem' }}>
                                I'm a passionate <strong style={{ color: 'var(--text-primary)' }}>Software Engineer</strong> at Lumel,
                                where I specialize in building high-performance web applications that handle massive datasets with
                                exceptional efficiency. My work focuses on creating scalable solutions using modern technologies
                                like React, TypeScript, and Node.js.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                At Lumel, I've engineered a <strong style={{ color: 'var(--text-primary)' }}>Canvas-based grid system</strong> capable
                                of handling 10M+ records, achieving a remarkable 97% reduction in render time. I've also optimized
                                backend APIs with DuckDB, enabling real-time analytics on datasets exceeding 1GB directly in the browser.
                            </p>
                            <p>
                                Beyond my professional work, I'm an active contributor to open-source projects and constantly exploring
                                new technologies. I hold a <strong style={{ color: 'var(--text-primary)' }}>B.Tech in Computer Science</strong> from
                                Veltech University with a CGPA of 8.72, where I developed a strong foundation in algorithms, data structures,
                                and software engineering principles.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

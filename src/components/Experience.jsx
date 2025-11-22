import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            company: "Lumel",
            role: "Product Developer",
            location: "Chennai, India",
            period: "Apr 2023 - Present",
            achievements: [
                "Engineered a high-performance Canvas-based grid (5000x5000 cells) handling 10M+ records, reducing render time by 97% for enterprise-grade data visualization",
                "Built and optimized backend APIs with DuckDB in Node.js with REST API, achieving a 2x speedup and enabling in-browser analytics on datasets >1GB in real-time",
                "Optimized end-to-end data pipelines across frontend and backend, reducing query and render latency by 40%+",
                "Innovatively crafted components utilizing Canvas with DOM-like capabilities, streamlining development efforts by 90% while maintaining ESLint standards",
                "Developed reusable components (Accordion, Grid, Searchable Dropdown etc.), reducing dev time by 90% across teams",
                "Spearheaded development of advanced data analysis features for VALQ, EDITable PowerBI and PowerTable Microsoft Fabric products"
            ],
            tech: ["React", "Redux", "MobX", "TypeScript", "JavaScript", "C#", "Node.js", "DuckDB"]
        },
        {
            company: "Zoho",
            role: "Software Developer Intern",
            location: "Chennai, India",
            period: "Apr 2022 - May 2022",
            achievements: [
                "Developed an E-Commerce website using HTML, CSS, JAVASCRIPT for frontend and JAVA and MySQL for backend programming",
                "Gained hands-on experience in product development through industry exposure",
                "Designed and created dynamic applications with impressive interfaces using Figma",
                "Prepared comprehensive product development plans with scope for future upgrades, ensuring update-friendly architecture"
            ],
            tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Figma"]
        }
    ];

    return (
        <section id="experience" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">My professional journey and key achievements</p>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="card"
                                style={{ marginBottom: '2rem' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1.5rem',
                                    flexWrap: 'wrap',
                                    gap: '1rem'
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            marginBottom: '0.5rem',
                                            color: 'var(--accent-primary)'
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.3rem'
                                        }}>
                                            <Briefcase size={16} />
                                            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                                                {exp.company}
                                            </span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem'
                                        }}>
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-secondary)',
                                        background: 'var(--bg-tertiary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '6px'
                                    }}>
                                        <Calendar size={16} />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    marginBottom: '1.5rem'
                                }}>
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.75rem',
                                            paddingLeft: '1.5rem',
                                            position: 'relative',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--accent-primary)'
                                            }}>
                                                {'>'}
                                            </div>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--accent-primary)',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
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

export default Experience;

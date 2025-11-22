import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 size={24} />,
            skills: ["TypeScript", "JavaScript", "HTML", "CSS", "C#", "Java", "Python"]
        },
        {
            title: "Frameworks & Libraries",
            icon: <Sparkles size={24} />,
            skills: ["React", "React Native", "Redux", "MobX", "Node.js", "jQuery", "PyTorch", "TensorFlow"]
        },
        {
            title: "Databases",
            icon: <Database size={24} />,
            skills: ["MySQL", "MongoDB", "DuckDB", "Firebase"]
        },
        {
            title: "Tools & Others",
            icon: <Wrench size={24} />,
            skills: ["Git", "Figma", "ESLint", "REST API", "Canvas API", "Pandas"]
        }
    ];

    return (
        <section id="skills" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">Tools and technologies I work with</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="card"
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem',
                                    color: 'var(--accent-primary)'
                                }}>
                                    {category.icon}
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                                        {category.title}
                                    </h3>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem'
                                }}>
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                                padding: '0.6rem 1rem',
                                                borderRadius: '8px',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                border: '1px solid var(--border-color)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'default'
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: 'var(--accent-primary)',
                                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        style={{
                            marginTop: '3rem',
                            textAlign: 'center'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            Soft Skills
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            justifyContent: 'center',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            {["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"].map((skill, i) => (
                                <span key={i} style={{
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                    color: 'var(--text-primary)',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    border: '1px solid var(--border-color)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

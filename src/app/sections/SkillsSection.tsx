import styles from '../page.module.css';

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '⚙️' },
  { name: 'React', icon: '⚛️' },
  { name: 'HTML/CSS', icon: '🏗️' },
  { name: 'Git', icon: '📦' },
  { name: 'REST APIs', icon: '🔌' },
  { name: 'OOP', icon: '🎯' },
  { name: 'Unit Testing', icon: '🧪' },
  { name: 'SQL', icon: '💾' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Färdigheter & Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillsCard}>
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="font-semibold text-white">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './SkillSection.css';

export default function SkillSection() {
  return (
    <section className="skill-section">
      <h2 id="skill">Skills</h2>
      <div className="skills-container">
        <div className="skill-column">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java (Expert)</li>
            <li>Python (Expert)</li>
            <li>JavaScript (Expert)</li>
            <li>C (Intermediate)</li>
          </ul>

          <h3>Databases</h3>
          <ul>
            <li><strong>SQL:</strong> PostgreSQL</li>
            <li><strong>NoSQL:</strong> Firebase</li>
          </ul>
          <h3>Deep Learning (In Progress)</h3>
            <ul>
              <li><strong>Deep Learning:</strong> End-to-end modeling and training</li>
              <li><strong>Neural Network Implementation:</strong> From scratch and with frameworks</li>
              <li><strong>Computer Vision:</strong> Real-world image classification tasks</li>
              <li><strong>Model Optimization & Fine-Tuning:</strong> Practical engineering tricks for better performance</li>
              <li><strong>Large-Scale Model Training:</strong> Experience with multi-million parameter networks</li>
              <li><strong>Architecture Design:</strong> CNNs, fully connected networks, and more</li>
              <li><strong>Training Engineering:</strong> Batching, regularization, and tuning techniques</li>
          
            </ul>
        </div>

        <div className="skill-column">
        <h3>Full-Stack Deployment</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js (JS/TSX) <strong>(Extensive Experience)</strong></li>
            <li><strong>Backend:</strong> Node.js, Express.js <strong>(Extensive Experience)</strong></li> 
            <li><strong>Deployment:</strong> Vercel</li>
            <li>Git/GitHub</li>
          </ul>
          <h3>LLM / Vision APIs & Data Frameworks</h3>
            <ul>
              <li><strong>Data:</strong> NumPy, Pandas, Matplotlib</li>
              <li><strong>NLP/LLM & Vision:</strong> NLTK, Google Vision, ChatGPT API (OpenAI)</li>
            </ul>
          <h3>Relevant Coursework</h3>
            <ul>
              <li>Data Structures & Algo</li>
              <li>Intro to Machine Learning</li>
              <li>Matrix & Linear Algebra</li>
              <li>Discrete & Continuous Probability for CS</li>
              <li>Mathematical Foundations of Computing (Logic, Proof, and Computability)</li>
              <li>Deep Learning (In Progress)</li>
            </ul>
            <h3>Other Tools</h3>
              <ul>
                <li>Tableau</li>
                <li>Microsoft Office, Google WorkSpace</li>
              </ul>
        </div>
      </div>
  </section>   
  );
}

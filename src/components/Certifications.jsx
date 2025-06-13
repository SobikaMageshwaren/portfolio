import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications & Achievements</h2>
      <p className="quote">"Learning never exhausts the mind. – Leonardo da Vinci"</p>

      {/* Academic Certifications */}
      <div className="cert-category">
        <h3>🎓 Professional (Academic Achievements)</h3>
        <table className="cert-table">
          <thead>
            <tr>
              <th>📄 Title</th>
              <th>🔗 Certificate Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NPTEL Certificate on "Ethical Hacking"</td>
              <td><a href="https://drive.google.com/file/d/1xlBU3r2E-p2wuFi4KN0FCXVF_W-BvunL/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a></td>
            </tr>
            <tr>
              <td>Google Skill Badge in "Generative AI"</td>
              <td><a href="https://drive.google.com/file/d/1RZQv2ZBylSB5j77-kmEkkxI4DXnxdq72/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a></td>
            </tr>
            <tr>
              <td>Googe Skill Badge in "Introduction to LLM"</td>
              <td><a href="https://drive.google.com/file/d/19BPMfXiNPu9BQTyUHRRaRwOjm_ncsYPv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a></td>
            </tr>
            <tr>
              <td>Face Detection with OpenCV in Python – Great Learning</td>
              <td><a href="https://drive.google.com/file/d/1VWasS2wMDM-hVkP4Xkcq2UBrMUNLD4MU/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Co-Curricular Activities */}
      <div className="cert-category">
        <h3>🌟 Co-Curricular Activities</h3>
        <table className="cert-table">
          <thead>
            <tr>
              <th>🏅 Event</th>
              <th>📝 Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Workshop on “Large Language Models and their Applications”</td>
              <td>Explored the architecture and use-cases of LLMs in real-world AI tasks.</td>
            </tr>
            <tr>
              <td>Workshop on “Introduction to Spatial Data Analytics”</td>
              <td>Learned spatial data processing and visualization techniques.</td>
            </tr>
            <tr>
              <td>Workshop on "R Programming and Statistics"</td>
              <td>Gained hands-on experience with R for statistical analysis.</td>
            </tr>
            <tr>
              <td>Codeoclock Hackathon</td>
              <td>Participated in 24-hour hackathon at Coimbatore Institute of Technology with innovative project ideas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Certifications;

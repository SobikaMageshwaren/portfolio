import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    {
      title: 'Languages',
      rating: 4,
      subskills: ['Python', 'C'],
    },
    {
      title: 'Data Techniques',
      rating: 4,
      subskills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Data Visualization'],
    },
    {
      title: 'Frameworks & Libraries',
      rating: 4,
      subskills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'OpenCV'],
    },
    {
      title: 'ML Techniques',
      rating: 5,
      subskills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Transformers'],
    },
    {
      title: 'Frontend Development',
      rating: 3,
      subskills: ['HTML', 'CSS', 'React JS'],
    },
    {
      title: 'Database',
      rating: 3,
      subskills: ['MySQL', 'MongoDB'],
    },
  ];

  return (
    <div className="about-me-section">
      <div className="about-me-box">
        <div className="about-me-top">
          <div className="about-me-image">
            <img src="/sobi.jpg" alt="Sobiks Mageshwaren" />
          </div>
          <div className="about-me-description">
            <h2>About Me</h2>
            <p>
              I’m Sobika Mageshwaren, an aspiring<b> Machine Learning Engineer and Data Analyst passionate</b> about innovation and problem-solving. Currently pursuing my <b>M.Sc. in Artificial Intelligence and Machine Learning</b> at Coimbatore Institute of Technology. I focus on developing scalable <b>ML models and optimizing data pipelines</b>. I enjoy building intelligent systems that drive efficiency and real-world impact. Motivated by challenges that combine data and creativity to deliver meaningful solutions.
            </p>
            

            <h3 style={{ marginTop: '24px', color: '#2a0e6d' }}>EDUCATION</h3>
<ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#000914' }}>
  <li>
    <strong>
      <a href="https://www.cit.edu.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#000914', textDecoration: 'underline' }}>
        Coimbatore Institute of Technology
      </a>
    </strong> &nbsp;|&nbsp; Integrated Masters in Artificial Intelligence and Machine Learning         2027
  </li>
  <li>
    <strong>
      <a href="http://www.svctcbe.org/home.php" target="_blank" rel="noopener noreferrer" style={{ color: '#000914', textDecoration: 'underline' }}>
        Vijayalakshmi Matriculation Hr. Sec School     
      </a>
    </strong> &nbsp;|&nbsp; Schooling    2022
  </li>
</ul>

          </div>
        </div>

        {/* Skills Heading */}
        <h3 className="skills-title">SKILLS</h3>

        {/* Skills List */}
        <div className="skills-section">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-heading">
                <h4>{skill.title}</h4>
                <div className="stars">
                  {'★'.repeat(skill.rating)}{'☆'.repeat(5 - skill.rating)}
                </div>
              </div>
              <div className="dropdown always-visible">
                {skill.subskills.map((sub, idx) => (
                  <span key={idx} className="dropdown-item">{`• ${sub}`}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React, { useState } from 'react';
import './Projects.css';

const projectData = {
  ml: [
    {
      title: 'FEELWISE: Customer Emotion Analysis System',
      description:
        'Created a multilingual emotion analysis tool using DistilRoBERTa (87% accuracy), KeyBERT for topic extraction, and SentimentIntensityAnalyzer for scoring, with a real-time Streamlit interface.',
      tech: 'Python, Hugging Face Transformers (DistilRoBERTa, BART), KeyBERT, NLTK, SpaCy, Google Translator API, JSON',
      github: 'https://github.com/SobikaMageshwaren/FeelWise',
      image: '/images/feelwise.jpg',  // Replace with your actual image URL or local path
    },
    {
      title: 'RETENTIONX: Customer Attrition Risk Analyzer',
      description:
        'Devised a robust machine learning model utilizing logistic regression to predict customer churn with an accuracy of 88.81%. Deployed via Flask with a Power BI dashboard for insights.',
      tech: 'Python, Flask, Power BI, Docker, Scikit-learn, Pandas',
      github: 'https://github.com/SobikaMageshwaren/RetentionX',
      image: '/images/churn.jpg',
    },
    {
      title: 'EchoSigns: Parkinson’s Disease Early Detection via Speech Analysis',
      description:
        'Developed a speech-based diagnostic tool using Wav2Vec2 and SVM to detect early Parkinson’s disease signs. Includes real-time audio recording and diagnosis logging.',
      tech: 'Python, Hugging Face Transformers (Wav2Vec2), Scikit-learn, Streamlit, Librosa, Sounddevice, Pandas, NumPy',
      github: 'https://github.com/SobikaMageshwaren/ParkinsonDetection',
      image: '/images/parkin.jpg',
    },
  ],
  computerVision: [
    {
      title: 'BLINDSIGHT: AI-Powered Vision Assistant',
      description:
        'Real-time AI assistant using YOLOv8 and BLIP for object detection and captioning, with voice feedback.',
      tech: 'Python, OpenCV, YOLOv8, BLIP, EasyOCR, Pyttsx3, Streamlit',
      github: 'https://github.com/SobikaMageshwaren/BlindSight',
      image: '/images/blindsight.jpeg',
    },
    {
      title: 'SMARTSITESHIELD – Vision-Based Worker Safety System',
      description:
        'AI-driven safety monitoring for construction sites using Mediapipe Pose Estimation, YOLOv8 helmet detection, HSV color filtering, and zone compliance checks.',
      tech: 'Python, OpenCV, Mediapipe, YOLOv8, Streamlit, Pygame, NumPy, Pandas',
      github: 'https://github.com/SobikaMageshwaren/SmartSiteShield',
      image: '/images/smart.jpg',
    },
    {
      title: 'TRACKVISION: Real-Time Object Tracking with YOLOv8',
      description:
        'Interactive app performing real-time object tracking on videos using YOLOv8 and ByteTrack with detailed analytics and CSV export.',
      tech: 'Python, Streamlit, OpenCV, YOLOv8, ByteTrack, NumPy, Pandas, Torch',
      github: 'https://github.com/SobikaMageshwaren/objtracking',
      image: '/images/object.jpg',
    },
  ],
  software: [
    {
      title: 'VOYAGEMATE: AI Travel Planning Platform',
      description:
        'AI-based itinerary builder with Google Maps integration and full CRUD management.',
      tech: 'MERN Stack, Google Maps API',
      github: 'https://github.com/SobikaMageshwaren/VoyageMate',
      image: '/images/travel.jpg',
    },
    {
      title: 'FEEDNEST: News Reader with ML',
      description:
        'Full-stack news app with fake news detection model deployed via Flask.',
      tech: 'MERN Stack, Python, Flask, NLP',
      github: 'https://github.com/SobikaMageshwaren/FeedNest',
      image: '/images/newsfeed.jpg',
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ml');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="tabs">
        <button
          className={activeTab === 'ml' ? 'active' : ''}
          onClick={() => {
            setActiveTab('ml');
            setExpandedIndex(null);
          }}
        >
          Machine Learning
        </button>
        <button
          className={activeTab === 'computerVision' ? 'active' : ''}
          onClick={() => {
            setActiveTab('computerVision');
            setExpandedIndex(null);
          }}
        >
          Computer Vision
        </button>
        <button
          className={activeTab === 'software' ? 'active' : ''}
          onClick={() => {
            setActiveTab('software');
            setExpandedIndex(null);
          }}
        >
          Full stack 
        </button>
      </div>

      <div className="project-grid">
        {projectData[activeTab].map((proj, idx) => (
          <div
            key={idx}
            className={`project-card ${expandedIndex === idx ? 'expanded' : ''}`}
            onClick={() => toggleExpand(idx)}
          >
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {expandedIndex === idx && (
              <>
                <p>
                  <strong>🛠 Tech Stack:</strong> {proj.tech}
                </p>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  🔗 View on GitHub
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

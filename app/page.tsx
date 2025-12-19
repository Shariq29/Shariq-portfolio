"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Download, Github, Linkedin, Code, Database, Brain, TrendingUp, Award, Briefcase, GraduationCap, ChevronRight, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const skills = {
    'Programming': [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 90 },
      { name: 'C/C++', level: 75 }
    ],
    'Data Science & ML': [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Feature Engineering', level: 88 }
    ],
    'Data Analysis': [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
      { name: 'EDA', level: 88 },
      { name: 'A/B Testing', level: 80 }
    ],
    'Visualization': [
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 82 },
      { name: 'Matplotlib', level: 88 },
      { name: 'Seaborn', level: 88 }
    ],
    'Deployment & Tools': [
      { name: 'Flask', level: 85 },
      { name: 'FastAPI', level: 83 },
      { name: 'Streamlit', level: 88 },
      { name: 'Git/GitHub', level: 90 }
    ]
  };

  const projects = [
    {
      title: 'Birth Weight Predictor',
      description: 'End-to-end ML project predicting newborn birth weight using regression techniques. Implemented feature engineering, hyperparameter tuning, and deployed with REST API.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'Pandas'],
      github: '#',
      metrics: 'MAE: 0.42kg, R²: 0.87'
    },
    {
      title: 'Bangalore House Price Predictor',
      description: 'Real estate price prediction model using location, size, and amenities. Built data pipeline with extensive EDA and feature selection.',
      tech: ['Python', 'XGBoost', 'Streamlit', 'NumPy'],
      github: '#',
      metrics: 'Accuracy: 85%, MAPE: 12%'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Classification model to predict customer churn with 89% accuracy. Handled class imbalance using SMOTE and optimized for business metrics.',
      tech: ['Python', 'TensorFlow', 'SMOTE', 'FastAPI'],
      github: '#',
      metrics: 'F1-Score: 0.86, ROC-AUC: 0.92'
    }
  ];

  const experience = [
    {
      role: 'Machine Learning Intern',
      company: 'Corizo Edutech',
      period: 'Jan 2023 – May 2023',
      description: 'Built and deployed ML models using Flask, FastAPI, and Streamlit. Developed end-to-end pipelines for data preprocessing, model training, and API deployment.',
      achievements: [
        'Deployed 5+ ML models with REST APIs',
        'Reduced model inference time by 40%',
        'Implemented CI/CD pipeline for ML models'
      ]
    },
    {
      role: 'Python Trainee',
      company: 'Sebiz Infotech',
      period: 'Jul 2022 – Aug 2022',
      description: 'Developed automation scripts and data manipulation tools. Worked with OOP, APIs, and MySQL databases.',
      achievements: [
        'Created 10+ automation scripts',
        'Built data pipeline for ETL processes',
        'Optimized database queries for 50% faster retrieval'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Reducing MAE in Birth Weight Prediction',
      description: 'Deep dive into feature engineering techniques and hyperparameter tuning strategies that improved model performance by 23%.',
      link: '#'
    },
    {
      title: 'Handling Class Imbalance with SMOTE',
      description: 'Practical insights on dealing with imbalanced datasets in churn prediction, with metric trade-offs analysis.',
      link: '#'
    }
  ];
  type SkillBarProps = {
  name: string;
  level: number;
};

  const SkillBar = ({ name, level }: SkillBarProps) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
      setTimeout(() => setWidth(level), 100);
    }, [level]);

    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{name}</span>
          <span className="text-sm text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                SA
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shariq Ahmad
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              <span className="inline-block">Aspiring Data Scientist</span>
              <span className="mx-3 text-blue-600">|</span>
              <span className="inline-block">ML Engineer</span>
              <span className="mx-3 text-blue-600">|</span>
              <span className="inline-block">Data Analyst</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforming data into actionable insights with machine learning and statistical modeling
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="shariqsayeed33@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="/Shariq_Ahmad_Resume.pdf" download className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-blue-600">
                <Download size={20} />
                Download Resume
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/Shariq29" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={28} />
              </a>
              <a href="www.linkedin.com/in/shariq-ahmad-a04147234" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Data Scientist with hands-on experience in machine learning, statistical modeling, experimentation, and analytical product development. Skilled in end-to-end ML workflows including preprocessing, feature engineering, model training, evaluation, deployment, and monitoring.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Strong background in Python, SQL, and production-ready deployment frameworks. Passionate about solving complex business problems with data-driven solutions and building scalable ML systems.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="text-white" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="text-white" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">ML Models</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="text-white" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-green-600">Fresher</div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-orange-600">90%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {category}
                </h3>
                {skillList.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-blue-600 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4 rounded">
                    <div className="text-sm font-semibold text-green-700">{project.metrics}</div>
                  </div>
                  <a href={project.github} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    <Github size={18} />
                    View on GitHub
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                    <div className="text-blue-600 font-semibold mb-1">{exp.company}</div>
                    <div className="text-gray-500 text-sm mb-4">{exp.period}</div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Case Studies & Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a href={study.link} className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                  Read More
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a href="mailto:shariqsayeed33@gmail.com" className="text-blue-600 font-semibold hover:underline">
                    shariqsayeed33@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Phone</div>
                  <a href="tel:+919149703890" className="text-green-600 font-semibold hover:underline">
                    +91 9149703890
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={handleContactSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Shariq Ahmad. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with passion for data science and machine learning</p>
        </div>
      </footer>
    </div>
  );
}
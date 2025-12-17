"use client";

// NEXT.JS APP ROUTER PAGE
// File: app/page.tsx
// Purpose: Portfolio with scroll-based animations (Framer Motion)

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// SEO metadata must live in app/layout.tsx for Client Components
// (removed from this file to fix build error)


export default function Portfolio() {
  // Scroll animation variant (FIXED: no accidental invocation)
    // Framer Motion variants (TypeScript-safe)
  const fadeInUp: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Shariq Ahmad
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-300"
        >
          Data Scientist | Python | Machine Learning | SQL
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <Button variant="secondary">
            <Mail className="mr-2" /> shariqsayeed33@gmail.com
          </Button>
          <Button variant="outline">
            <Phone className="mr-2" /> +91 9149703890
          </Button>
          <a href="/Shariq_Ahmad_Resume.pdf" download>
            <Button>Download Resume</Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 max-w-4xl"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Data Scientist with hands-on experience in machine learning, statistical modeling,
          experimentation, and analytical product development. Skilled in end-to-end ML
          workflows including preprocessing, feature engineering, model training, evaluation,
          deployment, and monitoring. Strong background in Python, SQL, and production-ready
          deployment frameworks.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Python, SQL, C/C++, Pandas, NumPy",
            "Scikit-learn, TensorFlow, PyTorch",
            "Flask, FastAPI, Streamlit, REST APIs",
            "EDA, Feature Engineering, SMOTE, A/B Testing",
            "Power BI, Tableau, Matplotlib, Seaborn",
            "Git, GitHub, MySQL, Deployment",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">{skill}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Birth Weight Predictor",
            "Bangalore House Price Predictor",
            "Customer Churn Prediction",
          ].map((title) => (
            <motion.div
              key={title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-400 mt-2">
                    Real-world machine learning project with deployment and evaluation.
                  </p>
                  <Button className="mt-4" variant="outline">
                    GitHub
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 max-w-4xl"
      >
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Machine Learning Intern – Corizo Edutech (Jan 2023 – May 2023)</strong>
            <br />Built ML models, pipelines, and deployed applications using Flask, FastAPI, and Streamlit.
          </li>
          <li>
            <strong>Python Trainee – Sebiz Infotech (Jul 2022 – Aug 2022)</strong>
            <br />Automation scripts, OOP, data manipulation, Git, APIs, and MySQL.
          </li>
        </ul>
      </motion.section>

      {/* Case Studies / Blog */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 max-w-5xl"
      >
        <h2 className="text-3xl font-semibold mb-6">Case Studies & Blog</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Reducing MAE in Birth Weight Prediction</h3>
              <p className="text-gray-400 mt-2">
                Feature engineering, hyperparameter tuning, and evaluation strategy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Handling Class Imbalance with SMOTE</h3>
              <p className="text-gray-400 mt-2">
                Practical churn modeling insights and metric trade-offs.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 flex justify-between items-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Shariq Ahmad</p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/shariq-ahmad-a04147234"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </footer>
    </main>
  );
}

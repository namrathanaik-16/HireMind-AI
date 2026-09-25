# 🎯 HireMind AI

<p align="center">
  <b>AI-Powered Interview Preparation Platform</b><br>
  Practice technical interviews, solve coding challenges, and receive personalized AI feedback through a realistic interview experience.
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge\&logo=python\&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge\&logo=fastapi\&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge\&logo=sqlite\&logoColor=white)
![AI](https://img.shields.io/badge/AI-Interview%20Platform-8A2BE2?style=for-the-badge)

</p>

---

## 📖 About HireMind

**HireMind AI** is an AI-powered interview preparation platform that recreates the experience of a real technical interview.

Users can choose a job role, answer AI-generated HR and technical questions, complete a live coding challenge, and receive an intelligent feedback report highlighting strengths, weaknesses, communication skills, and technical performance.

The platform is designed to help students and software engineers prepare for product-based and service-based company interviews through realistic mock interview sessions.

---

## 🎯 Problem

Traditional interview preparation usually looks like this:

```text
Read Questions
      ↓
Watch Tutorials
      ↓
Solve Random Problems
      ↓
No Personalized Feedback
      ↓
Attend Real Interview
```

### HireMind transforms it into:

```text
Choose Interview Role
          ↓
AI Interview Session
          ↓
Live Coding Round
          ↓
AI Performance Evaluation
          ↓
Personalized Feedback Report
```

---

## ✨ Core Features

### 🎯 1. Role-Based Interview Selection

Choose the role you want to practice before starting the interview.

**Supported Roles**

* Frontend Developer
* Java Developer
* Python Developer
* QA Engineer
* Data Analyst

Each role generates role-specific HR, technical, and coding questions.

---

### 🤖 2. AI Interviewer

A conversational AI interviewer conducts the interview just like a real recruiter.

**Features**

* HR interview questions
* Technical interview questions
* AI follow-up questions
* Natural interview conversation flow

---

### 💻 3. Live Coding Round

Complete coding challenges inside an integrated coding environment.

**Includes**

* Monaco Code Editor
* Java & Python support
* Interview timer
* Sample & hidden test cases
* Run code functionality

---

### 📊 4. AI Feedback Report

Receive a complete interview performance analysis.

**Report Includes**

* Communication Score
* Technical Score
* Coding Performance
* Strengths
* Weaknesses
* Personalized Improvement Roadmap

---

## 🖥️ Interface Preview

```text
┌──────────────────────────────────────────────┐
│                HIREMIND AI                  │
├──────────────────────────────────────────────┤
│ Choose Role                                │
│ Frontend  Java  Python  QA  Data           │
├──────────────────────────────────────────────┤
│ AI Interview                               │
│ Q1. Explain REST APIs...                   │
│                                            │
│ Your Answer...                             │
├──────────────────────────────────────────────┤
│ Coding Round                              │
│ Monaco Editor + Timer                      │
├──────────────────────────────────────────────┤
│ AI Feedback Report                         │
│ Communication  Technical  Coding           │
└──────────────────────────────────────────────┘
```

---

## 🏗️ Architecture

```text
                    HireMind AI
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼                                 ▼
  React Frontend                   FastAPI Backend
        │                                 │
        │                         Interview Engine
        │                                 │
        │                    AI Question Generator
        │                                 │
        │                      Coding Evaluation
        │                                 │
        └────────────────┬────────────────┘
                         │
                         ▼
                  AI Feedback Report
```

---

## 🛠️ Tech Stack

| Layer           | Technology    |
| --------------- | ------------- |
| Frontend        | React + Vite  |
| Styling         | Tailwind CSS  |
| Backend         | FastAPI       |
| Language        | Python 3.13   |
| AI              | LLM API       |
| Database        | SQLite        |
| Code Editor     | Monaco Editor |
| Version Control | Git & GitHub  |

---

## 📂 Project Structure

```text
HireMind/
│
├── Backend/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── database/
│   └── main.py
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── README.md
└── .gitignore
```

---

## 🚀 Development Roadmap

### Phase 1 — UI Foundation

* [ ] Landing page
* [ ] Navigation bar
* [ ] Hero section
* [ ] Role selection dashboard
* [ ] Responsive design

### Phase 2 — AI Interviewer

* [ ] Role-based interview flow
* [ ] HR interview
* [ ] Technical interview
* [ ] AI follow-up questions

### Phase 3 — Coding Round

* [ ] Monaco code editor
* [ ] Java support
* [ ] Python support
* [ ] Interview timer
* [ ] Test case execution

### Phase 4 — AI Feedback Report

* [ ] Communication score
* [ ] Technical score
* [ ] Coding evaluation
* [ ] Strengths & weaknesses
* [ ] Personalized improvement roadmap

---

## 🔄 User Workflow

```text
Choose Role
     │
     ▼
AI Interview
     │
     ▼
Coding Round
     │
     ▼
AI Evaluation
     │
     ▼
Feedback Report
```

---

## 🎯 Project Goal

HireMind aims to make interview preparation realistic by combining AI conversation, coding assessments, and intelligent performance analytics into one seamless platform.

Instead of practicing with static question banks, candidates experience a complete mock interview and receive meaningful feedback before facing real technical interviews.

---

## 👩‍💻 Author

**Namratha V Naik**

Software Engineer • AI/ML • Web Development • Interview Preparation Tools

---

<p align="center">

⭐ If you find HireMind AI interesting, consider giving the project a star.

</p>

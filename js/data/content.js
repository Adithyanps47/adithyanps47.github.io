window.portfolioData = {
  stats: [
    { value: "8.58", label: "Integrated MCA CGPA" },
    { value: "2", label: "Software internships" },
    { value: "70%", label: "NPTEL Python Elite score" },
    { value: "2025/26", label: "AmritaBit selections" }
  ],

  about: {
    copy: "I am an Integrated MCA student at Amrita Vishwa Vidyapeetham, Kochi. I have completed my third year and I am now moving into the MCA phase of the program. My work combines practical product thinking with clean implementation: role-based portals, mobile utilities, algorithm visualizers, data extraction workflows, and accessible task-management systems.",
    education: [
      { label: "Integrated MCA", detail: "Amrita Vishwa Vidyapeetham, Kochi", meta: "2023 - 2028 | completed 3rd year, entering MCA phase | CGPA 8.58" },
      { label: "Higher Secondary (Computer Science)", detail: "GHSS Anchalummoodu, Kollam", meta: "2023 | 87.8%" },
      { label: "SSLC", detail: "GHSS Anchalummoodu, Kollam", meta: "2021 | 91%" }
    ],
    learning: [
      "Flutter for cross-platform mobile apps",
      "Full-stack backend systems with role-based access",
      "Python data analysis with Pandas, NumPy, and Matplotlib",
      "CRM and third-party API integrations"
    ]
  },

  experiences: [
    {
      role: "Software Development Intern",
      company: "SkillCraft Technology",
      duration: "1 month",
      summary: "I built logic-driven Python applications and completed the internship with a completion certificate and letter of recommendation.",
      bullets: [
        "I implemented a Sudoku generator and solver using backtracking.",
        "I created data extraction workflows and exported structured datasets to CSV with Pandas.",
        "I built desktop GUI applications with CustomTkinter and clean validation paths.",
        "I documented the internship projects on GitHub."
      ],
      tech: "Python, Pandas, CustomTkinter, Algorithms",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_internshipexperience-softwaredevelopment-activity-7414904981373222912-icfU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE",
      githubUrl: "https://github.com/Adithyanps47?tab=repositories&q=SCT_SE"
    },
    {
      role: "Android Application Development Intern",
      company: "Oasis Infobyte",
      duration: "1 month",
      summary: "I designed multiple Android utilities and was recognized as a Star Performer with a letter of recommendation.",
      bullets: [
        "I built a scientific calculator, to-do app, stopwatch, quiz app, and unit converter.",
        "I implemented XML interfaces, Java logic, persistent storage, and input validation.",
        "I documented demos, screenshots, and build details across GitHub repositories.",
        "I kept the internship projects grouped on GitHub for quick review."
      ],
      tech: "Java, XML, Android Studio, SQLite, Git",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_glad-to-share-that-ive-successfully-completed-activity-7425791995878760449-nnmV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE",
      githubUrl: "https://github.com/Adithyanps47?tab=repositories&q=oibsip"
    }
  ],

  featuredCaseStudy: {
    title: "Memora: Smart Reminder & Task Manager App",
    image: "https://github.com/user-attachments/assets/5e86fbb6-7329-4183-82f4-79dc906bacd6",
    repoUrl: "https://github.com/Adithyanps47/Memora-mobile-app",
    reportUrl: "assets/docs/memora-final-report.pdf",
    linkedinPostUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_ai-mobileappdevelopment-adhd-activity-7401244541955117057-DrzF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE",
    cards: [
      { label: "Problem", text: "I wanted Memora to reduce reminder overload for ADHD and early dementia users instead of becoming another noisy task app." },
      { label: "Role", text: "I worked as Project Lead and Android Developer in a team of five, focusing on app flow, Firebase structure, and Android implementation." },
      { label: "Users", text: "I designed for two connected groups: patients managing routines and caregivers who remotely create, update, and monitor tasks." },
      { label: "Architecture", text: "I built around Android Java/XML, Firebase Authentication, Firestore syncing, SQLite support, and Vosk-powered voice assistance." },
      { label: "Outcome", text: "The result was a documented healthcare-focused prototype with screening, task management, caretaker monitoring, and progress tracking." }
    ]
  },

  filters: ["All", "Android", "Full-stack", "Python", "Data"],

  projects: [
    {
      title: "Memora: Smart Reminder & Task Manager App",
      category: "Android",
      badge: "Android | Healthcare-focused",
      image: "https://github.com/user-attachments/assets/5e86fbb6-7329-4183-82f4-79dc906bacd6",
      description: "I built this as a smart reminder and task manager for ADHD and early dementia users with patient and caregiver roles.",
      bullets: [
        "I designed role-based patient and caregiver flows with real-time Firebase syncing.",
        "I integrated ASRS and MoCA-based screening for user categorization.",
        "I added weekly progress tracking, task history, and voice-to-text assistance."
      ],
      tech: "Java, XML, Firebase Firestore, Firebase Auth, SQLite, Vosk API",
      repoUrl: "https://github.com/Adithyanps47/Memora-mobile-app",
      reportUrl: "assets/docs/memora-final-report.pdf",
      linkedinPostUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_ai-mobileappdevelopment-adhd-activity-7401244541955117057-DrzF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "Scientific Calculator App",
      category: "Android",
      badge: "Android | Algorithmic engine",
      image: "https://raw.githubusercontent.com/Adithyanps47/oibsip-task3-calculator/main/docs/screenshots/ui_glassmorphism_dark.jpg",
      description: "I built this calculator around expression parsing rather than simple sequential calculation.",
      bullets: [
        "I used stack-based parsing to respect operator precedence and nested expressions.",
        "I handled scientific functions, factorials, exponents, and bracketed calculations.",
        "I designed an adaptive glassmorphism UI for light and dark modes."
      ],
      tech: "Java, XML, exp4j, Android Studio",
      repoUrl: "https://github.com/Adithyanps47/oibsip-task3-calculator"
    },
    {
      title: "Sudoku Engine & Visualizer",
      category: "Python",
      badge: "Python | Backtracking",
      image: "https://raw.githubusercontent.com/Adithyanps47/SCT_SE_3/main/docs/screenshots/solver_preview.png",
      description: "I built this visual Sudoku generator and solver to show recursive search and backtracking in real time.",
      bullets: [
        "I generated valid puzzles procedurally using randomized board logic.",
        "I visualized constraint checking, forward search, and backtracking states.",
        "I turned a classic algorithm into an inspectable learning tool."
      ],
      tech: "Python, PyGame, Backtracking Algorithm",
      repoUrl: "https://github.com/Adithyanps47/SCT_SE_3",
      demoUrl: "https://github.com/Adithyanps47/SCT_SE_3/blob/main/docs/demo_video/demo_video.mp4"
    },
    {
      title: "E-Commerce Product Scraper & Analyzer",
      category: "Data",
      badge: "Python | Data pipeline",
      description: "I built this scraping and analysis workflow to convert product page data into a structured dataset.",
      bullets: [
        "I extracted product names, prices, and ratings from e-commerce HTML.",
        "I exported clean product records into CSV for downstream analysis.",
        "I used notebooks to inspect data quality and visualize pricing patterns."
      ],
      tech: "Python, BeautifulSoup, Requests, Pandas, Matplotlib",
      repoUrl: "https://github.com/Adithyanps47/SCT_SE_4"
    },
    {
      title: "Mobile Utility Application Suite",
      category: "Android",
      badge: "Android | Internship suite",
      image: "https://raw.githubusercontent.com/Adithyanps47/oibsip-task2-to-do-app/main/docs/screenshots/task_list_screen.jpg",
      description: "I built this Android utility suite during my Oasis Infobyte internship.",
      bullets: [
        "I completed a unit converter, to-do app, quiz app, stopwatch, and scientific calculator.",
        "I practiced repeatable Android project structure, validation, UI design, and documentation.",
        "I used the suite to build consistency across several small production-style apps."
      ],
      tech: "Java, XML, SQLite, RecyclerView, ConstraintLayout",
      repoUrl: "https://github.com/Adithyanps47?tab=repositories&q=oibsip"
    },
    {
      title: "Business Operations Portal",
      category: "Full-stack",
      badge: "Full-stack | Operations",
      description: "I worked on this role-based business portal for client, sales, accounting, admin, and management workflows.",
      bullets: [
        "I designed modular frontend, backend, database, and CRM integration architecture.",
        "I worked on Zoho CRM REST API integration for lead and client synchronization.",
        "I deployed the React frontend through Hostinger with TLS enabled.",
        "I used WhatsApp API/navigation flows for relevant contact and communication paths."
      ],
      tech: "React.js, WordPress, PHP, Zoho CRM API, WhatsApp API, Hostinger, TLS, MySQL, MariaDB",
      websiteUrl: "https://ledgerworx.me/",
      linkedinPostUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_glad-to-share-that-i-successfully-completed-activity-7465220289849745408-7XLb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    }
  ],

  skills: [
    { title: "Languages", level: "Core strength", items: ["Java", "Python", "SQL", "JavaScript", "C", "C++", "C#"] },
    { title: "Web & Backend", level: "Shipping stack", items: ["React.js", "PHP", "J2EE", "JDBC", "JSON API calls", "WordPress"] },
    { title: "Databases & Cloud", level: "Data layer", items: ["Firebase Firestore", "SQLite", "MySQL", "MariaDB", "Zoho CRM API"] },
    { title: "Tools", level: "Daily workflow", items: ["Android Studio", "VS Code", "GitHub", "WAMP", "NetBeans", "phpMyAdmin"] },
    { title: "CS Foundations", level: "Problem solving", items: ["OOP", "DSA", "DBMS", "RBAC", "Backend validation", "Application flow design"] },
    { title: "Python Libraries", level: "Automation & data", items: ["Pandas", "NumPy", "Matplotlib", "CustomTkinter", "PyGame", "BeautifulSoup"] }
  ],

  featuredEvidence: [
    {
      title: "NPTEL Python for Data Science - Elite",
      label: "IIT Madras | SWAYAM | Jan-Feb 2026",
      detail: "I completed the 4-week proctored NPTEL program with a 70% Elite score.",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_pythonindatascience-nptel-activity-7464638659766489088-dleb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "AI + Coding Bootcamp",
      label: "DOJO.WORKS | Project track",
      detail: "I completed the bootcamp and associated project track to strengthen my AI-assisted development workflow.",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_successfully-completed-the-ai-coding-bootcamp-activity-7466345167466438657-VKIy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      label: "Be10x | Practical AI tools",
      detail: "I explored AI-assisted productivity for presentations, data analysis, research, coding, and debugging.",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_completed-the-be10x-ai-tools-chatgpt-workshop-activity-7428335940907225088-1WvJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "Cybersecurity Bootcamp",
      label: "Offensive security | Digital footprinting",
      detail: "I practiced SQL injection basics, preventive security, digital footprinting, Kali Linux workflows, and a small CTF challenge.",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_cybersecurity-digitalfootprinting-learningjourney-activity-7371867609631379456-P9H5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    }
  ],

  certifications: [
    { title: "Infosys Springboard - Agile Scrum in Practice", imageUrl: "assets/certificates/agile-scrum-in-practice.jpg" },
    { title: "Infosys Springboard - Basics of Python", imageUrl: "assets/certificates/basics-of-python.jpg" },
    { title: "Infosys Springboard - Database and SQL", imageUrl: "assets/certificates/database-and-sql.jpg" },
    { title: "Infosys Springboard - Email Writing Skills", imageUrl: "assets/certificates/email-writing-skills.jpg" },
    { title: "Infosys Springboard - Exploring Computers", imageUrl: "assets/certificates/exploring-computers.jpg" },
    { title: "Infosys Springboard - High Impact Presentations", imageUrl: "assets/certificates/high-impact-presentations.jpg" },
    { title: "Infosys Springboard - Time Management", imageUrl: "assets/certificates/infosys-time-management.jpg" },
    { title: "Infosys Springboard - Introduction to Machine Learning", imageUrl: "assets/certificates/introduction-to-machine-learning.jpg" },
    { title: "Infosys Springboard - Introduction to Python", imageUrl: "assets/certificates/introduction-to-python.jpg" },
    { title: "Infosys Springboard - Programming Fundamentals using Python - Part 1", imageUrl: "assets/certificates/programming-fundamentals-using-python-part-1.jpg" },
    { title: "Infosys Springboard - Programming Fundamentals using Python - Part 2", imageUrl: "assets/certificates/programming-fundamentals-using-python-part-2.jpg" },
    { title: "Infosys Springboard - Software Engineering and Agile Software Development", imageUrl: "assets/certificates/software-engineering-and-agile-software-development.jpg" }
  ],

  awards: [
    {
      title: "Young Innovators Program - K-DISC State-Level Winner",
      detail: "I was recognized for proposing an innovation solution under Kerala Development and Innovation Strategic Council.",
      status: "verified",
      linkLabel: "LinkedIn post",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_yip-kdisc-innovation-activity-7395476535518056448-pta6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "National RoboKart Championship Finalist",
      detail: "I reached the national finals through applied robotics, technical teamwork, and problem solving.",
      status: "verified",
      linkLabel: "LinkedIn post",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_robotics-innovation-stem-activity-7369343851511140356-zm7B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    },
    {
      title: "AmritaBit 9.0 & 10.0 Project Exhibition Selections",
      detail: "My projects were selected among top student projects at Amrita School of Computing, Kochi in 2025 and 2026.",
      status: "verified",
      linkLabel: "LinkedIn post",
      evidenceUrl: "https://www.linkedin.com/posts/adithyan-p-s-mobile_ai-mobileappdevelopment-adhd-activity-7401244541955117057-DrzF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8j7qcB6b22snk0AOdTvuH5mW8hrdhOknE"
    }
  ]
};

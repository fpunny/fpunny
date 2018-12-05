import { Home, About, Work, Contact } from './pages';

export const PAGES = [
  { text: "Home", path: "/", loader: Home },
  { text: "About", path: "/about", loader: About },
  { text: "Resume", path: "/work", loader: Work },
  { text: "Contact", path: "/contact", loader: Contact }
];

export const INFO = {
  Facebook: { type: "fab", icon: "facebook", link: "https://www.facebook.com/fredericpun", alt: "Link to Frederic Pun's Facebook" },
  Linkedin: { type: "fab", icon: "linkedin", link: "https://www.linkedin.com/in/fredericpun", alt: "Link to Frederic Pun's LinkedIn" },
  Github: { type: "fab", icon: "github", link: "https://github.com/fpunny", alt: "Link to Frederic Pun's LinkedIn" },
  Email: { type: "fas", icon: "envelope", link: "mailto:frederic.pun@mail.utoronto.ca", text: "frederic.pun@mail.utoronto.ca", alt: "Link to send an email to Frederic Pun" }
}

export const TRANSITION_DELAY = 500;

export const WORK = [
  {
    title: "Skills",
    data: [
      {
        header: "Front-end",
        body: [
          "ReactJS using CRA & Gatsby",
          "Redux + React Router",
          "Typescript",
          "SASS BEM",
          "Bootstrap + JQuery",
          "HTML5/CSS3/Javascript ES7",
          "Webpack + Babel"
        ]
      },
      {
        header: "Back-end",
        body: [
          "NodeJS with Express",
          "PHP",
          "Flask"
        ]
      },
      {
        header: "DBMS",
        body: [
          "MongoDB",
          "Firebase",
          "NeDB",
          "MySQL",
        ]
      },
      {
        header: "Others",
        body: [
          "Android Studio",
          "C",
          "Java",
          "Python"
        ]
      },
    ]
  },
  {
    title: "Education",
    data: [
      {
        header: "University of Toronto",
        subheader: "September 2016 - Present,  Scarborough",
        body: "Pursing specialist in Information Systems Co-op in Computer Science, third year"
      },
      {
        header: "The International School of Macao",
        subheader: "September 2008 - June 2016",
        body: "Provincial Diplona, Canadian Alberta Curriculum"
      }
    ]
  },
  {
    title: "Work",
    data: [
      {
        header: "University Of Toronto",
        sideheader: "Teaching Assistant",
        subheader: "September 2018 - Present,  Scarborough",
        body: "For CSCA67, Discrete Mathematics. Organized and taught course material in tutorials; Provided grading for exams, quizzes, and assignments; Assisted students in person and online via forum & email."
      },
      {
        header: "Maple Leaf Foods",
        sideheader: "IS Developer Co-op",
        subheader: "April 2018 - August 2018,  Mississauga",
        body: "Designed and developed multiple projects, such as a ReactJS Typescript PWA for company design guidelines, managed using VSTS, and deployed on Azure using  CI/CD."
      },
      {
        header: "Treasury Board Secretariat",
        sideheader: "FMG Web Support Co-op",
        subheader: "September 2017 - December 2017,  Toronto",
        body: "Maintained existing content and layout SharePoint pages, created new homepage and master page, and redeveloped JQuery scripts to use AJAX to create dynamic content from lists and libraries."
      }
    ]
  },
  {
    title: "Projects",
    data: [
      {
        header: "Hack The 6ix",
        sideheader: "Associate Web Developer",
        subheader: "November 2018 - Present, Hack The 6ix",
        body: "Creating full stack web applications from hacker applications to landing pages",
      },
      {
        header: "Hack The Valley III",
        sideheader: "Developer",
        subheader: "August 2018 - Present, University of Toronto Scarborough",
        body: "Developing multiple open-source applications - API, React Native App, and React Dashboard  - for upcoming and future hackathons for up 300 participants at the University of Toronto Scarborough.",
        href: "https://github.com/orgs/hackthevalley"
      },
      {
        header: "MHacks 11 - AutoShyfter",
        sideheader: "Front-end Developer",
        subheader: "October 2018",
        body: "Created an automatic scheduling application for small businesses created using React and SASS, connected to Mongodb stitch using GraphQL. I implemented a schedule graph which had async and sync scrolling, positioned elements for schedule items, and ability to add more items",
        href: "https://devpost.com/software/autoshyfter"
      },
      {
        header: "Personal Website V4",
        sideheader: "Creator",
        subheader: "September 2018",
        body: "Personal websites are created by me to consolidate and demostrate my skills and growth. This is created using CRA, React Router, Redux, and SASS using BEM.",
        href: "https://github.com/fpunny/fpunny"
      },
      {
        header: "HowlPlay",
        sideheader: "Engineer",
        subheader: "January 2018 - May 2018, University of Toronto Scarborough",
        body: "Collaborated in a team of 8 to create an open-source, real-time quiz game targeted towards hackathons. This was made in four applications - API for quiz information, websocket server to run the game instance, React app for quiz management, and React app quiz participation.",
        href: "https://github.com/orgs/wolfbeacon"
      },
      {
        header: "CSCB20 Final Assignment",
        sideheader: "Student",
        subheader: "March 2018",
        body: "Created an grading platform similar to Blackboard using PHP, HTML, CSS, and Javascript. This project demostrates my skills without using frameworks to create an MVC application with an REST API and interactive front-end.",
        href: "https://github.com/fpunny/cscb20-a3"
      },
      {
        header: "Electric City Hacks II - Buddy Bot",
        sideheader: "Full-stack Developer",
        subheader: "November 2017, Trent University",
        body: "Developed an AI bot for Facebook Messenger which understands natural language using wit.ai in 37 hours, awarded for being of the top 15 teams at the event.",
        href: "https://devpost.com/software/buddy-bot"
      }
    ]
  },
  {
    title: "Volunteer",
    data: [
      {
        header: "Canada Learning Code",
        sideheader: "Mentor",
        subheader: "June 2018 & September 2018",
        body: "Provided mentoring for a one mentor to four learner ratio group on multi-page websites and Chrome web extensions."
      },
      {
        header: "Hack The Valley I & II",
        sideheader: "Volunteer",
        subheader: "February 2017 & 2018",
        body: "36-hour hackathon at the University of Toronto Scarborough with 300 participants. Assisted in registration, management of MLH hardware lab, and mentoring for web technologies and Android."
      },
      {
        header: "UTSC + Ryerson Local Hack Day",
        sideheader: "Judge & Volunteer",
        subheader: "December 2017",
        body: "A 12-hour event to celebrate learning, building, and sharing worldwide. Assisted in the judging process, mentoring for web technologies such as HTML/CSS, Javascript, and Chrome extensions; and leading workshop on Cockroach DB on NodeJS."
      }
    ]
  }
]
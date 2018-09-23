import { Home, About, Work, Contact } from './pages';

export const PAGES = [
  { text: "Home", path: "/", loader: Home },
  { text: "About", path: "/about", loader: About },
  { text: "Resume", path: "/work", loader: Work },
  { text: "Contact", path: "/contact", loader: Contact }
];

export const INFO = {
  Facebook: { type: "b", icon: "facebook", link: "https://www.facebook.com/fredericpun" },
  Linkedin: { type: "b", icon: "linkedin", link: "https://www.linkedin.com/in/fredericpun" },
  Github: { type: "b", icon: "github", link: "https://github.com/fpunny" },
  Email: { type: "s", icon: "envelope", link: "mailto:frederic.pun@gmail.com", text: "frederic.pun@gmail.com" }
}

export const TRANSITION_DELAY = 600;

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
          "HTML5/CSS3/Javascript ES6",
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
          "Firebase",
          "NeDB",
          "MySQL",
          "SharePoint"
        ]
      },
      {
        header: "Others",
        body: [
          "Android Studio",
          "C",
          "Java",
          "Python 3"
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
        header: "Hack The Valley III",
        sideheader: "Developer",
        subheader: "August 2018 - Present, University of Toronto Scarborough",
        body: "Developing multiple open-source applications - API, React Native App, and React Dashboard  - for upcoming and future hackathons for up 300 participants at the University of Toronto Scarborough.",
        href: "https://github.com/orgs/hackthevalley"
      },
      {
        header: "HowlPlay",
        sideheader: "Engineer",
        subheader: "January 2018 - May 2018, University of Toronto Scarborough",
        body: "Collaborated in a team of 8 to create an open-source, real-time quiz game targeted towards hackathons. This was made in four applications - API for quiz information, websocket server to run the game instance, React app for quiz management, and React app quiz participation.",
        href: "https://github.com/orgs/wolfbeacon"
      }
    ]
  }
]
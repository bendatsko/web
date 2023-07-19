module.exports = {
  siteUrl: 'https://datsko.dev/',
  title: 'Ben Datsko',
  description: 'about | ben datsko',
  author: 'Ben Datsko',
  introduction: [

    "I am a third-year undergraduate studying Computer Science and Electrical Engineering at the [University of Michigan](https://ece.engin.umich.edu/).",

    "As a researcher in the [Michigan Integrated Circuits Lab (MICL)](https://micl.engin.umich.edu/) under the mentorship of [Dr. Michael Flynn](https://www.mpflynngroup.com/), I assist in developing high-performance mixed-signal integrated circuits. I also perform software-hardware integration with Verilog and FPGA, and write embedded software in C/C++ for RF and VLSI technologies.",

    'Outside of academia, I have applied my knowledge in Java, Python, and JavaScript to a variety of projects. These include a highly-functional race simulation web platform for the [University of Michigan Solar Car Team](https://www.solarcar.engin.umich.edu/) and adventure games made in collaboration with Mojang Studios for Microsoft\'s [Minecraft Java Realms](https://minecraft.net/en-us/realms/content-creator).',
    "I'm always looking for creative souls to collaborate with. If you'd like to work on a project together, don't hesitate to [shoot me an email](mailto:bdatsko@umich.edu)."

  ],
  avatar: 'avatar.jpg',
  professions: [
    'Software Developer',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  // birthday: 'Jun 14, 2003',
  location: 'Ann Arbor, MI',
  email: 'bdatsko@umich.edu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
      || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'projects',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: 'https://www.linkedin.com/in/bendatsko/',
      icon: ['fab', 'linkedin'],
    },
    {
      url: 'https://github.com/bendatsko/',
      icon: ['fab', 'github'],
    },
    {
      url: 'https://instagram.com/bendatsko/',
      icon: ['fab', 'instagram'],
    }
    // {
    //   url: './resume.pdf',
    //   icon: ['fab', 'file-user'],
    // },

  ],
  wakatime: {
    username: 'tcimba',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
      || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Aug 2021 - Predicted May 2025',
      icon: 'university',
      title: 'B.S.E. Computer Science and Engineering',
      location: 'University of Michigan College of Engineering, Ann Arbor, MI',
    },
    {
      date: '',
      icon: 'university',
      title: 'Electrical Engineering Minor',
      location: 'University of Michigan College of Engineering, Ann Arbor, MI',
    }
  ],
  interests: [
    {
      icon: 'camera',
      title: 'Photography',
    },
    {
      icon: 'swimmer',
      title: 'Swimming',
    },
    {
      icon: 'mountains',
      title: 'Climbing',
    },
    {
      icon: 'plane',
      title: 'Traveling',
    },
  ],
  experience: [
    {
      title: 'Advised Research',
      position: 'left',
      data: [
        {
          date: '2022 - Present',
          title: 'Undergraduate Researcher',
          location: 'University of Michigan Integrated Circuits Lab',
          // description: '**Mixed-Signal and Integrated Circuits:** Creating low-noise power supplies, designing low-noise ADCs/DACs, and investigating FPGA-based ML acceleration.',
        },
      ],
    }, {
      title: 'Work Experience',
      position: 'right',
      data: [
        {
          date: '2021 - 2022',
          title: 'Swim Coach',
          location: 'Great Lakes Athletic Club',
          // description: '**Teaching:** Created and executed training regimen for swimmers aged 8-18; hosted regional competitions and events',
        },
        {
          date: '2021 - 2021',
          title: 'Information Technology Intern',
          location: 'Hurley Medical Center',
          // description: '**IT Services:** Performed risk management and hardware repair; automated disk imaging, encryption, and network-wide security patches',
        },
        {
          date: '2019 - 2021',
          title: 'Microsoft Partner & Realms Mapmaker',
          location: 'Microsoft & Mojang Studios',
          // description: '**Game Development:** Developed two licensed games for Minecraft Realms and Minecraft Marketplace, generating 160,000 downloads & 11MM+ views',
        },
      ],
    }, {
      title: 'Project Teams',
      position: 'left',
      data: [
        {
          date: '2022 - Present',
          title: 'Software Developer & Race Strategist',
          location: 'University of Michigan Solar Car Team',
          // description: '**Race Simulation:** Created web platform to manage race simulations, with React, MongoDB, ExpressJS, and Flask.',
        },
        {
          date: '2021 - 2022',
          title: 'Firmware Developer',
          location: 'Michigan Aeronautical Science Association (MASA)',
          // description: '**Rocketry Flight Systems:** Developing flight systems firmware in C/C++ for liquid oxygen (LOX) propulsion',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Aug 2022',
      title: 'William Clay Ford, Jr. Scholarship',
    },
    {
      date: 'Jun 2021',
      title: 'International Baccalaureate Diploma',
    },
    {
      date: 'Apr 2021',
      title: 'Michigan Seal of Biliteracy in Mandarin Chinese',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};

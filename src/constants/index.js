export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: '3D SAAS T-SHIRT',
      desc: ' Developed an AI-powered platform enabling customers to customize shirt designs from any le format and seamlessly change shirt colors, resulting in a 45% increase in customer satisfaction and a 30% rise in sales',
      subdesc:
        'Built as a unique Software-as-a-Service app with ReactJs, Tailwind CSS, TypeScript, ThreeJs',
      href: 'https://6511d6bfd106180d1476766b--snazzy-starlight-539ac3.netlify.app',
      texture: '/textures/project/3D-SHIRT.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Three Js',
          path: '/assets/ThreeJs.png',
        },
      ],
    },
    {
      title: 'Food-Cart',
      desc: 'This dynamic food cart website is built using HTML, CSS, JavaScript, React.js, and Node.js. It provides a user-friendly platform where customers can browse, select, and purchase food items according to their taste preferences',
      subdesc:
        'Added newest features with paypal support as well as email supports',
      href: 'https://foodie-cart-one.vercel.app',
      texture: '/textures/project/food-cart.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {


    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'AWS',
      pos: 'InternShip',
      duration: 'Feb 2024 - April 2024',
      title: " Proficient in AWS services, including AWS Amplify, S3, IAM, EC2, CloudWatch, and AWS Lambda. Successfully completed an internship at Internship Studio, gaining hands-on experience in cloud computing and deployment.",
      icon: '/assets/aws.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: ' Pinnacle consulting',
      pos: ' SAP ISU Test Engineer',
      duration: 'June2024- Present',
      title: " SAP ISU is a comprehensive solution designed for utility companies, addressing various needs such ascustomer service, billing, and contract management.Con gured and tested customer interactions, ensuring seamless integration with SAP ISU for e cient CRM management.Created and executed test cases for billing, metering, and customer service processes within SAP ISU..Tested and validated real-time data processing, ensuring SAP S/4HANA integrates e ectively withutility industry requirements.SKILLS:- SAP C4C, SAP ISU, SAP S/4HANA",
      icon: '/assets/sap.png',
      animation: 'clapping',
    },
    {
      "id": 3,
      "name": "Software Development Role",
      "pos": "Software Developer",
      "duration": "Present",
      "title": "Currently focused on transitioning into a Software Developer role, leveraging my expertise in both frontend and backend technologies to build scalable, high-performance applications.",
      "icon": "/assets/coding.jpeg",
      "animation": "salute"
    }
  ];
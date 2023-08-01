export const jobCategories = [
  "Software Development",
  "Data Science",
  "Web Development",
  "Mobile App Development",
  "Product Management",
];

export const comments = [
  {
    id: 1,
    content: "This is a great article!",
    author: "JohnDoe",
    timestamp: "2023-07-31 12:00:00",
    replies: [
      {
        id: 101,
        content: "Thanks for your comment!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 12:05:00",
      },
      {
        id: 102,
        content: "Glad you liked it!",
        author: "AnotherUser",
        timestamp: "2023-07-31 12:10:00",
      },
    ],
    likes: 15,
  },
  {
    id: 2,
    content: "Nice work, keep it up!",
    author: "JaneSmith",
    timestamp: "2023-07-31 12:30:00",
    replies: [
      {
        id: 201,
        content: "Thank you, Jane!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 12:32:00",
      },
    ],
    likes: 8,
  },
  {
    id: 3,
    content: "I have a question about this topic.",
    author: "Questioner123",
    timestamp: "2023-07-31 14:00:00",
    replies: [
      {
        id: 301,
        content: "Sure, feel free to ask!",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 14:05:00",
      },
      {
        id: 302,
        content: "I'm curious too, waiting for the answer!",
        author: "CuriousMind",
        timestamp: "2023-07-31 14:10:00",
      },
    ],
    likes: 12,
  },
  {
    id: 4,
    content: "Well written! I learned a lot.",
    author: "LearningLover",
    timestamp: "2023-07-31 15:00:00",
    replies: [],
    likes: 20,
  },
  {
    id: 5,
    content: "Could you provide more examples?",
    author: "ExampleSeeker",
    timestamp: "2023-07-31 16:00:00",
    replies: [
      {
        id: 501,
        content: "Certainly! Here's an additional example...",
        author: "ArticleAuthor",
        timestamp: "2023-07-31 16:05:00",
      },
    ],
    likes: 5,
  },
];

export const jobs = [
  {
    _id: "1",
    title: "Graphic Designer",
    category: "Design",
    reportsTo: "Project Manager",
    employment: "Paid internship",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Uganda",
    details: {
      responsibilities: [
        "Illustrate written concepts by design",
        "Plan and study concepts",
        "Create a variety of company work",
        "Review layouts & improvements",
        "Digitally market company products & services",
        "Visit clients and offer different services",
        "Communicate to different audiences visually",
        "Additional skills are a plus 1",
      ],
      requirements: [
        "Creative ,curious and a good team player",
        "Digital Media experience",
        "Experience in seo, visual story telling",
        "Experience in motion and design",
        "Super interpersonal skills, listening & more",
        "Photoshop, illustrator & video editing & more",
        "Competency in Microsoft applications",
        "Clear understanding of marketing, production, corporate identity, packaging, advertisements & multi-media design",
        "A bachelor degree in design or marketing or a related field",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
  {
    _id: "2",
    title: "Junior developer",
    category: "Software development",
    reportsTo: "Product Designer",
    employment: "Paid internship",
    terms: "Fixed contract [3-12months]",
    location: "Kampala, Uganda",
    details: {
      responsibilities: [
        "Writing & maintaining code",
        "Bug fixing",
        "Create small creative solutions",
        "Work with developing manager in all aspects",
        "Monitor Technical performance of systems",
        "Conduct development tests",
        "Gather customer feedback about program functionality",
        "Customer care & technical assistance",
      ],
      requirements: [
        "Creative curiosity",
        "Clear execution knowledge",
        "Sound programming experience",
        "Excellent communication skills",
        "Bachelor’s degree in computer science",
        "Prior experience in IOS & Android development",
        "Clear practical Coding knowledge React Js, next Js , node Js front & backend",
        "Clear knowledge of email systems & Microsoft office software",
        "Good team player",
        "Quick to learn new software & technologies",
        "Good Digital experience knowledge",
        "Any extra skills are a plus 1",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "1 month probation",
    closingDate: "21st August 2023.",
  },
  {
    _id: "3",
    title: "Sales person",
    category: "Sales",
    reportsTo: "Director of sales",
    employment: "Part time",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Ntinda & Entebbe",
    details: {
      responsibilities: [
        "Generate both online and offline leads",
        "Door-to-door sales",
        "Develop digital communities",
        "Promote company programs",
        "Negotiate with clients and answer questions",
        "Attend events for brand promotions",
        "Visit clients and offer different services",
        "Find out different client needs",
        "Additional skills are a plus 1",
      ],
      requirements: [
        "Creative, curious and a good team player",
        "Digital Media experience",
        "Experience in sales",
        "Super interpersonal skills, quick rapport",
        "Committed to excellent customer service",
        "Competency in Microsoft applications",
        "Excellent written and verbal skills",
        "A bachelor degree in business, agriculture or marketing or a related field",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
  {
    _id: "4",
    title: "Regional head of Sales",
    category: "Sales",
    reportsTo: "Manager",
    employment: "Paid internship",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Ntinda & Entebbe",
    details: {
      responsibilities: [
        "Recommend service and product enhancement to improve the sales potential and customer satisfaction",
        "Build digital communities",
        "Ensure the delivery of targets through individual recognition, performance review, people management and reward",
        "Meet with customers to discuss their evolving needs and to assess the quality of the company’s relationship with them",
        "Determine the company’s gross-profit and annual unit plans by analyzing trends and results and implementing marketing strategies",
        "Develop field sales action plans to facilitate the implementation of the regional sales programs",
        "Maintain technical and professional knowledge by reviewing professional publications, participating in professional societies and establishing personal networks",
        "Plan for the achievement of individual and divisional targets in alignment with the strategies and policies of the company",
        "Establish sales objectives by projecting expected sales volume and forecasting and developing sales quotas for territories and the region",
        "Keep current with economic indicators, changing trends, supply and demand and competitors to maintain sales volume and product mix.",
        "Positively contribute to team effort by accomplishing related results",
        "Provide the necessary support to sales associates to enable them to generate market leads and close new deals",
        "Develop and implement new programs, sales initiatives and strategies to capture key demographics",
        "Document customer interactions and maintain data related to activities, accounts and partners",
        "Design cross-selling programs and campaigns",
        "Ensure the effectiveness of cross-selling activities by guiding employees",
        "Uplift the regional sales volume to its possible best",
        "Organize training for new staff digitally",
        "Develop and review long- and short-term sales strategies",
        "Develop and maintain channels between product developers and resellers",
        "Participate in interviews and the processes of recruiting new employees",
      ],
      requirements: [
        "Digital knowledge/ experience",
        "Ability to multitask",
        "Strong organizational skills",
        "Excellent analytical skills",
        "Excellent customer service",
        "Creative problem-solving skills",
        "Sales planning",
        "Coaching skills",
        "Market knowledge",
        "Staffing skills",
        "Meeting sales goals",
        "Selling to customer needs",
        "Budget development",
        "Process management",
        "Building relationships",
        "Motivation",
        "Excellent communication skills",
        "Negotiation",
        "Presentation skills",
        "Emphasizing excellence",
        "Profitability management",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
  {
    _id: "5",
    title: "Regional Manager",
    category: "Management",
    reportsTo: "CEO",
    employment: "Paid internship",
    terms: "Fixed contract [3-6months]",
    location: "Kampala, Ntinda & Entebbe",
    details: {
      responsibilities: [
        "Achieving business goals and revenue targets",
        "Overseeing daily operations, managing budgets, and setting performance objectives",
        "Recruiting, training, and supporting general managers as well as conducting regular performance appraisals",
        "Handling corporate sales & clients",
        "Developing and implementing business, marketing, and advertising plans",
        "Managing internal and external stakeholder relations and negotiating contracts",
        "Planning, evaluating, and optimizing operations to be efficient and cost-effective",
        "Ensuring products and services comply with regulatory and quality standards",
        "Ensuring company standards and procedures are followed",
        "Preparing and presenting monthly, quarterly, and annual statements, analyses, and reports of operations and finances",
        "Dealing with escalated customer issues, incident reports, and legal actions",
      ],
      requirements: [
        "Digital knowledge/ experience",
        "Accounting experience",
        "Sales & marketing experience",
        "Experience in leadership",
        "Excellent communication skills, both verbal and written",
        "Proficiency in Microsoft Office, with CRM systems, and project management tools",
        "Excellent prioritization and decision-making skills",
        "Ability to multitask and work efficiently under pressure",
        "Strong analytical and problem-solving skills",
      ],
    },
    salary: "Fixed payment & commission based",
    condition: "NAN",
    closingDate: "21st August 2023.",
  },
];

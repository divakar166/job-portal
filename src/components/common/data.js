const jobs = [
    {
        id: "1",
        title: "Software Engineer",
        company: {
            id: "1",
            name: "SoftPro Tech",
            email: "careers@software.tech",
            website: "softpro.tech",
            description: "Leading software development company.",
            registration_date: "2024-06-30T12:00:00Z",
            job_opportunities_posted: 1,
            candidates_hired: 30,
        },
        posted_on: "2024-07-01T12:00:00Z",
        work_type: "Work From Office",
        location: "New York, NY",
        description: "Software development.",
        job_type: "Full Time",
        start_date: "2024-07-05T12:00:00Z",
        salary_or_stipend: "30",
        apply_by: "2024-07-04T12:00:00Z",
        applicants_count: 302,
        skills_required: ["Python", "ReactJS", "Java"],
        openings: 3,
        perks: ["Flexible work hour"],
    },
    {
        id: "2",
        title: "Backend Developer",
        company: {
            id: "2",
            name: "TechSoft Solutions",
            email: "careers@techsoft.com",
            website: "techsoft.com",
            description: "Innovative tech solutions provider.",
            registration_date: "2023-12-01T12:00:00Z",
            job_opportunities_posted: 10,
            candidates_hired: 100,
        },
        posted_on: "2024-06-25T12:00:00Z",
        work_type: "Remote",
        location: "San Francisco, CA",
        description: "Building scalable backend systems.",
        job_type: "Full Time",
        start_date: "2024-07-10T12:00:00Z",
        salary_or_stipend: "4.8",
        apply_by: "2024-07-05T12:00:00Z",
        applicants_count: 200,
        skills_required: ["Node.js", "Express", "MongoDB"],
        openings: 2,
        perks: ["Remote work", "Health insurance"],
    },
    {
        id: "3",
        title: "Frontend Developer",
        company: {
            id: "3",
            name: "WebCorp",
            email: "careers@webcorp.com",
            website: "webcorp.com",
            description: "Creating stunning web experiences.",
            registration_date: "2024-01-15T12:00:00Z",
            job_opportunities_posted: 7,
            candidates_hired: 45,
        },
        posted_on: "2024-06-28T12:00:00Z",
        work_type: "Hybrid",
        location: "Austin, TX",
        description: "Developing dynamic user interfaces.",
        job_type: "Full Time",
        start_date: "2024-07-15T12:00:00Z",
        salary_or_stipend: "6",
        apply_by: "2024-07-10T12:00:00Z",
        applicants_count: 150,
        skills_required: ["React", "Redux", "CSS"],
        openings: 4,
        perks: ["Hybrid work", "Stock options"],
    },
    {
        id: "4",
        title: "Data Scientist",
        company: {
            id: "4",
            name: "DataMax",
            email: "careers@datamax.com",
            website: "datamax.com",
            description: "Empowering data-driven decisions.",
            registration_date: "2023-05-10T12:00:00Z",
            job_opportunities_posted: 15,
            candidates_hired: 80,
        },
        posted_on: "2024-06-30T12:00:00Z",
        work_type: "Work From Office",
        location: "Boston, MA",
        description: "Analyzing complex data sets.",
        job_type: "Full Time",
        start_date: "2024-07-20T12:00:00Z",
        salary_or_stipend: "9",
        apply_by: "2024-07-15T12:00:00Z",
        applicants_count: 250,
        skills_required: ["Python", "Machine Learning", "SQL"],
        openings: 5,
        perks: ["Health insurance", "Retirement plan"],
    },
    {
        id: "5",
        title: "UI/UX Designer",
        company: {
            id: "5",
            name: "DesignHub",
            email: "careers@designhub.com",
            website: "designhub.com",
            description: "Creating user-friendly designs.",
            registration_date: "2023-08-22T12:00:00Z",
            job_opportunities_posted: 8,
            candidates_hired: 60,
        },
        posted_on: "2024-06-22T12:00:00Z",
        work_type: "Remote",
        location: "Seattle, WA",
        description: "Designing intuitive user interfaces.",
        job_type: "Full Time",
        start_date: "2024-07-18T12:00:00Z",
        salary_or_stipend: "12",
        apply_by: "2024-07-09T12:00:00Z",
        applicants_count: 180,
        skills_required: ["Figma", "Sketch", "Adobe XD"],
        openings: 3,
        perks: ["Remote work", "Flexible schedule"],
    },
    {
        id: "6",
        title: "DevOps Engineer",
        company: {
            id: "6",
            name: "CloudWorks",
            email: "careers@cloudworks.com",
            website: "cloudworks.com",
            description: "Streamlining cloud operations.",
            registration_date: "2023-06-01T12:00:00Z",
            job_opportunities_posted: 5,
            candidates_hired: 50,
        },
        posted_on: "2024-06-18T12:00:00Z",
        work_type: "Work From Office",
        location: "Chicago, IL",
        description: "Managing cloud infrastructure.",
        job_type: "Full Time",
        start_date: "2024-07-10T12:00:00Z",
        salary_or_stipend: "15",
        apply_by: "2024-07-05T12:00:00Z",
        applicants_count: 220,
        skills_required: ["AWS", "Docker", "Kubernetes"],
        openings: 2,
        perks: ["Health insurance", "Gym membership"],
    },
    {
        id: "7",
        title: "AI Engineer",
        company: {
            id: "7",
            name: "AIMinds",
            email: "careers@aiminds.com",
            website: "aiminds.com",
            description: "Pioneering AI solutions.",
            registration_date: "2023-07-15T12:00:00Z",
            job_opportunities_posted: 12,
            candidates_hired: 70,
        },
        posted_on: "2024-07-03T12:00:00Z",
        work_type: "Remote",
        location: "Denver, CO",
        description: "Developing AI algorithms.",
        job_type: "Full Time",
        start_date: "2024-07-25T12:00:00Z",
        salary_or_stipend: "7",
        apply_by: "2024-07-20T12:00:00Z",
        applicants_count: 140,
        skills_required: ["Python", "TensorFlow", "PyTorch"],
        openings: 3,
        perks: ["Remote work", "Stock options"],
    },
    {
        id: "8",
        title: "Marketing Manager",
        company: {
            id: "8",
            name: "MarketGuru",
            email: "careers@marketguru.com",
            website: "marketguru.com",
            description: "Leading marketing strategies.",
            registration_date: "2023-03-12T12:00:00Z",
            job_opportunities_posted: 9,
            candidates_hired: 40,
        },
        posted_on: "2024-07-04T12:00:00Z",
        work_type: "Hybrid",
        location: "Los Angeles, CA",
        description: "Managing marketing campaigns.",
        job_type: "Full Time",
        start_date: "2024-07-30T12:00:00Z",
        salary_or_stipend: "19",
        apply_by: "2024-07-25T12:00:00Z",
        applicants_count: 160,
        skills_required: ["SEO", "Content Marketing", "Google Analytics"],
        openings: 1,
        perks: ["Hybrid work", "Paid time off"],
    },
    {
        id: "9",
        title: "Network Engineer",
        company: {
            id: "9",
            name: "NetSecure",
            email: "careers@netsecure.com",
            website: "netsecure.com",
            description: "Securing network infrastructures.",
            registration_date: "2023-02-25T12:00:00Z",
            job_opportunities_posted: 6,
            candidates_hired: 55,
        },
        posted_on: "2024-06-29T12:00:00Z",
        work_type: "Work From Office",
        location: "Houston, TX",
        description: "Maintaining network security.",
        job_type: "Full Time",
        start_date: "2024-07-20T12:00:00Z",
        salary_or_stipend: "8",
        apply_by: "2024-07-15T12:00:00Z",
        applicants_count: 190,
        skills_required: ["Cisco", "Firewall", "VPN"],
        openings: 4,
        perks: ["Health insurance", "Retirement plan"],
    },
    {
        id: "10",
        title: "Cybersecurity Analyst",
        company: {
            id: "10",
            name: "SecureIT",
            email: "careers@secureit.com",
            website: "secureit.com",
            description: "Protecting digital assets.",
            registration_date: "2023-11-30T12:00:00Z",
            job_opportunities_posted: 7,
            candidates_hired: 75,
        },
        posted_on: "2024-07-02T12:00:00Z",
        work_type: "Remote",
        location: "Miami, FL",
        description: "Monitoring security threats.",
        job_type: "Full Time",
        start_date: "2024-07-22T12:00:00Z",
        salary_or_stipend: "24",
        apply_by: "2024-07-18T12:00:00Z",
        applicants_count: 230,
        skills_required: ["Security", "SIEM", "Incident Response"],
        openings: 3,
        perks: ["Remote work", "Health insurance"],
    },
    {
        id: "11",
        title: "Product Manager",
        company: {
            id: "11",
            name: "ProdMaster",
            email: "careers@prodmaster.com",
            website: "prodmaster.com",
            description: "Leading product development.",
            registration_date: "2024-01-20T12:00:00Z",
            job_opportunities_posted: 5,
            candidates_hired: 45,
        },
        posted_on: "2024-07-01T12:00:00Z",
        work_type: "Hybrid",
        location: "Atlanta, GA",
        description: "Managing product lifecycles.",
        job_type: "Full Time",
        start_date: "2024-07-28T12:00:00Z",
        salary_or_stipend: "40",
        apply_by: "2024-07-22T12:00:00Z",
        applicants_count: 210,
        skills_required: ["Product Management", "Agile", "Scrum"],
        openings: 2,
        perks: ["Hybrid work", "Stock options"],
    },
    {
        id: "12",
        title: "Systems Administrator",
        company: {
            id: "12",
            name: "SysAdmin Solutions",
            email: "careers@sysadminsolutions.com",
            website: "sysadminsolutions.com",
            description: "Maintaining IT infrastructure.",
            registration_date: "2023-04-15T12:00:00Z",
            job_opportunities_posted: 8,
            candidates_hired: 65,
        },
        posted_on: "2024-06-20T12:00:00Z",
        work_type: "Work From Office",
        location: "Phoenix, AZ",
        description: "Managing system operations.",
        job_type: "Full Time",
        start_date: "2024-07-15T12:00:00Z",
        salary_or_stipend: "32",
        apply_by: "2024-07-10T12:00:00Z",
        applicants_count: 170,
        skills_required: ["Linux", "Windows Server", "Networking"],
        openings: 3,
        perks: ["Health insurance", "Paid time off"],
    },
];

export { jobs };

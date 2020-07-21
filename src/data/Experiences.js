const Experiences = [
   
    {
        jobTitle: 'Developer ',
        note: '(Industry sponsored student project)',
        company: 'BuiltSpace Technologies Corp',
        location: 'Vancouver, BC, Canada',
        startDate: new Date(2020, 3),
        endDate: new Date(2020, 4),
        description: [
            'Worked in a 5-person team to develop a mobile application for technicians to fill inspection report',
            'Designed the solutions by utilizing react native and realm database',


        ]
    },
    {
        jobTitle: 'Developer ',
        note: '(Industry sponsored student project)',
        company: 'TutorBuddy',
        location: 'Victoria, BC, Canada',
        startDate: new Date(2019, 8),
        endDate: new Date(2019, 11),
        links: [

           { label: 'Live Demo', link: 'https://tutorbuddy-uvic.herokuapp.com', icon: 'globe' },

        ],
        description: [
            'Worked in a 5-person team and participated weekly meeting with an industry client',
            'Designed and implemented database scheme for course, tutor, and tutee info',
            'Managed project structure by utilizing ExpressJS, mongoDB ,Ejs and Bootstrap',
        ]
    },
    {
        jobTitle: 'Peer Tutor',
        company: 'British Columbia Institute of Technology',
        location: 'Burnaby, BC, Canada',
        startDate: new Date(2019, 4),
        endDate: new Date(2020, 4),
        description: [
            'Tutor students in subjects such as in Java, C, C++ and web development',
            'Clear students’ confusion of course concepts in data communication and Algorithm'
        ]
    }
]

export default Experiences;


const projectList = [
    {
       
        startDate: new Date(2020, 4),
        endDate: new Date(2020, 5),
        role: 'Developer',
        category: 'Group Web App',
        projectName: 'Project Management Tool',
        teckStack: [
            { techName: 'SpringBoot', desc: null },
            { techName: 'Angular 8.0', desc: null },
            { techName: 'MySQL', desc: null },
            { techName: 'Spring data jpa', desc: null },
            { techName: 'Spring security', desc: null },
            { techName: 'Spring task', desc: null },
            { techName: 'Spring mvc', desc: null },
            { techName: 'AWS', desc: null },
            { techName: 'Swagger', desc: null },
            { techName: 'Postman', desc: null },
            { techName: 'Java', desc: null },

        ],
        imgs: [],
        links: [
            { label: 'Live Demo', link: 'http://100.25.30.63/', icon: 'globe' },
        ],
        showOnResume: true,
        showOnProject: true,
       
        resumeOverview: [
            'Built web app targeting median-size company to track projects,workpackages,employees and timesheets',
            'Built an Angular app that implements JWT, Form validation, routing, feature module,interceptor',
            'Built a Spring-boot app that implements spring security, spring jpa, spring mvc,spring task',
        ]
    },
   
    // book app
    {
        
        startDate: new Date(2019, 9),
        endDate: new Date(2019, 10),
        role: 'Developer',
        category: 'Group Android App',
        projectName: 'BookApp',
        teckStack: [
            { techName: 'Java', desc: null },
            { techName: 'Firebase', desc: null },
            { techName: 'Android studio', desc: null },
        ],
        imgs: [],
        links: [
            { label: 'Repo', link: 'https://github.com/joecof/BookApp', icon: 'github alternate' },

        ],
        showOnResume: true,
        showOnProject: true,
       
        resumeOverview: [
            'Developed the mobile application in Android Studios using Java, XML, Firebase Real-Time DB.',
            'Worked in a 3-person team to develop an android application for booking appointment with recreational center'


        ]
    },
     // to do list
     {
        
        startDate: new Date(2019, 7),
        endDate: new Date(2019, 8),
        role: 'Developer',
        category: 'Personal Web App',
        projectName: 'ToDoList',
        teckStack: [
            { techName: 'ExpressJs', desc: null },
            { techName: 'EJS', desc: null },
            { techName: 'MongoDB', desc: null },
            { techName: 'Session/Cookie', desc: null },
            { techName: 'Heroku', desc: null },      
            { techName: 'Postman', desc: null },
            { techName: 'Bootstrap', desc: null },
            { techName: 'Jquery', desc: null },
            { techName: 'Ajax', desc: null },
            { techName: 'Javascript', desc: null },

        ],
        imgs: [],
        links: [
            { label: 'Repo', link: 'https://github.com/Ivan1120/todoList-MongoDB', icon: 'github alternate' },
            { label: 'Live Demo', link: 'https://todolist-mongodb.herokuapp.com/', icon: 'globe' },
        ],
        showOnResume: true,
        showOnProject: true,
       
        resumeOverview: [
            'Utilized ExpressJS to perform CURD, login, and register operation',
            'Developed web application using jQuery, Ajax and ejs',
            'Utilized Bootstrap and implemented responsive design',
        ]
    },
    // chess game
    {
        
        startDate: new Date(2019, 2),
        endDate: new Date(2019, 3),
        role: 'Developer',
        category: 'Personal Java App',
        projectName: 'Chess game',
        teckStack: [
           
         
        ],
        imgs: [],
        links: [
            { label: 'Repo', link: 'https://github.com/Ivan1120/JavaSE-Chess', icon: 'github alternate' },

        ],
        showOnResume: true,
        showOnProject: true,
    
        resumeOverview: [
            'Designed chess game by applying OOP principle(Encapsulation, Inherience, Polymorphism)',


        ]
    }
    

]

export default projectList;

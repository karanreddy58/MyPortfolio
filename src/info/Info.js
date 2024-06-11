import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Karan",
    lastName: "Reddy",
    initials: "</>", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Senior Full Stack Developer at Do it Best Corp"
        },
        {
            emoji: "📧",
            text: "karanreddyj1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/karanreddy58",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/karan-reddy-b43941216/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/karanreddy58",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `I'm Karan, a passionate software engineer with a Master's in Computer Science from Governors State University. Currently, I work as a Senior Software Engineer at Do It Best Corp, specializing in modernizing applications and optimizing data processing. My skills include JavaScript, React, C#, Kafka, and OpenShift. I enjoy working on user-friendly applications and real-time data systems. Let's connect and build something amazing together!`,
    skills:
        {
            proficientWith: ['C#', 'Node.js', 'React', 'Kafka', 'Java', 'JavaScript', 'Git', 'GitHub', 'CSS3', 'Aurelia.js', 'Spring Boot', 'Bootstrap', 'MSSQL', 'GraphQL', 'Node.js', 'Jest','Cypress'],
            exposedTo: ['Python', 'Azure', 'AWS', 'Figma', 'OpenShift', 'UI/UX', 'Strimzi', 'Kafka Streams'],

        }
    ,
    hobbies: [
        {
            label: 'Reading Books',
            emoji: '📖'
        },
        {
            label: 'UI/UX research',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project management using Graphql",
            live: "/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/karanreddy58/ProjectManagement_GraphQL", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Inventory management system using SpringBoot",
            live: "/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/eliabhishek/top-to-top", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Airbnb Clone",
            source: "https://github.com/karanreddy58/airbnb",
            image: mock2
        },
        {
            title: "Spring Boot Microservices and service Discovery",
            source: "https://github.com/karanreddy58/springboot-movie-service",
            image: mock4
        }
    ]
}
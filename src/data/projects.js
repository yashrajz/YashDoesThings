export const projects = [
    {
        slug: 'mizora',
        name: 'MIZORA',
        category: 'E-COMMERCE',
        status: 'LIVE',
        description: 'A premium matcha e-commerce website with stunning scroll animations and dark minimalist design.',
        tagline: 'Experience the finest Japanese green tea.',
        link: 'https://mizora.vercel.app/',
        github: 'https://github.com/yashrajz/MIZORA',
        image: '/projects/mizora-hero.jpg',
        hoverImage: '/projects/mirora-loading.png',
        cardColor: '#EC4E39', // Vibrant Red-Orange
        tech: ['Next.js', 'React', 'GSAP', 'Framer Motion', 'Stripe'],
        features: [
            {
                title: 'High-Performance Architecture',
                description: 'Built with Next.js for server-side rendering and optimized performance, ensuring fast load times and SEO benefits.'
            },
            {
                title: 'Seamless Payments',
                description: 'Integrated Stripe for secure and smooth payment processing, supporting multiple payment methods.'
            },
            {
                title: 'Immersive Animations',
                description: 'Utilized GSAP and Framer Motion to create complex, scroll-triggered animations that enhance user engagement.'
            },
            {
                title: 'Responsive Design',
                description: 'A mobile-first approach ensuring the site looks and functions perfectly across all device sizes.'
            }
        ],
        challenges: [
            {
                title: 'Complex Animations',
                description: 'Implementing complex scroll-triggered animations without compromising performance or causing jank on lower-end devices.'
            },
            {
                title: 'State Management',
                description: 'Managing global state for the shopping cart and user sessions efficiently across server and client components.'
            }
        ],
        outcome: 'A visually striking and highly functional e-commerce platform that provides an immersive user experience.'
    },
    {
        slug: 'eventhorizon',
        name: 'EventHorizon',
        category: 'FULL-STACK',
        status: 'GitHub',
        description: 'A full-stack event management platform for discovering, submitting, and moderating events.',
        tagline: 'Your gateway to seamless event experiences.',
        github: 'https://github.com/yashrajz/EventHorizon',
        image: '/projects/eventhorizon-hero.png',
        hoverImage: '/projects/eventhorizon-mockup.png',
        tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
        cardColor: '#4353FF', // Vibrant Blue
        features: [
            {
                title: 'Secure Authentication',
                description: ' implemented robust user authentication and role-based access control using JWT and modern security practices.'
            },
            {
                title: 'Event Moderation',
                description: 'A comprehensive workflow for event submission, review, and approval to ensure content quality and safety.'
            },
            {
                title: 'Real-time Updates',
                description: 'Users receive instant notifications and updates about their events and interactions.'
            },
            {
                title: 'Interactive Maps',
                description: 'Integrated maps to help users discover events near them and navigate to venues easily.'
            }
        ],
        challenges: [
            {
                title: 'Scalable Schema',
                description: 'Designing a flexible and scalable database schema in MongoDB to handle diverse event types and user roles.'
            },
            {
                title: 'API Security',
                description: 'Ensuring all API endpoints are secure and protected against unauthorized access and common web vulnerabilities.'
            }
        ],
        outcome: 'A robust platform that simplifies event management for organizers and attendees alike.'
    },
    {
        slug: 'dabbawala',
        name: 'Dabbawala',
        category: 'WEB PLATFORM',
        status: 'LIVE',
        description: 'A North-Indian food delivery platform bringing authentic homemade meals to your doorstep.',
        tagline: 'Order your favorite meal in minutes.',
        link: 'https://dabbawallachunkies.co.in',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '/projects/dabbawala-hero.png',
        hoverImage: '/projects/dabbawalamockups.jpg',
        cardColor: '#FFB900', // Vibrant Yellow/Orange
        features: [
            {
                title: 'Ordering Interface',
                description: 'An intuitive and easy-to-use interface for browsing menus and placing orders quickly.'
            },
            {
                title: 'Live Tracking',
                description: 'Real-time order tracking system allowing customers to see the status of their meal from kitchen to doorstep.'
            },
            {
                title: 'Vendor Dashboard',
                description: 'A dedicated dashboard for efficient vendor management, menu updates, and order processing.'
            },
            {
                title: 'Smart Routing',
                description: 'Optimized route planning algorithms to ensure timely deliveries and maximize efficiency.'
            }
        ],
        challenges: [
            {
                title: 'Real-time Logistics',
                description: 'Coordinating logistics between multiple kitchens and delivery personnel in real-time to prevent delays.'
            },
            {
                title: 'Notification System',
                description: 'Building a reliable notification system to keep users updated on their order status via SMS and in-app alerts.'
            }
        ],
        outcome: 'An efficient delivery network connecting local chefs with hungry customers.'
    },
    {
        slug: 'mora',
        name: 'MORA',
        category: 'MUSIC STREAMING',
        status: 'WIP',
        description: 'A sleek, modern music streaming platform for smooth, distraction-free listening.',
        tagline: 'Your personal soundtrack, simplified.',
        github: 'https://github.com/yashrajz/MORA',
        image: '/projects/mora-hero.png',
        hoverImage: '/projects/mora-song.png',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
        cardColor: '#8E44AD', // Vibrant Purple
        features: [
            {
                title: 'Audio Visualization',
                description: 'Custom audio player featuring real-time waveform visualization for a dynamic listening experience.'
            },
            {
                title: 'Smart Playlists',
                description: 'Personalized playlist generation and recommendations based on user listening habits.'
            },
            {
                title: 'Offline Mode',
                description: 'Background playback capabilities and offline mode support for uninterrupted listening.'
            },
            {
                title: 'Social Sharing',
                description: 'Features allowing users to share tracks and collaborate on playlists with friends.'
            }
        ],
        challenges: [
            {
                title: 'Streaming Quality',
                description: 'Handling audio streaming buffers effectively to ensure gapless playback and high audio quality.'
            },
            {
                title: 'Metadata Integration',
                description: 'Integrating with music metadata APIs to accurately fetch and display song information and album art.'
            }
        ],
        outcome: 'A beautiful, minimalist music player that puts the listening experience first.'
    },
    {
        slug: 'brew-bean',
        name: 'Brew & Bean',
        category: 'BUSINESS WEBSITE',
        status: 'WIP',
        description: 'A static website for a neighborhood coffee shop focused on quality, community, and fair trade.',
        tagline: 'Where every cup tells a story.',
        github: 'https://github.com/yashrajz/BrewBean',
        link: 'https://github.com/yashrajz/BrewBean',
        image: '/projects/brew-bean-hero.png',
        hoverImage: '/projects/brew-bean-mockup.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
        cardColor: '#27AE60', // Vibrant Green
        features: [
            {
                title: 'Aesthetic Design',
                description: 'A modern, visually appealing hero section and layout that captures the brand\'s essence.'
            },
            {
                title: 'Digital Menu',
                description: 'Interactive menu display allowing customers to easily browse offerings and prices.'
            },
            {
                title: 'Location Info',
                description: 'Clear contact and location information integrated with maps for easy accessibility.'
            },
            {
                title: 'Performance',
                description: 'Optimized as a fast-loading static site to ensure a smooth user experience on all devices.'
            }
        ],
        challenges: [
            {
                title: 'Brand Identity',
                description: 'Creating a unique and cohesive brand identity using only vanilla CSS without reliance on frameworks.'
            },
            {
                title: 'Cross-browser Support',
                description: 'Ensuring consistent design and functionality across different web browsers and legacy versions.'
            }
        ],
        outcome: 'An inviting digital presence that perfectly captures the cozy atmosphere of the physical shop.'
    }
];

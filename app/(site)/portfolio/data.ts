export interface PortfolioInterface {
    name: string,
    type: string,
    desc: string,
    keyPoints: string[]
    link: string
    siteBlocked?: boolean

}

const PortfolioData: PortfolioInterface[] = [
    {
        "name": "Catclub",
        "type": "Website & Web Application",
        "desc": "Catclub is a comprehensive platform designed to aid users in preparing for the CAT exam. It offers an extensive question bank, interactive forums, realistic mock tests, error logs for tracking progress, and a user-friendly interface with personalized progress tracking.",
        "keyPoints": [
            "Extensive question bank",
            "Interactive forums",
            "Realistic mock tests",
            "Error logs for tracking",
            "User-friendly interface",
            "Personalized progress tracking"
        ],
        "link": "https://www.catclub.in/"
    },
    {
        "name": "Taxmechanic Appointment System",
        "type": "Web Application",
        "desc": "Taxmechanic Appointment System is an advanced appointment system for tax firms. It features a mailing system for appointments, Google Calendar integration, Google Sheets integration, a user-friendly dashboard, enhanced client management, and seamless scheduling.",
        "keyPoints": [
            "Mailing system for appointments",
            "Google Calendar integration",
            "Google Sheets integration",
            "User-friendly dashboard",
            "Enhanced client management",
            "Seamless scheduling"
        ],
        "link": "https://taxmechanic-appointment.vercel.app/"
    },

    {
        "name": "Wear Heroic",
        "type": "Ecommerce Website",
        "desc": "Wear Heroic is an e-commerce platform powered by WordPress. It offers a diverse range of clothing options, a user-friendly interface, secure online transactions, responsive design, regularly updated inventory, and a seamless shopping experience.",
        "keyPoints": [
            "Powered by WordPress",
            "Diverse clothing options",
            "User-friendly interface",
            "Secure online transactions",
            "Responsive design",
            "Regularly updated inventory"
        ],
        "link": "https://wearheroic.in/"
    },
    {
        "name": "Futurechaos",
        "type": "Ecommerce Website",
        "desc": "Futurechaos is a WordPress-based ecommerce platform specializing in selling men's t-shirts. It offers a diverse collection of men's t-shirts, a user-friendly interface, secure online transactions, responsive design, regularly updated inventory, and a seamless shopping experience.",
        "keyPoints": [
            "Diverse collection of men's t-shirts",
            "User-friendly interface",
            "Secure online transactions",
            "Responsive design",
            "Regularly updated inventory",
            "Seamless shopping experience"
        ],
        "link": "https://futurechaos.in/"
    },
    {
        "name": "Bookman",
        "type": "Ecommerce Website",
        "desc": "Bookman is a WordPress-based ecommerce platform specializing in selling books. It offers a wide variety of books, a user-friendly interface, secure online transactions, responsive design, regularly updated inventory, and a seamless shopping experience.",
        "keyPoints": [
            "Wide variety of books available",
            "User-friendly interface",
            "Secure online transactions",
            "Responsive design",
            "Regularly updated inventory",
            "Seamless shopping experience"
        ],
        "link": "https://bookmanbooks.com/"
    }, {
        "name": "Amrapali Diagnostics",
        "type": "Website",
        "desc": "Amrapali Diagnostics is dedicated to providing cutting-edge health services and facilities tailored to your needs. Book now for expert care and advanced diagnostics.",
        "keyPoints": [
            "Book appointment feature",
            "Consultation based on prescription",
            "Expert care",
            "Advanced diagnostics",
            "Tailored to your needs",
            "Comprehensive health solutions"
        ],
        "link": "https://amrapalidiagnostics.com/",
        "siteBlocked": true
    },
]


export default PortfolioData;
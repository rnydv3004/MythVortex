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
        name: "7 Sky Decor",
        type: "Ecommerce Website",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://7skydecor.com/"
    },
    {
        name: "Catclub",
        type: "Website & Web Application",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://www.catclub.in/"
    },
    {
        name: "Amrapali Diagnostics",
        type: "Website",
        desc: "Amrapali Diagnostics provides cutting-edge health services and facilities tailored to your needs. Book now for expert care and advanced diagnostics.",
        keyPoints: [
            "",
            ""
        ],
        link: "https://amrapalidiagnostics.com/",
        siteBlocked: true
    },{
        name: "Taxmechanic Appointment System",
        type: "Web Application",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://taxmechanic-appointment.vercel.app/"
    },
    {
        name: "Wear Heroic",
        type: "Ecommerce Website",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://wearheroic.in/"
    },
    
    {
        name: "Futurechaos",
        type: "Ecommerce Website",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://futurechaos.in/"
    },
    {
        name: "Bookman",
        type: "Ecommerce Website",
        desc: "",
        keyPoints: [
            "",
            ""
        ],
        link: "https://bookmanbooks.com/"
    },
    


]

export default PortfolioData;
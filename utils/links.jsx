import {AppWindow, AreaChart, Layers, Home} from 'lucide-react';


const links = [
    {
        href: '/add-job',
        label: 'Feedback',
        icon: <Layers/>
    },
    {
        href: '/jobs',
        label: 'Jobs',
        icon: <AppWindow/>
    },
    {
        href: '/stats',
        label: 'Stats',
        icon: <AreaChart/>
    },
    {
        href: '/',
        label: 'Home',
        icon: <Home/>
    }
    
]
export default links;
import {AppWindow, AreaChart, Layers} from 'lucide-react';


const links = [
    {
        href: '/add-job',
        label: 'Add Job',
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
    }
    
]
export default links;
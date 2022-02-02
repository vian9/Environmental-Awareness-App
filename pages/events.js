import EventsPage from '../src/components/events/EventsPage'
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'

export default function Events() {
    return (
        <>
        <Navbar 
        action1="" 
        action2={navLinks[0].name}
        href2={navLinks[0].link}
        buttonText2={navLinks[2].name}
        href4={navLinks[2].link}
        buttonText1=""
        buttonText3=""/>
        {/* <Navbar action1="" action2="Dashboard" buttonText1="Create Events" buttonText2=""/> */}
        <EventsPage />
        </>
    )
}


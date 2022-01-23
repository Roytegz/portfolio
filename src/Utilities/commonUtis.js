import Home from '../Component/Home/Home';
import AboutMe from '../Component/AboutMe/AboutMe'
import Resume from '../Component/Resume/Resume'
import Testimonials from '../Component/Testimonials/Testimonials';
import ContactMe from '../Component/ContactMe/ContactMe';

export const TOTAL_SCREENS = [
    {
      screen_name: "Home",
      component: Home,
    },
    {
      screen_name: "About Me",
      component: AboutMe,
    },
    {
      screen_name: "Resume",
      component: Resume,
    },
    {
      screen_name: "Testimonials",
      component: Testimonials,
    },
    {
      screen_name: "Contact Me",
      component: ContactMe,
    },
  ]
export const GET_SCREEN_INDEX = (screen_name)=> {
    if (!screen_name) return -1;
    for(let i=0; i < TOTAL_SCREENS.length; i++){
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
}
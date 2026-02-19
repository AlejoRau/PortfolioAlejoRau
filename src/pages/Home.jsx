import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

 { /*theme */}
<ThemeToggle/>
 {/*backgournd effects*/}    
 <StarBackground/>
 {/*Nav Bar*/}
<NavBar/>
 {/*Main*/}

 {/*Footer*/}
  </div> 
  }
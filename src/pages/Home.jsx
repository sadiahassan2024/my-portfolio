import React from 'react'
import MyHero from '../components/Mycomponents/Myhero'
import MyAbout from '../components/MyAboutcomponents/MyAbout'
import Cards from '../components/MyServicescomponent/Cards'
import Work from '../components/MyWorkcomponents/Work'
import MyContact from '../components/MyContactcomponents/MyContact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <MyHero
        resumeUrl="/sadia_hassan (3).pdf"
        
        onContact={() => window.open("https://wa.me/923258497659", "_blank")}
      />
      <MyAbout/>
      <Cards/>
      <Work/>
      <MyContact/>
      <Footer/>
    </div>
  )
}

export default Home
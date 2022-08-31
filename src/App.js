import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/pet-details/PetDetails'
import CreatePet from './components/create-post/CreatePet'
import LadingPage from './components/landing/Landing'
import UAuth from '@uauth/js'

function App() {
  const [username, setUsername] = useState('')

  const myUnstoppableDomain = new UAuth({
    clientID: '5f4017df-0cb0-4bbe-a3ef-207b5029b5ad',
    redirectUri: 'https://demoviesclub.netlify.app/',
    scope: 'openid wallet',
  })

  const unstoppableLoginFuc = async () => {
    const user = await myUnstoppableDomain.loginWithPopup()
    if (user) {
      localStorage.setItem('UD-user', user)
      setUsername(user)
    }
  }

  const userLogOutFuc = () => {
    localStorage.removeItem('UD-user')
    setUsername('')
  }

  const loadWeb3 = async () => {}

  const getContract = async () => {}

  const connectWallet = async () => {}

  return (
    <Router>
      <div className="cl">
        <Navbar
          username={username}
          unstoppableLoginFuc={unstoppableLoginFuc}
          userLogOutFuc={userLogOutFuc}
        />
        <Route
          exact
          path="/"
          component={LadingPage}
          username={username}
          unstoppableLoginFuc={unstoppableLoginFuc}
        />
        <Switch>
          <Route exact path="/marketplace" component={Home} />
          <Route exact path="/create-pet" component={CreatePet} />
          <Route path="/pet-details/:petId">
            <PetDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import React, { useEffect } from 'react'
import { StylesProvider, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import './Landing.css'
import nft from '../../images/logo-footer.png'
import banner from '../../images/banner.png'
import banner2 from '../../images/banner2.png'

import art from '../../images/logo-footer.png'
import ham from '../../images/logo-footer.png'
import share from '../../images/logo-footer.png'

function Lading({
  account = 0x5df598c222c4a7e8e4ab9f347dcbd924b6458382,
  contractData,
  username,
  unstoppableLoginFuc,
}) {
  useEffect(() => {
    console.log('contractData', contractData)
    const loadCommunity = async () => {
      try {
        // pass the cid
        const cid = 'QmTFaLUesrjbQLKxNszz2DWZ33N9YuGBSVCLpwXnvyiumz'

        let fileData = await fetch(`https://ipfs.io/ipfs/${cid}`)

        const yourData = await fileData.json()
        console.log(yourData)
      } catch (error) {
        console.log(error)
      }
    }
    loadCommunity()

    //
    const getCommunityList = async () => {
      try {
        // gets communityCount from chain
        const count = await contractData.methods.count().call()
        console.log('count', count)

        // gets community data
        const temp = []
        for (let i = count; i >= 1; i--) {
          const community = await contractData.methods.communityList(i).call()
          temp.push(community)
        }
        console.log(temp)

        // setCommunities(temp)
      } catch (error) {
        console.log(error)
        // setLoading(false)
      }
    }
    getCommunityList()
    //
  }, [])

  return (
    <StylesProvider injectFirst>
      <Container>
        <section className="hero" role="banner">
          <div className="container">
            <div className="hero__text container--pall">
              <h6 className="wow fadeInUp animated" data-wow-delay=".5s">
                <span className="text-uppercase">
                  A Decentralized MarketPLACE
                </span>
              </h6>

              <h1 className="home-titles">
                Create, propose, trade, sell or collect movies and earn money.
              </h1>

              <p className="lead">
                DeMovies Club is the World’s first decentralized Movie Studio
                World. The DeMovies Club is a community of filmmakers and
                moviegoers who yearn to see fun, entertaining, genre movies get
                made again. Movie fans who want to be more than just passive
                viewers. The DeMovies Club empowers its community by letting
                them be active participants in the filmmaking process.. &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              </p>

              {username ? (
                <Link
                  to="/marketplace"
                  className="button-gren-padding hero_cta"
                >
                  Explore
                </Link>
              ) : (
                <Link
                  to="/"
                  className="button-gren-padding hero_cta"
                  onClick={unstoppableLoginFuc}
                >
                  Login to continue
                </Link>
              )}
            </div>

            <div className="hero__image">
              <img src={nft} alt="" className="food" />
            </div>
          </div>
        </section>

        <section className="how-works">
          <Grid container direction="row" spacing={2}>
            <Grid item xs>
              <div className="col-works">
                <h3>1. Connect with other creators</h3>

                <p className="how-works-description">
                  Our idea is to build a community around this common/central
                  piece of joy and within that allow people to find fellowship
                  to spark and maintain a creative journey.
                </p>
              </div>
            </Grid>

            <Grid item xs>
              <div className="col-works">
                <h3> 2. Add your Movie ideas </h3>
                <p className="how-works-description">
                  Mint your Movie ideas or Membership token directly from your
                  account, add it to a list of (collection) and define
                  unlockable content.
                </p>
              </div>
            </Grid>

            <Grid item xs>
              <div className="col-works">
                <h3> 3. Sell your Movies as NFT's</h3>
                <p className="how-works-description">
                  Choose the license, the royalties model and put your movies,
                  membership or products on the marketplace.
                </p>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* here */}
        <section className="how-works">
          <h2>
            Creating Outsized Utility with the NFT Community Through Making
            Movies
          </h2>
          <br />
          <br />
          <img src={banner} alt="hotRecipes" className="banner" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Through the use of our platform currency, FILMCredits, and powered
            by incentive mechanisms, our ecosystem enables decentralized
            participation, crowdsourced curation and, eventually, autonomous
            financing. In doing so, it creates an alternative to the traditional
            system that defines the film industry today. We feel that giving
            access to those who deserve it, will inspire and empower a new
            generation of artists.
          </p>
          <br />
          <br />
          <Container style={{ textAlign: 'center' }}>
            <img src={banner2} alt="hotRecipes" className="banner2" />
          </Container>
          <br />
          <br />
        </section>
      </Container>
    </StylesProvider>
  )
}

export default Lading

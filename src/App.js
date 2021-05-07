import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom"
import {Route} from "react-router-dom"
import {connect} from 'react-redux'
import styles from './App.module.css'
import { compose } from 'redux'
import { withRouter } from "react-router"
import { PreloaderThreeDots } from './Components/common/Preloaders/PreloaderThreeDots'
import Index from './Components/Index/Index'
import Cat from './Components/Cat/Cat'
import Dog from './Components/Dog/Dog'
import Fox from './Components/Fox/Fox'
import NavBar from './Components/NavBar/NavBar'
import {UpdateCatImg, UpdateDogImg, UpdateFoxImg} from './redux/commonReducer'

const App = (props) => {
    useEffect(() => {
        props.UpdateCatImg(5000)
        props.UpdateDogImg(10000)
        props.UpdateFoxImg(15000)

    }, [])

    if(!props.cat && !props.dog && !props.fox){
     return <PreloaderThreeDots/>
    }

  return (
    <div className={styles.PageWrapper}>
      <div className={styles.NavMenuWrap} >
        <NavBar />
      </div>
      <div className={styles.MainPage}>
          <Route path='/' render={() => <Redirect from="/" to="/index" />} />
          <Route path='/index' render={() => <Index {...props} />} />
          <Route path='/cat' render={() => <Cat {...props} />} />
          <Route path='/dog' render={() => <Dog {...props} />} />
          <Route path='/fox' render={() => <Fox {...props} />} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        cat: state.commonData.CatUrlImg,
        dog: state.commonData.DogUrlImg,
        fox: state.commonData.FoxUrlImg
    }
}


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{UpdateCatImg, UpdateDogImg, UpdateFoxImg}))(App)

export default AppContainer;

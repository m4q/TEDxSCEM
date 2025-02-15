import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tedx from '../../images/TedX.png'
import style from './style.module.scss'
import Container from '../Container/index'

const LandingPage =()=>
(
  

<div className={style.container}>
<Container>
    <div className={style.herocontent}>
        <p className={style.herotitle}><span className={style.red}>TEDx</span> SCEM 2019</p>
        <p className={style.heroslogan}>"How unpredictable are you"</p>
        <p className={style.slogans}>"<span className={style.spin}></span><span className={style.red}>able"</span> </p>
      <div className={style.date_holder}> <p className={style.date}>Jul 28th</p> <a className={style.HeroButton} href="https://www.townscript.com/e/tedxscem-211323">Get Tickets</a></div>
    </div>
</Container>
</div>


)


export default LandingPage;

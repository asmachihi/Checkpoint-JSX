import React from "react"
import Img from "./images/img2.jpg"
import Video from "./videos/Hair - 43633.mp4"

export default function Contenu() {

    return (
<div  className="firstdiv">
<div>
<h1 className="title">Chihi Asma</h1>

<br/> <br/>  <br/> 

<img src="/img1.jpg" alt="profile" />

<br/> <br/>  <br/> 

<img src={Img} alt="profile"/>

</div>
<br/> <br/>  <br/> 
<video  className="videos" controls>

<source src={Video} type="video/mp4" />

</video>

</div>
    )
    
}
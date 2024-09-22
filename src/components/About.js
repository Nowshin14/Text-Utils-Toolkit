import React from 'react'

export default function About(props) {

 
    /* ---------------Dark mode functionality---------------- */

    let mystyledark1 = {
        color:'#fff',
        backgroundColor:'transparent'
    }
    
    let mystyledark2 = {
        color:'#fff',
        backgroundColor:'#000',
        TextDecoderation: 'none',
        fontWeight:'Bold'
    }


    /*------------------------- light mode functionality------------- */
    let mystyleLight1 = {
        color:'#000',
        background:'transparent'
    }

   
    let mystyleLight2 = {
        color:'#000',
        backgroundColor:'#fff',
        TextDecoderation: 'none',
        fontWeight:'500'
    }
  

    return (
        <div className="main py-4" id="main" style={props.mode==='dark'? mystyledark1:mystyleLight1}>
            <h1 className="text-center">About App</h1>
        <div className="container">
        <div className="accordion" id="accordionExample" >

        <div className="accordion-item"  style={props.mode==='dark'? mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Analyse Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>With Textutils, users can efficiently and quickly analyse the text.It allows you to count the words, characters, or duration of reading time needed.It is more comparably designed with both light and dark modes.
                </strong>
            </div>
            </div>
        </div>



        <div className="accordion-item"  style={props.mode==='dark'? mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Free To Use
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A free character counter program called TextUtils can offer users quick word and character counts for any given text. TextUtils provides word and character counts. It can therefore be used to write texts with word or character limits.
                </strong>
            </div>
            </div>
        </div>



        <div className="accordion-item"  style={props.mode==='dark'? mystyledark2:mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
            <button style={props.mode==='dark'?mystyledark2:mystyleLight2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="acc">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This word counter program is compatible with nearly all popular web browsers, including Chrome, Firefox, Internet Explorer, Safari, Opera, and etc.
                </strong>
            </div>
            </div>
        </div>


    
       
        </div>
        </div>
        </div>
    )
}

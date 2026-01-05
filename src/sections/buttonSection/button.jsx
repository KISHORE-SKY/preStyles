import "./buttons.css"
import SideBar from "../navbar/sidebar"
import { HexColorPicker,HexColorInput } from "react-colorful";
//import { LuSendHorizontal } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";


function Buttons() {

    const [backgroudPicker,setBackgroundPicker]=useState('#0B0729');
    const [textColor,setTextColor]=useState('#ffffff');

    const basicHtmlCss=`<button className="basic">
    Button</button>

.basic{
    background-color:${backgroudPicker};
    color:${textColor};
    border: none;
    outline: none;
    border-radius: 5px;
    width: 90px;
    height: 30px;
}`;

    const errorHtmlCss=`<button className="errors">
    error</button>

.errors{
    border: 2px solid red;
    color: red;
    width: 100px;
    height: 35px;
    border-radius: 5px;
}`;

const disableHtmlCss=`<button className="disable" 
    disabled>disabled</button>

.disable{
    cursor: no-drop;
    width: 100px;
    height: 35px;
    background-color: #3b3950;
    border: none;
    color: #ffffff; 
    border-radius: 5px;
}`;

const hoverHtmlCss=`<button className="hovers">
    Hover Me</button>

.hovers{
    background-color:${backgroudPicker};
    color:${textColor};
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s 
    ease-out; 
}`;

const rippleHtmlCss=`<button className="ripple">
    Ripple</button>

.ripple{
    background-color:${backgroudPicker};
    color:${textColor};
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
}`;

    const neonBoxShadow=`0 0 10px ${backgroudPicker},
        0 0 40px ${backgroudPicker},
        0 0 80px ${backgroudPicker}`;

    const neonHtmlCss=`<button className="neon">
    Neon Light</button>

.neon{
    background-color:${backgroudPicker};
    color:${textColor};
    boxShadow:${neonBoxShadow};
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
}`
    
    const [buttonCopied,setButtonCopied]=useState({
        basic:false,
        errorB:false,
        disableB:false,
        hovers:false,
        neon:false,
        //ripple:false,
        // resetb:false,
        // submitb:false
    });

    const sliderRef = useRef(null);

    let settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    const [isHover,setHover]=useState(false);

    async function copyStylesCode(type,text) {
        try{
            await navigator.clipboard.writeText(text);     
            
            setButtonCopied(prev=>({...prev,[type]:false}))
            setTimeout(()=>{
               setButtonCopied(prev=>({...prev,[type]:true}));
            },700)
        }
        catch(error){
            console.log(`couldn't copy`);
        }

    }

    return(
        <>
            <section className="buttonMainSection">
                <div className="buttonSidebar">
                    <SideBar className="buttonsidenavbar"/>
                </div>

                <section className="customebuttons">
                    <h2 className="customButton">Custom Buttons</h2>

                    <section className="colorAndButtons">

                        <section className="customColor">

                            <div className="backgroundPicker">
                                <p className="pickerHeading">Background Color Picker</p>
                                <HexColorPicker className="picker" onChange={setBackgroundPicker} color={backgroudPicker}/>
                                <HexColorInput onChange={setBackgroundPicker}
                                 color={backgroudPicker} prefixed readOnly
                                 className="displayInput"/>
                            </div>
                            <div className="textColorPick">
                                <p className="pickerHeading">Text Color Picker</p>
                                <HexColorPicker className="picker" color={textColor} onChange={setTextColor}/>
                                <HexColorInput prefixed readOnly color={textColor}
                                 onChange={setTextColor} className="displayInput"/>
                            </div>
                            
                        </section>

                       
                        <section className="buttonTypes">
                
                         <Slider ref={sliderRef} {...settings}>
                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Colored Button</h3>
                                <button className="normalButton"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor
                                }}>normal</button>
                                </div>

                                <div className="codePreviewButton">
                                <LuCopy 
                                onClick={()=>{copyStylesCode("basic",basicHtmlCss)}}
                                className={!buttonCopied.basic ? "copyInActive" : "copyActive"}/>
                                   <pre className="buttonPreviewCode">
                                        <p>{basicHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads"> 
                                <h3>Error Button</h3>
                                <button className="errorButton">error</button>
                                </div>
                                 <div className="codePreviewButton">
                                <LuCopy 
                                 onClick={()=>{copyStylesCode("errorB",errorHtmlCss)}}
                                className={!buttonCopied.errorB ? "copyInActive" : "copyActive"}/>

                                    <pre className="buttonPreviewCode">
                                        <p>{errorHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Disabled Button</h3>
                                <button className="disableButton" disabled>disabled</button>
                                </div>
                                 <div className="codePreviewButton">
                                <LuCopy onClick={()=>{copyStylesCode("disableB",disableHtmlCss)}}
                                className={!buttonCopied.disableB ? "copyInActive" : "copyActive"}/>
                                    <pre className="buttonPreviewCode">
                                        <p>{disableHtmlCss}</p>
                                    </pre>

                                </div>
                            </div>

                            {/* <div className="buttonSections">
                                <h3>Submit Button</h3>
                                <button type="submit" className="submitButton"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor
                                }}>Submit</button>
                                 <div className="codePreviewButton">
                                    <pre></pre>
                                    <LuCopy />
                                </div>
                            </div> */}

                            {/* <div className="buttonSections">
                                <h3>Reset Button</h3>
                                <button className="resetButton" type="reset"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor
                                }}>Reset</button>
                                 <div className="codePreviewButton">
                                    <pre></pre>
                                    <LuCopy />
                                </div>
                            </div> */}

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Hover Color Button</h3>
                                <button className="hoverButton"
                                style={{ backgroundColor:isHover? textColor : backgroudPicker,
                                    color : isHover ? backgroudPicker : textColor,
                                    
                                }}
                                onMouseEnter={()=>{setHover(true)}}
                                onMouseLeave={()=>{setHover(false)}}>Hover Me</button>
                                </div>
                                 <div className="codePreviewButton">
                                    <LuCopy onClick={()=>{copyStylesCode("hovers",hoverHtmlCss)}}
                                        className={!buttonCopied.hovers ? "copyInActive" : "copyActive"}/>
                                    <pre className="buttonPreviewCode">
                                        <p>{hoverHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                            {/* <div className="buttonSections">
                                <h3>Ripple Button</h3>
                                <button className="rippleButtton"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor
                                }}>Ripple</button>
                                 <div className="codePreviewButton">
                                    <LuCopy onClick={()=>{copyStylesCode("ripple",rippleHtmlCss)}}
                                        className={!buttonCopied.ripple ? "copyInActive" : "copyActive"}/>
                                    <pre  className="buttonPreviewCode">
                                        <p>{rippleHtmlCss}</p>
                                    </pre>
                                    
                                </div>
                            </div> */}

                            <div className="buttonSections">
                                <div className="buttonTopHeads">
                                <h3>Neon Button</h3>
                                <button className="neonButton"
                                style={{backgroundColor:backgroudPicker,
                                    color:textColor,
                                    boxShadow:neonBoxShadow,
                                }}>Neon Light</button>
                                </div>
                                 <div className="codePreviewButton">
                                    <LuCopy onClick={()=>{copyStylesCode("neon",neonHtmlCss)}}
                                        className={!buttonCopied.neon ? "copyInActive" : "copyActive"}/>
                                    <pre className="buttonPreviewCode">
                                        <p>{neonHtmlCss}</p>
                                    </pre>
                                </div>
                            </div>

                         </Slider> 

                            <div className="controllerSwipe">
                                <button className="previousButton"
                                onClick={()=>sliderRef.current.slickPrev()}>Previous</button>

                                <button className="nextButton"
                                onClick={()=>sliderRef.current.slickNext()}>Next...</button>
                            </div>  
                        </section>
                        
                    </section>
                    
                </section>
                
            </section>
        </>
    );
}

export default Buttons;


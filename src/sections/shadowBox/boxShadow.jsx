import "./boxShadows.css"
import { LuCopy } from "react-icons/lu";
import{ HexColorPicker,HexColorInput } from "react-colorful"
import { colord } from "colord";
import SideBar from "../navbar/sidebar"
import { useState } from "react";


function BoxShadow() {

    const [inputsRanges,setInputRanges]=useState(5);
    const [yOffsetRange,setyOffsetRange]=useState(5);
    const [spreadRanges,setSpreadRanges]=useState(1);
    const [colorPick,setColorPick]=useState("#00022c");
    const [shadowBlur,setShadowBlur]=useState(5);

    function xOffsetHandler(event) {
        setInputRanges(event.target.value);
        console.log(event.target.value);  
    }
    function yOffSetHandler(event) {
        setyOffsetRange(event.target.value);
    }
    function spreadHandler(event) {
        setSpreadRanges(event.target.value)
    }
    function shadowBlurRange(event) {
        setShadowBlur(event.target.value);
    }

    const [rgbaAlpha,setRGBAalpha]=useState(0.8);
    const rgbaShadow=colord(colorPick).alpha(rgbaAlpha).toRgb();
    function opacityRGBAalpha(event) {
        setRGBAalpha(Number(event.target.value));
    }

    const shodowColor=`rgba(${rgbaShadow.r},${rgbaShadow.g},${rgbaShadow.b},${rgbaShadow.a})`;
    const boxShadowContainer=`${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor}`;

const shadowCodePreview =`.box-Shadow-code{
    -webkit-box-shadow:${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor};
    box-shadow:${inputsRanges}px ${yOffsetRange}px ${spreadRanges}px ${shadowBlur}px ${shodowColor};
}`

    const [shadowCopied,setShadowCopied]=useState(false);
    async function boxShadowCodeCopy() {
        await navigator.clipboard.writeText(shadowCodePreview);
        setShadowCopied(prev=>prev=false);
        setTimeout(()=>{
            setShadowCopied(prev=>prev=true);
        },700)
    }
    return(
        <>
            <section className="wholeShadow">
                <div className="shadowSidebar">
                    <SideBar />
                </div>
                <section className="boxShadowMain">
                    <div className="shadowPreview">
                        <h2 className="titleShadow">Box-Shadow Picker</h2>
                        <div className="previewBox" style={{boxShadow:boxShadowContainer}}>
                            <p>Box-Shadow</p>
                        </div>
                        <div className="previewShadowCode">
                            <LuCopy onClick={boxShadowCodeCopy}
                            className={!shadowCopied ? "codesdidntCopied" : "codesCopied"}/>
                            <pre className="shadowCodes">
                                <p>{shadowCodePreview}</p>
                            </pre>
                        </div>
                    </div>

                    <div className="customInputsShadow">
                        <div className="boxShadowRanges">
                            <label className="shadowLables">h-offset:</label>
                            <input type="range" value={inputsRanges} onInput={xOffsetHandler}/>
                            <p className="colorDisplayInput">{inputsRanges}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">v-offset:</label>
                            <input type="range" value={yOffsetRange} onInput={yOffSetHandler}/>
                            <p className="colorDisplayInput">{yOffsetRange}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">Blur:</label>
                            <input type="range" value={shadowBlur} onInput={shadowBlurRange} step='1'/>
                            <p className="colorDisplayInput">{shadowBlur}px</p>
                        </div>

                        <div className="boxShadowRanges">
                            <label className="shadowLables">Spread Radius:</label>
                            <input type="range" value={spreadRanges} onInput={spreadHandler} step='1'/>
                            <p className="colorDisplayInput">{spreadRanges}px</p>
                        </div>

                    </div>
                     <div className="boxShadowColorPicker">
                        <HexColorPicker className="pickInput" color={colorPick} onChange={setColorPick}/>

                            
                                <label className="shadowLables">Hex:</label>
                                <HexColorInput className="colorDisplayInput" 
                                color={colorPick} prefixed
                                readOnly onChange={setColorPick}/>

                                <label>Opacity Alpha:</label>
                            
                                <input className="rangeInput" type="range" step='0.1'
                                min='0' max='1' value={rgbaAlpha} onInput={opacityRGBAalpha}/>
                                <p className="colorDisplayInput">{rgbaAlpha}</p>
                                <label>IN RGBA:</label>
                                <p className="colorDisplayInput">{rgbaShadow.r},{rgbaShadow.g},{rgbaShadow.b},{rgbaShadow.a}</p>


                        </div>
                </section>
            </section>
        </>
    );
}

export default BoxShadow;



import "./radialGradient.css"
import SideBar from "../navbar/sidebar"
import { LuCopy } from "react-icons/lu"; 
import { HexColorPicker,HexColorInput } from "react-colorful"
import { useState } from "react";

function RadielGradient() {
    const [radialPicker,setRadialPicker]=useState('#29c522');
    const [radialEndPicker,setRadialEndPicker]=useState('#0B0729');

    const [radialAngle,setRadialAngle]=useState('circle');
    function radialAngleHandler(event){
        setRadialAngle(event.target.value);
        console.log(event.target.value);
    }
   

    const bgRadialGradient=`radial-gradient(${radialAngle},${radialPicker},${radialEndPicker})`

    const radialGradientCode=`.radialBg{
    background:radial-gradient(${radialAngle},${radialPicker},${radialEndPicker});
    background:-webkit-radial-gradient(${radialAngle},${radialPicker},${radialEndPicker});
    }`;

    const [radialCopied,setRadialCopied]=useState(false);
    async function radialCopyHandler() {
        await navigator.clipboard.writeText(radialGradientCode);
        setRadialCopied(prev=>prev=false);
        setTimeout(()=>{
            setRadialCopied(prev=>prev=true);
        },700)
    }
    return(
        <>
            <section className="wholeRadialSection">
                <section className="radialSideBar">
                    <SideBar />
                </section>
                
                <section className="mainradialSection">
                <section className="previewRadialCustomSection">

                    <div className="previewRadialSection">
                        <h3>Radial Gradient</h3>
                        <div className="previewRadialBox"
                        style={{background:bgRadialGradient}}></div>
                        <div className="previewRadialCodes">
                            <LuCopy onClick={radialCopyHandler}
                            className={!radialCopied ? "radialnotCodeCopied" : "radialCodeCopied"}/>
                            <pre className="RadialPreviewCodes">
                                <p>{radialGradientCode}</p>
                            </pre>
                        </div>
                    </div>
                </section>

                <section className="customGradient">
                    <div className="anglesRadial">
                        <label>Size:</label>
                        <select className="radialSize"  value={radialAngle} onChange={radialAngleHandler}>
                            <option defaultValue="ellipse" disabled>ellipse</option>
                            <option>closest-side</option>
                            <option>circle</option>
                            <option>closest-corner</option>
                            <option>farthest-side</option>
                            <option>farthest-corner</option>
                        </select>

                    </div>
                    <div className="startingColorPicker">
                        <label className="pickerLabels">Initial Color:</label>
                        <HexColorPicker color={radialPicker} onChange={setRadialPicker} className="picker"/>

                        <HexColorInput className="colorDisplayRadial" 
                        color={radialPicker} onChange={setRadialPicker}prefixed readOnly/>
                    </div>
                </section>

                <section className="endingColorPicker">
                    <label className="pickerLabels">End Color:</label>
                    <HexColorPicker color={radialEndPicker} onChange={setRadialEndPicker} className="picker" />

                    <HexColorInput className="colorDisplayRadial"
                    color={radialEndPicker} onChange={setRadialEndPicker} prefixed readOnly/>
                </section>
                </section>
            </section>
        </>
    )
}

export default RadielGradient;

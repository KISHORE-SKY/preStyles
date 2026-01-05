import { useState } from "react";
import SideBar from "../navbar/sidebar";
import {HexColorPicker,HexColorInput} from "react-colorful";
import './picker.css'
import '../navbar/sideNav.css'
import { IoMdColorPalette } from "react-icons/io";
import { colord } from "colord";
import { LuCopy } from "react-icons/lu";



function ColorPicker() {

    const [hexColor,setHexColor]=useState('#ef139e');
    const [copy,setCopy]=useState({
       rgbColor:'239, 19, 158',
        hslColor:'322, 87%, 51%',
        rgbaColor:'239,19,158,1'
    });
    //const [rgbColorCopy,setRgbColorCopy]=useState('239, 19, 158');
    const [isCopied,setIsCopied]=useState({
        hex:false,
        rgb:false,
        hsl:false,
        rgba:false
    });

    const rgb=colord(hexColor).toRgb();
    const hsl=colord(hexColor).toHsl();
    const rgba=colord(hexColor).toRgb();

    const rgbText=`${rgb.r},${rgb.g},${rgb.b}`;
    const hslText=`${Math.round(hsl.h)},${Math.round(hsl.s)}%,${Math.round(hsl.l)}%`;
    const rgbaText=`${rgba.r},${rgba.g},${rgba.b},${rgba.a}`;

    async function copyStateHandler(type,text){
        try{
            await navigator.clipboard.writeText(text); 

            setIsCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setIsCopied(prev=>({...prev,[type]:true}));
            },700)
            
        }
        catch(error){
            console.log(`couldn't copy`);
        }
    }

    
    return(
        <>
            <section className="colorPickSection">
                <section className="colorPickSideNavbar">
                    <SideBar />
                </section>
                
                <section className="colorSection">
                    <div className="inputColor">
                        <p style={{margin:'5px',fontSize:'18px'}}>Pick a Color</p>
                        <HexColorPicker color={hexColor} onChange={setHexColor} className="picker-wrapper"/>
                    </div>

                    <div>
                        <div className="previewIcon">
                            <p>Preview Color</p>
                            <IoMdColorPalette  style={{color:'orangered'}}/>
                        </div>
                
                    <div className="preViewColor" style={{backgroundColor:hexColor,
                        width:'150px',
                        height:'125px',
                        borderRadius:'20px'
                    }} />

                    </div> 

                    <div className="colorInfo">

                        <div className="rgbaHslValues">
                           <label className="hexLabel">HEX:</label>
                           <div className="inputsOfColor">
                                <HexColorInput color={hexColor} readOnly 
                                onChange={setHexColor} 
                                prefixed className="colorInput" 
                                />
                                <LuCopy onClick={()=>copyStateHandler("hex",hexColor)} 
                                className={!isCopied.hex ? 'coloredCopyInActive':'coloredCopy' }/>
                            </div>

                           <label className="hexLabel">RGB:</label>
                           <div className="inputsOfColor">
                            <p className="colorValueDisplay">{rgbText}</p> 
                            <LuCopy onClick={()=>copyStateHandler("rgb",rgbText)} 
                            className={!isCopied.rgb ? 'coloredCopyInActive':'coloredCopy' }/>
                           </div> 

                           <label className="hexLabel">HSL: </label>
                           <div className="inputsOfColor">
                           <p className="colorValueDisplay">{hslText}</p>
                            <LuCopy onClick={()=>copyStateHandler("hsl",hslText)} 
                            className={!isCopied.hsl ? 'coloredCopyInActive':'coloredCopy'  }/>
                            </div>

                           <label className="hexLabel">RGBA :</label>
                           <div className="inputsOfColor">
                           <p className="colorValueDisplay">{rgbaText}</p>
                           <LuCopy onClick={()=>copyStateHandler("rgba",rgbaText)}
                            className={!isCopied.rgba ? 'coloredCopyInActive':'coloredCopy'}/>
                            </div>
                        </div>
                
                    </div>

                    <div className="sloganOfPicker">
                        <h3>Color Picker Tool:</h3>
                        <div>
                            <h4>Step 1:</h4>
                            <p>Select a color by dragging the pointer.</p>
                        </div>
                        <div>
                            <h4>Step 2:</h4>
                            <p>See your chosen color displayed in the preview box.</p>
                        </div>
                        <div>
                            <h4>Step 3:</h4>
                            <p>Click Copy to copy the color code and paste it into your project.</p>
                        </div>
                        
                    </div>
                </section>

            </section>
        </>
    );
}

export default ColorPicker;

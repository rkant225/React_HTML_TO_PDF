import React, { useState } from 'react'
import ReactToPdf from 'react-to-pdf';


const HtmlToPdf = () => {
    const ref = React.createRef();

    const [invName, setInvName] = useState("");

    const HOUSE_DATA = [
        { 
            room : "Kitchen",
            items : [
                {name : "Bowl", quantity : 2, price : 900},
                {name : "Plate", quantity : 7, price : 650},
                {name : "Plate", quantity : 7, price : 650},
                {name : "Plate", quantity : 7, price : 650},
                {name : "Basket", quantity : 1, price : 30},
            ]
        },
        { 
            room : "Garden",
            items : [
                {name : "MotorPump", quantity : 2, price : 900},
                {name : "MotorPump", quantity : 2, price : 900},
                {name : "MotorPump", quantity : 2, price : 900},
                {name : "MotorPump", quantity : 2, price : 900},
                {name : "MotorPump", quantity : 2, price : 900},
            ]
        },
        { 
            room : "Bed Room",
            items : [
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
            ]
        },
        { 
            room : "Back yard",
            items : [
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
            ]
        },
        { 
            room : "Spare Room",
            items : [
                {name : "AC", quantity : 7, price : 650},
                {name : "AC", quantity : 7, price : 650},
                {name : "AC", quantity : 7, price : 650},
            ]
        },
        { 
            room : "Hall",
            items : [
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
                {name : "Blanket", quantity : 2, price : 900},
            ]
        },
        { 
            room : "Bath Room",
            items : [
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
                {name : "Bed", quantity : 1, price : 30},
            ]
        },

    ];

    const options = {
    };
    
    return (
        <div>

            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                {({toPdf}) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
                    <br/>
             Inventory Name : <input type="text" onChange={(e)=>{setInvName(e.target.value)}}/>
             
            <div style={{width : '100%', margin : "auto", padding : "1rem"}} ref={ref}>
                <div style={{width : "max-content", margin : "auto"}}><b>Inventory Name : {invName}</b></div>
                {HOUSE_DATA.map((data)=>{
                    return <div>
                        <div style={{fontSize : "1.5rem", fontWeight : "600"}}>{data.room}</div>
                        {data.items.map((item)=>{
                            return <div style={{border : "1px solid black", marginBottom : ".2rem", width: "60rem", padding : ".2rem", display : "flex", justifyContent : "space-between"}}>
                                <div>{item.name}</div>
                                <div>{item.quantity}</div>
                                <div>{item.price}</div>
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default HtmlToPdf;
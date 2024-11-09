'use client';
 import { useState } from "react";

 export default function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);
    const [csChecked, setCsChecked] = useState(false);
   
    const handleJavaChecked = (e: any) => setJavaChecked(e.target.checked);
    const handlePhpChecked = (e: any) => setPhpChecked(e.target.checked);
    const handleCsChecked = (e: any) => setCsChecked(e.target.checked);
   
    return (
        <>
            <input
             type="checkbox"
             checked={javaChecked} 
             onChange={handleJavaChecked} />{""}
          Java
            
            <input 
            type="checkbox"
             id="php" 
             name="php" 
             value="php" 
             checked={phpChecked} 
             onChange={handlePhpChecked} />{""}
            PHP
           
            <input 
            type="checkbox" 
            id="cs" name="cs" 
            value="cs" 
            checked={csChecked} 
            onChange={handleCsChecked} />{""}
           C#
           <div>You selected items</div>
           <div>Java Checked {javaChecked.toString()}</div>
           <div>PHP Checked {phpChecked.toString()}</div>
           <div>C# Checked {csChecked.toString()}</div>
        </>
    );
 }
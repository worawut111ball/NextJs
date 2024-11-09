'use client';
import { useState } from "react";

export default function RadioBox() {
    const [gender, setGender] = useState("male");

    const handleChangeGender = (e: any) => {
        setGender(e.target.value);
    };
    return (
        <>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChangeGender}
            />{""}
            Male
            <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChangeGender}
            />{""}
            Female
            <div>สิ่งที่เลือก {gender}</div>
        </>
    );
}
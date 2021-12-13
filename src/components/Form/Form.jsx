import { useState } from "react"

export default function InputFilter() {
    const [inputFilter, setInputFilter] = useState('');

    return (
        <div>
            <input onChange={(e)=>setInputFilter(e.target.value)} value={inputFilter} type="text" name="" id="" />
        </div>
    )
}

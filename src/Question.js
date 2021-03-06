import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = ({title, info}) => {
    const [toggled, setToggled] = useState(false)
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={()=> setToggled(!toggled)}>
                    {toggled ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {toggled && <p>{info}</p>}
        </article>
    )
};

export default Question;
 
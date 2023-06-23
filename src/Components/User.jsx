import React from 'react'
import { useParams , useNavigate} from 'react-router-dom';

const User = () => {
    const param = useParams()
    console.log(param.id)
    const navigate = useNavigate();


    return (
    <div className='user'>
        <button onClick={() => navigate('/about')}>CLICK ME!!</button>    
    </div>
  )
}

export default User
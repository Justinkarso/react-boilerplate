import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('/posts')
        .then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
            <div>
                {data && data.map(item => {
                    return(
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('/posts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
	.then(data => {
		console.log(data)
	})
 	.catch(err => {
		console.log(err)
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
                {!data && <div> loading... </div>}
            </div>
        </div>
    )
}

export default App

import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 

const App = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('');

    useEffect(() => {
        axios.post('/get-blogs')
        .then(res => {
            setData(...data, res.data.data)
        })
    }, [])

    const handleClick = () => {

        fetch('/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        })
    }

    return (
        <>
        <div style={{ width: '750px'}}>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
            <button onClick={handleClick}>Submit Blog</button>
        </div>
        <div className="list">
            {data && data.map((blog, i) => (
                <div key={i}>
                    <div>{ ReactHtmlParser(blog) }</div>
                </div>
            ))}
            {!data && <div>Loading...</div>}
        </div>
        </>
    )
}

export default App

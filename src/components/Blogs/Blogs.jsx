import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <h1>HEHEHEHEHEHEEHEHHEHEEHHE</h1>

        </div>
    );
};

export default Blogs;
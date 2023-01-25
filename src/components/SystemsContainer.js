import {useState, useEffect} from 'react'

const SystemsContainer = () => {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:9393/systems/1")
        .then(res => res.json())
        .then(setSystems)
    }, []);

    return (
        <div>Hello</div>
    )
}

export default SystemsContainer
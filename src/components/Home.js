import React , {useState, useEffect} from  'react';

const Home = () => {
    const [temp,setTemp] = useState(false);
    useEffect(() => {
        setTemp(true);
    }, []);

    useEffect(() => {
        console.log('triggered');
    }, [temp]);

    const clickHandler = () => {
        let t;
        t = !temp;
        setTemp(temp => t);
    }

    return (
        <div>
            <h1>Home Page</h1>
            {
                temp?<p>Hello</p>:null
            }
            <button onClick={clickHandler}>Hide</button>
        </div>
    )
}

export default Home;
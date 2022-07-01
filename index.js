function App() {
    
    const [quotes, setQutoes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState('');
    const [color, setColor] = React.useState('#D3D3D3');

    React.useEffect(()=> {
        async function fetchData() {
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json();
            setQutoes(data);
            let rindex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[rindex])
            
        }
        fetchData();
        

    }, [])

    function newQuote() {
        let rindex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[rindex])
        let colors=[
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ]
        let colorindex =  Math.floor(Math.random() * colors.length)
        setColor(colors[colorindex])
    }

    return (
        <div id='wrapper' style={{backgroundColor: color, minHeight: '100vh'}}>
            <div className='container'>    
                <div id='quote-box' className='card'>
                    <div className='card-header'>Poggers Quotes</div>
                        <div className='card-body'>
                            <h1 id='text'  style={{color: color}}>&quot;{randomQuote.text}&quot;</h1>
                            <p id='author' style={{color: color}} ><text>- </text>{randomQuote.author}</p>
                                <div id='buttons' className='column'>
                                <button onClick={newQuote} className='btn btn-primary'>newQuote</button>
                                <a href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + randomQuote.text + ' - ' + randomQuote.author} target='_blank'><i className='btn btn-info fa fa-twitter'></i></a>
                                </div>
                        </div>        
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'))
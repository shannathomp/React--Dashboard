const Header = () => {
   return <h1 id='header'>Commence Dashboard Creation!</h1>
}

const Reviews = () => {
    return <div id='reviews'>
       <h1>Reviews</h1> <p>2,400<p>You got <span id='count'>+1.1k</span> more reviews than the last 3 days!</p></p>
     
    </div> 
}

const Ratings = () => {
    return <div id='ratings'>
        <h1 id='r1'>Ratings</h1>
<h2>4.8</h2>
    </div>
}
const Analysis = () => {
    return <div id='analysis'>
        <h1>Sentiment Analysis</h1>
    </div>
}

const Vistors = () => {
    return(
        <h1 id='vistors'>Website Vistors</h1>
    )
}

const Sidebar = () =>{
    return(
<div>
    <h1>Dashboard</h1>
<h2>Widget</h2>
<h1>Reviews</h1>
<h1>Customers</h1>
<h1>Sentiment Analysis</h1>
<h1>Average Rating</h1>
</div>
)
}




class App extends React.Component {
    render(){
        return(
            <section className="container">
         <Header/>
         <Sidebar/>
         <Reviews/>
         <Ratings/>
         <Analysis/>
         <Vistors/>
</section>
        )
    }
}






ReactDOM.render(<App/>, document.getElementById('main'))
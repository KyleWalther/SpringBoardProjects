const App = () => {
    return (
        <div>
            <Tweet 
            username="KKKKYLEEEE" 
            name="KyKy"
            date="2/3/2024"
            message= "This is a cool tweet don't you think?"
            />
            <Tweet 
            username="Steveee"
            name="CoolGuy"
            date="9/13/2024"
            message= "This is a scarrry tweet don't you think?"
            />
            <Tweet 
            username="sarah"
            name="BadDoggy"
            date="2/5/2024"
            message= "This is a silllllyyy tweet don't you think?"
            />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))
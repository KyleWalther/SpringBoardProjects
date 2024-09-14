const Tweet = (props) => {
    return (
        <p class="tweet">
            Username: {props.username}<br></br>
            Name: {props.name}<br></br>
            Date: {props.date}<br></br>
            Message: {props.message}<br></br>
        </p>
    )
}
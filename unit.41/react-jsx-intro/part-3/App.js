const App = () => (
    <div>
        <Person name="Christopher" age={20} hobbies={["Reading", "Swimming", "Coding"]} />
        <Person name="Ana" age={15} hobbies={["Painting", "Gaming"]} />
        <Person name="Kyle" age={27} hobbies={["Fishing", "Gaming"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
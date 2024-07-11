
export default () => {
    let date = new Date()
    
    return (
        <footer className="container">
            <div
                className="
            row justify-content-center mt-3 mb-4
            "
            >
                <h1>footer:</h1>
                <h3>hello im footer {date.getFullYear()} .</h3>
            </div>
        </footer>
    );
};

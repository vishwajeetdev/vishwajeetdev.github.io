const Gemini = ({message, fontSize}) => {
    return (
        <div
            style={{
                fontFamily: "'Gamini', serif",
                fontSize: `${fontSize}px`,
                fontWeight: "bold",
                background: "linear-gradient(to right, #00C9FF, #92FE9D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
            }}
        >
            {message}
        </div>
    );
};

export default Gemini;

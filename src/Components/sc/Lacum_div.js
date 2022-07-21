const myStyle = {
    color: "black",
    opacity: "0.5",
    fontSize: "medium"
}

const Lacum_div = () => {
    return (
        <center>
        <div id="lacum-div">
            <button class="lacum-box" onClick={() => {
                window.location = "/games/lacum";
            }}></button>
            <h1 class="lacum-title">Lacum</h1>
            <h1 class="lacum-title" style={myStyle}>(coming soon)</h1>
        </div>
        </center>
    )
};

export default Lacum_div;
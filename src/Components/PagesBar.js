import './PagesBar.css';

const PagesBar = (props) => {
    return (
        <div class="PagesBar">
            <center>
                <button class="page-1" onClick={() => {{props.changePage(true)}}}></button>
                <button class="page-2" onClick={() => {props.changePage(false)}}></button>
            </center>
        </div>
    );
};

export default PagesBar;
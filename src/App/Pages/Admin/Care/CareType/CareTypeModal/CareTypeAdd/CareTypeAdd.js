import './CareTypeAdd.css'
import '../../../../../../Utils/CSS/BasicForms.css';
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import ButtonWithIconClose from "../../../../../../Utils/Buttons/ButtonWithIcon/ButtonWithIconClose";


const CareTypeAdd = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addCareAnnouncement(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        navigate('/care-announcement');
    }
    const contentModal = `modal ${isLoading ? "hidden" : ""}`;
    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Nazwa musi mieś długość minimalną 5 i maksymalną 50 znaków"/> : null}
                <ButtonWithIconClose onClick={props.onClose} className="close"></ButtonWithIconClose>
                <h2 className="h2SigneUp">Dodaj nazwę pomocy</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="filterGlobalText" type="text" name="name" placeholder="Podaj nazwę"></input>
                    <br/>
                    <button className="filterGlobalBox" type="submit">Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default CareTypeAdd;

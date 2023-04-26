import '../../../../../../Utils/CSS/BasicForms.css';
import '../../../../../../Utils/Modals/AnyContentModal.css';
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";

const BreedAdd = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [optionList,setOptionList] = useState([{'name':"id"}])
    const navigate = useNavigate();

    //uzyskanie danych do selecta - o tym trzeba pamiętać !!!
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const databaseData = await dataHandler.getAnimalTypes();
            setOptionList(databaseData);
            setIsLoading(false);
        }
        fetchData();
    }, [])


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addBreeds(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }
    const contentModal = `modal ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Rasa zwierzaka musi mieć długość minimalną 5 i maksymalną 55 znaków"/> : null}
                <h2 className="anyContentModalTitle">Dodaj Rasę</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="filterGlobalText" type="text" name="name" placeholder="Podaj nazwę rasy"></input>
                    <br/>
                    <select className="filterGlobalBox" name="animalType">
                        <option value="">Wybierz typ zwierzaka</option>
                        {optionList.map(selectedItem =>
                                <option value={selectedItem.id} key={selectedItem.name} >{selectedItem.name}</option>
                            )}
                    </select>
                    <br/>
                    <button className="filterGlobalBox" type="submit">Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default BreedAdd;

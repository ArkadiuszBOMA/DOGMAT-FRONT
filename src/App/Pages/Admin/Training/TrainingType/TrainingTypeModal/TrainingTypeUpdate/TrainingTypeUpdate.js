import "./TrainingTypeUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useEffect, useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import ImagesLoader from "../../../../../../Utils/ImagesLoader/ImagesLoader";


const TrainingTypeUpdate = props => {

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [optionList,setOptionList] = useState([{'name':"id"}])
    const [selectedImage, setSelectedImage] = useState(null);

    async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        return new File([blob], fileName, { type: 'image/png' });
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            // odczytanie danych z bazy do listy wyboru
            const trainingLevel = await dataHandler.getTrainingLevels();
            setOptionList(trainingLevel);
            // odczytanie danych z konkretnego rekordu a podaniem ID tutaj przyszły złe dane !!!
            const databaseData = await dataHandler.getLessonByLessonId(props.dataRow.id.valueOf());
            // stworzenie zmiennej z tablicy bytea (zmiana na obraz) - nazwa liku
            const data = await dataUrlToFile(databaseData.imageLocation, "file.png");
            setSelectedImage(data);
            // mam dane i tablicę
            setIsLoading(false);
        }
        fetchData();
    }, [])

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        // zmiana danych z pliku na listę bytów base 64
        const buffer = await selectedImage.arrayBuffer()
        data.imageLocation = btoa(String.fromCharCode(...new Uint8Array(buffer)))
        // ostateczne zapisanie danych do bazy
        const dataRow = await dataHandler.updateTrainingType(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }

    return (
        <div>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
            <h2 className="anyContentModalTitle">Uaktualnij trening</h2>
            <form className="modal" onSubmit={onSubmitClick}>
                <input className="filterGlobalBox" type="hidden" name="id" value={props.dataRow.id.valueOf()}></input>
                <input className="filterGlobalBox" type="text" name="name" placeholder="Nazwa" defaultValue={props.dataRow.name.valueOf()}></input>
                <br/>
                <ImagesLoader selectedImage = {selectedImage} setSelectedImage = {setSelectedImage } type="file" name="imageLocation"/>
                <br/>
                <select className="filterGlobalBox" name="trainingLevel">
                    <option className="filterGlobalBox" value="">Zmień poziom trudności</option>
                    {optionList.map(selectedItem =>
                        <option className="filterGlobalBox" value={selectedItem.id} key={selectedItem.name}>{selectedItem.name}</option>
                    )}
                </select>
                <br/>
                <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis" defaultValue={props.dataRow.description.valueOf()}></textarea>
                <br/>
                <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
            </form>
            </div>
    )
}


export default TrainingTypeUpdate;

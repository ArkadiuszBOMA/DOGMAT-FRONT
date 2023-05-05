import './CityAdd.css'
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useEffect, useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import ButtonWithIconClose from "../../../../../../Utils/Buttons/ButtonWithIcon/ButtonWithIconClose";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const CityAdd = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [voivodeship,setVoivodeship] = useState([]);
    const [province,setProvince] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState(0);

    //zmienne pomocnicza do wyświetlania selecta - województw
    let voivodeships = voivodeship.map((selectedV) => (<option key={selectedV.terytId} value={selectedV.id}>{selectedV.name}</option>));

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setVoivodeship(await dataHandler.getVoivodeships());
            setIsLoading(false);
        }
        fetchData();
    }, [])


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.province = selectedProvinceId;
        const dataRow = await dataHandler.addCity(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }

    const voivodeshipOnChangeHandler = async (event) => {
        const provinces = await dataHandler.getProvincesForThisVoivodeship(event.target.value);
        setProvince(provinces);
    }

    const provinceOnChangeHandler = (event) => {
        setSelectedProvinceId(event.target.value);
    }


    const contentModal = `modal ${isLoading ? "hidden" : ""}`;
    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <ButtonWithIconClose onClick={props.onClose} className="close"></ButtonWithIconClose>
                <h2 className="anyContentModalTitle">Dodaj miasto</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input type="text" name="name" placeholder="Podaj nazwę Miasta"></input>
                    <br/>
                    <input className="formHeader" type="text" name="terytId" placeholder="TERYT" ></input>
                    <br/>
                    <div className="formHeader">
                        <select onChange={voivodeshipOnChangeHandler}>{voivodeships}</select>
                        <select onChange={provinceOnChangeHandler}>{province && (
                            province.map((selectedP) => (<option key={selectedP.terytId} value={selectedP.id}>{selectedP.name}</option>))
                        )}</select>
                    </div>

                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default CityAdd;

// import './CityAdd.css'
// import {dataHandler} from "../../../../../../Api/dataHandler";
// import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
// import {useNavigate} from "react-router-dom";
// import Spinner from "../../../../../../Utils/Spinners/Spinner";
// import ButtonWithIconClose from "../../../../../../Utils/Buttons/ButtonWithIcon/ButtonWithIconClose";
// import {id} from "date-fns/locale";
//
//
// const CityAdd = props => {
//
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [listCities,setCities] = useState([{"id":"name"}])
//     const [listProvinces,setProvinces] = useState([{"id":"name"}])
//     const [listVoivodeships, setVoivodeshis] = useState([{"id": "name"}]);
//
//     const navigate = useNavigate();

    //uzyskanie danych do selecta o powiatach- o tym trzeba pamiętać !!!

    // function selectCity () {
    //     useEffect(() => {
    //         async function fetchData() {
    //             setIsLoading(true);
    //             const databaseData = await dataHandler.getVoivodeships();
    //             setVoivodeshis(databaseData);
    //             setIsLoading(false);
    //         }
    //
    //         fetchData();
    //     }, []);
    //

    //     const [state, setState] = useState([]);
    //
    //     const handleCountry = (id) => {
    //         async function fetchData() {
    //             const matchedProvinces = await dataHandler.getProvincesForThisVoivodeship(id)
    //             setIsLoading(true);
    //             setProvinces(matchedProvinces);
    //             setIsLoading(false);
    //         }
    //         fetchData();
    //     };
    //
    //     return (
    //         <div>
    //             <select className="select form-control-lg" name="province" onChange={(e) => handleCountry(e.target.value)}>
    //                 <option value="">Wybierz województwo</option>
    //                 {
    //                     listVoivodeships &&
    //                     listVoivodeships !== undefined ?
    //                         listVoivodeships.map(voivodeship => {
    //                             return (
    //                                 <option value={voivodeship.id} key={voivodeship.name}
    //                                         defaultValue={0}>{voivodeship.name}</option>
    //                             )
    //                         })
    //                         : "Nie wybrano województwa"
    //                 }
    //             </select>
    //         </div>
    //     );
    // }
    //
    //     useEffect(() => {
    //         async function fetchData() {
    //             setIsLoading(true);
    //             const databaseData = await dataHandler.getProvincesForThisVoivodeship(id);
    //             setProvinces(databaseData);
    //             setIsLoading(false);
    //         }
    //
    //         fetchData();
    //     }, [])
    //
    //     useEffect(() => {
    //         async function fetchData() {
    //             setIsLoading(true);
    //             const databaseData = await dataHandler.getCitiesForThisProvince(id);
    //             setCities(databaseData);
    //             setIsLoading(false);
    //         }
    //
    //         fetchData();
    //     }, [])



//
//     async function onSubmitClick(e) {
//         e.preventDefault();
//         setIsLoading(true);
//         const data = Object.fromEntries(new FormData(e.target).entries());
//         const dataRow = await dataHandler.addCity(data);
//         setIsLoading(false);
//         if (!dataRow) {
//             setIsError(true);
//             return;
//         }
//         navigate('/cities');
//     }
//     const contentModal = `modal ${isLoading ? "hidden" : ""}`;
//     return (
//         <div>
//             {isLoading ? <Spinner/> : null}
//             <div className={contentModal}>
//                 {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
//                 <ButtonWithIconClose onClick={props.onClose} className="close"></ButtonWithIconClose>
//                 <h2 className="modal-header">Dodaj miasto</h2>
//                 <form className="modal" onSubmit={onSubmitClick}>
//                     <input className="modal-header" type="text" name="name" placeholder="Podaj nazwę miasta"></input>
//                     <select className="select form-control-lg" name="province">
//                         <option value="">Wybierz powiat</option>
//                         {listCities.map(selectedItem =>
//                             <option value={selectedItem.id} key={selectedItem.name} defaultValue={0}>{selectedItem.name}</option>
//                         )}
//                     </select>
//                     <button className="submitButton" type="submit">Wykonaj</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
//
//
// export default CityAdd;

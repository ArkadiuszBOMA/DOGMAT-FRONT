import "./CityArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const CityArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default CityArchive;

import "./BreedArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const BreedArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default BreedArchive;

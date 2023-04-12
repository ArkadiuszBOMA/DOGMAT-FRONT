import "./AnimalTypeArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const AnimalTypeArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default AnimalTypeArchive;

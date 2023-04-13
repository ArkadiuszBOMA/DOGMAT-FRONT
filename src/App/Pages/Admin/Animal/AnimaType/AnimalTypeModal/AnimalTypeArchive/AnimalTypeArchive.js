import "./AnimalTypeArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const AnimalTypeArchive = async (props) => {
        await dataHandler.archiveAnimalType(props.id);
}
export default AnimalTypeArchive;

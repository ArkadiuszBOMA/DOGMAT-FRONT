import "./TrainingTypeArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const TrainingTypeArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default TrainingTypeArchive;

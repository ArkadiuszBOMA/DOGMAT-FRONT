import "./TrainingLevelArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const TrainingLevelArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default TrainingLevelArchive;

import "./TrainingStepArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const TrainingStepArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default TrainingStepArchive;

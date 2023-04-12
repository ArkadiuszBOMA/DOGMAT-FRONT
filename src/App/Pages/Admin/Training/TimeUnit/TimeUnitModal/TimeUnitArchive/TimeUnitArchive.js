import "./TimeUnitArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const TimeUnitArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default TimeUnitArchive;

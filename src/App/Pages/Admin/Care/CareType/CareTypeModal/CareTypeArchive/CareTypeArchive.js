import "./CareTypeArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const CareTypeArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default CareTypeArchive;

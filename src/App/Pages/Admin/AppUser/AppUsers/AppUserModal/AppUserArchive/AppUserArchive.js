import "./AppUserArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const AppUserArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default AppUserArchive;

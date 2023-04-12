import "./VoivodeshipArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const VoivodeshipArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default VoivodeshipArchive;

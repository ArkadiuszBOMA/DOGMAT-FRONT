import "./ProvinceArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const ProvinceArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default ProvinceArchive;

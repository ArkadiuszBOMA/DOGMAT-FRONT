import "./UserTypeArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const UserTypeArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default UserTypeArchive;

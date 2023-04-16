import "./UserRoleArchive.css"
import {dataHandler} from "../../../../../../Api/dataHandler";

const UserRoleArchive = async (props) => {
        console.log(props.recordId);
        await dataHandler.archiveAnimalType(props.recordId);
}
export default UserRoleArchive;

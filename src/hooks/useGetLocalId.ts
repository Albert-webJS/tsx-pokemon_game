import { useSelector } from "react-redux";
import { secectGetLocalId } from "../store/user/user";


export const UseGetLocalId = () => {
    const localId = useSelector(secectGetLocalId);
    return localId;
};
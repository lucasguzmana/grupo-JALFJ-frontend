import { useContext } from "react";
import { tokenAuth } from "../context/tokenAuth";

export default () => useContext(tokenAuth);
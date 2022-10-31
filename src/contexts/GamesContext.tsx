import { createContext, useContext, useEffect, useState } from "react";
import Api from "../helpers/Api"

const [allGames, setAllGames] = useState([])
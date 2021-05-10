
import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = 'https://builder-5666c-default-rtdb.firebaseio.com/default.json';

export default instance;
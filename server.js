import {app} from"./app.js";
import { connectdb } from "./data/database.js";
connectdb();
console.log(process.env.PORT)
app.listen(8000,()=>{
    console.log("Server has started working")
})
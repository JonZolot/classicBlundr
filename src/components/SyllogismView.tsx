import { fetchSyllogismTree } from "../api/fetchSyllogismTree";

async function loadTree(id:string){
    const tree = await fetchSyllogismTree(id);
    console.log(tree);
}
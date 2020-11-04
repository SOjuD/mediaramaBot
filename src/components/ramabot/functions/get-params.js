export default async function getParams(path){
    try{
        const response = await fetch(path);
        if(response.ok) return await response.json();
    }catch(e){
        console.error(`Ошибка получения параметров ${e}`);
    }
}
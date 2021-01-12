import {ProjectData} from "../data/projectsData";

export const useData = ()=>{
    const getData = (projectID: string)=>{
        return ProjectData.filter(data => data.id === projectID)[0]
    }
    return{
        getData
    }
}
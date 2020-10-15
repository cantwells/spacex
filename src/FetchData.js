export default class FetchData{
    
    urlAPI = 'https://api.spacexdata.com/v4/';
    getData = async url => {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`Error ${response.statusText} in ${url}`);
        return await response.json();
    }

    getRockets = async () => await this.getData( this.urlAPI + 'rockets' );
    getLaunches = async () => await this.getData( this.urlAPI + 'launches/past');
    getCompany = async () => await this.getData( this.urlAPI + 'company' );
}
export default class Memento{
    setBackup(body: any): void {
        if(localStorage.getItem("historial")){
            const data = JSON.parse(localStorage.getItem("historial"));
            let newData = [...data, body];
            localStorage.setItem("historial", JSON.stringify(newData));
        }else{
            localStorage.setItem("historial", JSON.stringify([body]));
        }
    }

    getBackup(): any{
        let body: any = JSON.parse(localStorage.getItem('historial'));
        return body;
    }

    getSize():void {
        let body: any = JSON.parse(localStorage.getItem('historial'));
        body.length;
    }
}
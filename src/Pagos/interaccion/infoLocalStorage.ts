const saveLocalStorageBuy = (text: string):any => {
    const content:any = text.split("--");
    const info: any = [{
        title: content[0],
        description: content[1],
        value: content[2],
    }]
    if(localStorage.getItem("buy")){
        const data = JSON.parse(localStorage.getItem("buy"));
        let newData = [...data, ...info];
        localStorage.setItem("buy", JSON.stringify(newData));
    }else{
        localStorage.setItem("buy", JSON.stringify(info));
    }
}

const removeLocalStorageBuy = (text: string):any => {
    const content:any = text.split("--");
    if(localStorage.getItem("buy")){
        const data:any = JSON.parse(localStorage.getItem("buy"));
        let indexG: number;
        let newData:any = data.map((element: any, index: number) => {
            if(element.title != content[0]){
                return element;
            }
            indexG = index;
        })
        data.splice(indexG,1);
        localStorage.setItem("buy", JSON.stringify(data))
    }
}

export {
    saveLocalStorageBuy, 
    removeLocalStorageBuy
};
export const testFunction =()=>{
    return "hello react"
}

export const getTinhThanhPho =()=>{
    var citis = document.getElementById("city");
    var districts = document.getElementById("district");
    var wards = document.getElementById("ward");

    fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{
        method: "GET"
    }).then(res=>res.json()).then(data=>{
        renderCity(data);})

    function renderCity(data) {
        if(citis.options.length<=63){
            for (const x of data) {
            citis.options[citis.options.length] = new Option(x.Name, x.Id);
            }
            citis.onchange = function () {
            document.getElementById('district').length = 1;
            document.getElementById('ward').length = 1;
            if(this.value != ""){
                const result = data.filter(n => n.Id === this.value);
        
                for (const k of result[0].Districts) {
                document.getElementById('district').options[document.getElementById('district').options.length] = new Option(k.Name, k.Id);
                }
            }
            };
            document.getElementById('district').onchange = function () {
            document.getElementById('ward').length = 1;
            const dataCity = data.filter((n) => n.Id === citis.value);
            if (this.value != "") {
                const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
        
                for (const w of dataWards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
                }
            }
            };
        }
    }
}
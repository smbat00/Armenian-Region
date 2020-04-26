function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let result = JSON.parse(this.responseText);
     let RegionNameSelector = '';
   let value = document.getElementById('regionlist').value;
        
        for (let item of result.region) {
            RegionNameSelector += `<option value='${item.name}'>${item.name}</option>` 
            document.getElementById('regionlist').innerHTML = RegionNameSelector;
        
        
        document.getElementById('regionlist').addEventListener('change', function(){
            let RegionName = document.getElementById('regionlist').value;
            if (RegionName == item.name ){
                $("."+item.enname).css({ "transform": "scale(2.5)","z-index": "101","transition":"transform 2s"});
                document.getElementById("iArea").innerHTML = "<h1>"+item.name+"</h1>" + "<h3>Բնակչությունը "+item.population +" մարդ</h3>" + "<h3>Տարածքի մակերեսը "+item.area +" կմ2</h3>" + "<h3>Մարզկենտրոնը  "+item.cities +"ն է</h3>"
                
            
                }else if(RegionName != item.name ){
                    $("."+item.enname).css({ "transform": "scale(1)","z-index": "1"});
                }
        })
        
        
        }
        
    }
  };
  xhttp.open("GET", "../marzer/armmarz.json", true);
  xhttp.send();
}
  loadDoc();
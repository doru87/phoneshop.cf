(function () {
   const filterBtn = document.querySelectorAll(".filter-btn");
   var checkboxes = document.querySelectorAll("input[type=checkbox]");

   var filter;

   filterBtn.forEach(function(btn){
       btn.addEventListener("click", function(event){
           event.preventDefault();
           filter = event.target.dataset.filter;

           const items = document.querySelectorAll(".store-item");
           $('document').ready(function(){

            const items = document.querySelectorAll(".store-item");

            var store = new Array;
            Array.from(items).forEach(item => {
                if(item.classList.contains(filter)){
    
                store.push(item.querySelector(".ram_memory-content").innerHTML);
                }
            })
            var uniqueItems = Array.from(new Set(store))
         
         var div = document.getElementsByClassName("checkbox-list")[0];
         
         for ( var i = 0; i < uniqueItems.length; i++ ) {
            
         
             var input = document.createElement("input");
             input.type = "checkbox";
             input.className = "checkbox";
             input.setAttribute('name',uniqueItems[i]);
             var label = document.createElement("label");
             label.innerHTML = uniqueItems[i];
             label.appendChild(input);
             div.appendChild(label);
         }
         
        })

        

           items.forEach(function(item){
               if(filter==="Toate"){
                item.style.display="block";
                // setTimeout(function() {
                //     location.reload();
                // }, 10);

                var checkboxes = document.querySelectorAll("input[type=checkbox]");
                for(var i = 0; i < checkboxes.length; i++){ 
                    if(checkboxes[i].type === "checkbox"){ 
                        var labels = checkboxes[i].parentNode.parentNode.removeChild(checkboxes[i].parentNode);
                    }
                }

           
                    const items = document.querySelectorAll(".store-item");
                    
                    var elem = new Array;
                    Array.from(items).forEach(item => {
                   
                        elem.push(item.querySelector(".store-item-content").innerHTML);
                  
                    })
                    var uniqueItems = Array.from(new Set(elem))
            
                 var div = document.getElementsByClassName("checkbox-list")[0];
                 
                 for ( var i = 0; i < uniqueItems.length; i++ ) {
                    
                 
                     var input = document.createElement("input");
                     input.type = "checkbox";
                     input.className = "checkbox";
                     input.setAttribute('name',uniqueItems[i]);
                     var label = document.createElement("label");
                     label.innerHTML = uniqueItems[i];
                     label.appendChild(input);
                     div.appendChild(label);
                 }
                
                
                 var checkboxes = document.querySelectorAll("input[type=checkbox]");
                   
                
                 checkboxes.forEach(function(checkbox){
                
                     checkbox.addEventListener('change', function() {
                      
                         if(this.checked) {
                             var name = this.getAttribute("name");
                
                             const items = document.querySelectorAll(".store-item");
                
                             var productElements = Array.prototype.filter.call( items, function(item) {
                 
                                 return item.querySelector(".store-item-content").innerHTML.startsWith(name);
                                
                             })
                         
                             var store_items = document.getElementById('filter-items');
                                 for (var i=0; i<productElements.length; i++) {
                                 productElements[i].removeAttribute("style");
                                 
                                 store_items.appendChild(productElements[i]);
                             }
                                 var elem = document.getElementById('store-items');
                                     elem.style.display = 'none';
                
                         }
                     })
                 })
                    
              

            
               }
               else {
                 if(item.classList.contains(filter)){
                    item.style.display="block";
                    var elem = document.getElementById('store-items');
                    elem.style.display = 'flex';
                    var checkboxes = document.querySelectorAll("input[type=checkbox]");
                    for(var i = 0; i < checkboxes.length; i++){ 
                        if(checkboxes[i].type === "checkbox"){ 
                            checkboxes[i].parentNode.parentNode.removeChild(checkboxes[i].parentNode);
                        }
                    }
        
                    $('document').ready(function(){
                    var checkboxes = document.querySelectorAll("input[type=checkbox]");

                        checkboxes.forEach(function(checkbox){
                 
                         checkbox.addEventListener('change', function() {
                          
                             if(this.checked) {
                                 var name = this.getAttribute("name");
                                 const items = document.querySelectorAll(".store-item");
             
                                 items.forEach(function(item){
                                     // filternew = filter.substring(0, filter.length - 1)
                                    console.log(item.querySelector("#store-item-name").innerHTML);
                                     if(item.querySelector(".ram_memory-content").innerHTML === name && item.querySelector("#store-item-name").innerHTML.includes(filter)){
                                         item.querySelector("#store-item-name").parentElement.parentElement.parentElement.parentElement.style.display="block";
                                     }else{
                                         item.querySelector(".store-item-content").parentElement.parentElement.parentElement.parentElement.style.display="none";}
                                     
                                 })
                             }
                 
                         })
                 
                     })
                    })
                   
                 }else{
                    item.style.display="none";
                 }
               }
           })
         

       })

   })

  
}());

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200) {  
    date_tabel = JSON.parse(this.responseText);
    var str=""
    for(var model in date_tabel.telefoane){
      
        for (var i = 0; i < date_tabel.telefoane[model].length; i++) {
            var store_item = date_tabel.telefoane[model][i].store_item;
            var data_item = date_tabel.telefoane[model][i].data_item;
            var img = date_tabel.telefoane[model][i].img;
            var store_item_name = date_tabel.telefoane[model][i].store_item_name;
            var store_item_value = date_tabel.telefoane[model][i].store_item_value;
            var store_item_content = date_tabel.telefoane[model][i].store_item_content;
            var ram_memory = date_tabel.telefoane[model][i].ram_memory;

            console.log(store_item,data_item,img,store_item_name,store_item_value,store_item_content);

        str += `<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${store_item}" data-item="${data_item}">
                    <div class="card" style="">
                        <div class="img-container">
                        <img src="img/${img}" class="card-img-top store-img" alt="">

                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <span>Model: </span><div id="store-item-name" value="${store_item_name}">${store_item}</div>
                                <span>Pret: </span><h6 class="store-item-value"> <strong id="store-item-price" class="font-weight-bold"> ${store_item_value}</strong> lei</h6>
                                <span>Sistem de operare: </span><h6 class="store-item-content">${store_item_content}</h6>
                                <span>Memorie RAM</span><h6 class="ram_memory-content">${ram_memory}</h6>
                            </div>
                        </div>
                    </div>
        
                </div>`
        }

    }
   
  }
  document.getElementById("store-items").innerHTML=str;
};
xhttp.open("GET", "http://localhost/phoneshop.cf/js/date.json", true);
xhttp.send();


(function () {
    $('document').ready(function(){
    const items = document.querySelectorAll(".store-item");
                    
        var elem = new Array;
        Array.from(items).forEach(item => {
        
            elem.push(item.querySelector(".store-item-content").innerHTML);
        
        })
        var uniqueItems = Array.from(new Set(elem));
        console.log(uniqueItems);
        
        var div = document.getElementsByClassName("checkbox-list")[0];
        
        for ( var i = 0; i < uniqueItems.length; i++ ) {
        
        
            var input = document.createElement("input");
            input.type = "checkbox";
            input.className = "checkbox";
            input.setAttribute('name',uniqueItems[i]);
            var label = document.createElement("label");
            label.innerHTML = uniqueItems[i];
            label.appendChild(input);
            div.appendChild(label);
            console.log(div);
        }
        
    
    
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        
    
        checkboxes.forEach(function(checkbox){
    
            checkbox.addEventListener('change', function() {
            
                if(this.checked) {
                    var name = this.getAttribute("name");
    
                    const items = document.querySelectorAll(".store-item");
    
                    var productElements = Array.prototype.filter.call( items, function(item) {
        
                        return item.querySelector(".store-item-content").innerHTML.startsWith(name);
                    
                    })
                
                    var store_items = document.getElementById('filter-items');
                        for (var i=0; i<productElements.length; i++) {
                        productElements[i].removeAttribute("style");
                        
                        store_items.appendChild(productElements[i]);
                    }
                        var elem = document.getElementById('store-items');
                            elem.style.display = 'none';
    
                }
            })
        })
                })            
              
}());


(function(){

    const search = document.getElementById('search-item');

    search.addEventListener('keyup',function(){

        let value = search.value.toLowerCase().trim();

        const items = document.querySelectorAll('.store-item');

        items.forEach(function(item){
            let element = item.dataset.item;
           

           let length = value.length;
           let match = element.slice(0, length);
       
           if (value === match){
            item.style.display="block";
           }else{
            item.style.display="none";
           }
        })
    })
}());
function mascara_cpf(i){

    let num = i.value;
   
   if(isNaN(num[num.length-1])){
      i.value = null;
      return null;
   }
   
   i.setAttribute("maxlength", "14");
   if (num.length == 3 || num.length == 7) i.value += ".";
   if (num.length == 11) i.value += "-";

}

function isNumberCheck(t){
    let num = t.value;
    
    if(isNaN(num[num.length-1])){
        t.value = null;
        return null;
    }
    
}
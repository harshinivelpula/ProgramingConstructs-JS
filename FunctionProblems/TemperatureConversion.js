var celcious = 0;
var farenheight = 32;
 function ConvertCelciousToFarenHight(cel)
 {
    return (cel * 9/5) + 32;
 }
 function ConvertfarenheightToCelcious(far)
 {
    return (far - 32) * 5/9;
 }
convCeltoFar = ConvertCelciousToFarenHight(celcious);
convFarToCal = ConvertfarenheightToCelcious(farenheight);
console.log(convCeltoFar);
console.log(convFarToCal);
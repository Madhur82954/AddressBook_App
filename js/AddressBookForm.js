window.addEventListener("DOMContentLoaded",(event)=>{
    const name=document.querySelector('#name');
    name.addEventListener("input",function(){
        if(name.value.length==0){
            settextvalue(".name-error","");
            return;
        }
        try{
            new Contact().name=name.value;
            settextvalue(".name-error","");
        }
        catch(error){
            settextvalue(".name-error",error);
        }
    })

    const phoneNumber=document.querySelector('#phoneNumber');
    phoneNumber.addEventListener("input",function(){
        if(phoneNumber.value.length==0){
            settextvalue(".tel-error","");
            return;
        }
        try{
            new Contact().phonenumber=phoneNumber.value;
            settextvalue(".tel-error","");
        }
        catch(error){
            settextvalue(".tel-error",error);
        }
    })

    const address=document.querySelector('#address');
    address.addEventListener("input",function(){
        if(address.value.length==0){
            settextvalue(".address-error","");
            return;
        }
        try{
            new Contact().address=address.value;
            settextvalue(".address-error","");
        }
        catch(error){
            settextvalue(".address-error",error);
        }
    })

    const zip=document.querySelector("#zip");
    zip.addEventListener("input",function(){
        if(zip.value.length==0){
            settextvalue(".zip-error","");
            return;
        }
        try{
            new Contact().zip=name.zip;
            settextvalue(".zip-error","");
        }
        catch(error){
            settextvalue(".zip-error",error);
        }
    })
})
const settextvalue=(id,value)=>{
    const element=document.querySelector(id);
    element.textcontent=value;
}
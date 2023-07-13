window.addEventListener("DOMContentLoaded",(event)=>{
    validatename();
    validatePhoneNumber();
    validateAddress();
    validatezip();
})
    const validatename = () => {
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
}

    const validatePhoneNumber = () =>{
    const phoneNumber=document.querySelector('#phoneNumber');
    phoneNumber.addEventListener("input",function(){
        if(phoneNumber.value.length==0){
            settextvalue(".tel-error","");
            return;
        }
        try{
            new Contact().phoneNumber=phoneNumber.value;
            settextvalue(".tel-error","");
        }
        catch(error){
            settextvalue(".tel-error",error);
        }
    })
}

    const validateAddress = () =>{
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
}
 
    const validatezip = () =>{
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
}

const save = () => {
    try{
        let contact=createContact();
        createAndUpdateStorage(contact);
    }
    catch(error){
        alert(error);
    }
}

const createAndUpdateStorage = (contact) => {
    let contactList=JSON.parse(localStorage.getItem("ContactList"));
    if(contactList!=undefined){
        contactList.push(contact);
    }
    else{
        contactList=[contact];
    }
    alert(contact.toString());
    alert("Contact Added Succesfully");
    localStorage.setItem("ContactList",JSON.stringify(contactList));
}

const createContact=()=>{
    let contact=new Contact();
    contact.id=new Date().getTime();

    try{
        contact.name=getInputValueById("#name");
    }
    catch(error){
        settextvalue(".name-error",error);
        throw error;
    }

    try{
        contact.phoneNumber=getInputValueById("#phoneNumber");
    }
    catch(error){
        settextvalue(".tel-error",error);
        throw error;
    }

    try{
        contact.address=getInputValueById("#address");
    }
    catch(error){
        settextvalue(".address-error",error);
        throw error;
    }

    let city=getInputValueById("#city");
    if(city!="Select City"){
        contact.city=city;
    }
    else{
        throw "Please Select City";
    }

    let state=getInputValueById("#state");
    if(state!="Select State"){
        contact.state=state;
    }
    else{
        throw "Please Select State";
    }
    try{
        contact.zip=getInputValueById("#zip");
    }
    catch(error){
        settextvalue(".zip-error".error);
        throw error;
    }

    alert(contact.toString());
    return contact;
}
const settextvalue=(id,value)=>{
    const element=document.querySelector(id);
    element.textContent=value;
}

function getInputValueById(property){
    let value=document.querySelector(property).value;
    return value;
}
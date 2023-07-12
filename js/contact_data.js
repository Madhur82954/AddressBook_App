const nameRegex=RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
const PhonenumberRegex=RegExp("^[0-9]{1}\\s{1}[7-9]{1}[0-9]{9}$");
const addressRegex=RegExp("^[a-zA-Z0-9#,&]$");
const zipRegex=RegExp("^[0-9]{6}$");

class Contact{
    get id(){
        return this._id;
    }
    set id(id){
        this._id=is
    }
    get name(){
        return this._name;
    }
    set name(name){
        if(nameRegex.test(name)){
            this._name=name;
        }
        else{
            throw "Name is Invalid";
        }
    }
    get phonenumber(){
        return this._phonenumber;
    }
    set phonenumber(phonenumber){
        if(PhonenumberRegex.test(phonenumber)){
            this._phonenumber=phonenumber;
        }
        else{
            throw "Phone Number is Invalid";
        }
    }
    get address(){
        return this._address;
    }
    set address(address){
        if(addressRegex.test(address)){
            this._address=address;
        }
        else{
            throw "address is Invalid";
        }
    }
    get city(){
        return this._city;
    }
    set  city(city){
        this._city=city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state=state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        if(zipRegex.test(zip)){
            this._zip=zip;
        }
        else{
            throw "Zip is Invalid";
        }
    }
    toString(){
        return "id ="+this.id+" , name = "+this.name+" , PhoneNumber = "+this.phonenumber+", Address = "+this.address+" , city = "+this.city+", state = "+this.state+", zip = "+this.zip;
    }
}
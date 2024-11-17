"use client"

var isLoggedIn:boolean = false;

export function getIsLoggedIn(){
    return isLoggedIn;
}

export function setIsLoggedIn(value:boolean){
    isLoggedIn = value
};

var Id = "";
export function setId(idstr:string){ 
    Id = idstr
};

export function getId(){ 
    return Id;
};







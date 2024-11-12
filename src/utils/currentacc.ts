"use server"

var isLoggedIn:boolean = false;

export async function getIsLoggedIn():Promise<boolean>{
    return isLoggedIn;
}

export async function setIsLoggedIn(value:boolean):Promise<void>{
    isLoggedIn = value
};

var Id = "default";
export async function setId(idstr:string):Promise<void>{ 
    Id = idstr
};

export async function getId():Promise<string>{ 
    return Id;
};

var Password = "default";
export async function setPassword(pwstr:string):Promise<void> {
    Password = pwstr
};

export async function getPassword():Promise<string>{ 
    return Password;
};






// create strong password
const password = {
    name:null,
    dobyear:null,
    website:null
}

function dynamicPassword(pass, name, year,web){
    pass.name = name;
    pass.dobyear = year;
    pass.website = web;
    
    let  sPassword = ''
    for ( const p in pass ){
        sPassword += (pass[p] + '#')
    }
    const result = sPassword.slice(0,sPassword.length-1).split('#').reverse().join('#').toLowerCase().charAt(0).toUpperCase() + sPassword.slice(1);
    return result;
}

const greatePassword = dynamicPassword(password, 'Abusaid', 1999, 'google' )
// console.log(greatePassword)

// greate password

const myInfo = {
    name:'Hasan',
    birthYear:2005,
    website:'google'
}
function greatePasswords(myInfo, name, year, web){
    const byear = year.toString();
    myInfo.name = name;
    myInfo.birthYear = byear;
    myInfo.website = web;
    if ((byear.length < 4 || byear.length > 4) || ((name === undefined || web === undefined || year === undefined))){
        return 'Invalid';
    }
    else{
        const firstLetter = myInfo.website[0].toUpperCase() + myInfo.website.slice(1)
        const password = firstLetter + '#' + myInfo.name.toLowerCase() + '@' + myInfo.birthYear;
        return password;
    }
}

const result = greatePasswords(myInfo, 'Babul', 1999, 'google') ;
console.log(result)
    // ======= string in js ======//

    const name = "abu";
    const repoCount = 40;

    // console.log(name + repoCount + " value1");
    console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

    const gameName = new String("abu-shama");

    console.log(gameName[0]);
    console.log(gameName[1]);
    console.log(gameName.__proto__);

    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf("s"));

    const newSting = gameName.substring(0, 4);
    console.log(newSting);

    const anotherSting = gameName.slice(4 , 7); // u can take neg value
    console.log(anotherSting);

    const newSting1 = "      abu      ";
    console.log(newSting1.trim()); /// removed space.

    const url = "https://abu.com/abu%20shama";
    console.log(url.replace("%20", "_"));

    console.log(url.includes("abu"));
    console.log(url.includes("man"));

    console.log(gameName.split("-")); // coverted Array base one

    // -: All String Methods:-
    /*
        length
    : 
    8
    [[Prototype]]
    : 
    String
    anchor
    : 
    ƒ anchor()
    at
    : 
    ƒ at()
    big
    : 
    ƒ big()
    blink
    : 
    ƒ blink()
    length
    : 
    0
    name
    : 
    "blink"
    arguments
    : 
    (...)
    caller
    : 
    (...)
    [[Prototype]]
    : 
    ƒ ()
    [[Scopes]]
    : 
    Scopes[0]
    bold
    : 
    ƒ bold()
    charAt
    : 
    ƒ charAt()
    charCodeAt
    : 
    ƒ charCodeAt()
    codePointAt
    : 
    ƒ codePointAt()
    concat
    : 
    ƒ concat()
    constructor
    : 
    ƒ String()
    endsWith
    : 
    ƒ endsWith()
    fixed
    : 
    ƒ fixed()
    fontcolor
    : 
    ƒ fontcolor()
    fontsize
    : 
    ƒ fontsize()
    includes
    : 
    ƒ includes()
    indexOf
    : 
    ƒ indexOf()
    isWellFormed
    : 
    ƒ isWellFormed()
    italics
    : 
    ƒ italics()
    lastIndexOf
    : 
    ƒ lastIndexOf()
    length
    : 
    0
    link
    : 
    ƒ link()
    localeCompare
    : 
    ƒ localeCompare()
    match
    : 
    ƒ match()
    matchAll
    : 
    ƒ matchAll()
    normalize
    : 
    ƒ normalize()
    padEnd
    : 
    ƒ padEnd()
    padStart
    : 
    ƒ padStart()
    repeat
    : 
    ƒ repeat()
    replace
    : 
    ƒ replace()
    replaceAll
    : 
    ƒ replaceAll()
    search
    : 
    ƒ search()
    slice
    : 
    ƒ slice()
    small
    : 
    ƒ small()
    split
    : 
    ƒ split()
    startsWith
    : 
    ƒ startsWith()
    strike
    : 
    ƒ strike()
    sub
    : 
    ƒ sub()
    substr
    : 
    ƒ substr()
    substring
    : 
    ƒ substring()
    sup
    : 
    ƒ sup()
    toLocaleLowerCase
    : 
    ƒ toLocaleLowerCase()
    toLocaleUpperCase
    : 
    ƒ toLocaleUpperCase()
    toLowerCase
    : 
    ƒ toLowerCase()
    toString
    : 
    ƒ toString()
    toUpperCase
    : 
    ƒ toUpperCase()
    toWellFormed
    : 
    ƒ toWellFormed()
    trim
    : 
    ƒ trim()
    trimEnd
    : 
    ƒ trimEnd()
    trimLeft
    : 
    ƒ trimStart()
    trimRight
    : 
    ƒ trimEnd()
    trimStart
    : 
    ƒ trimStart()
    valueOf
    : 
    ƒ valueOf()
    Symbol(Symbol.iterator)
    : 
    ƒ [Symbol.iterator]()
    [[Prototype]]
    : 
    Object
    [[PrimitiveValue]]
    : 
    ""
    [[PrimitiveValue]]
    : 
    "abushama"

    */
/*
1. Swap key with value in object

    Input
    { A : 1, B : 2, C : 3, D : 4 }
    Output
    {1 : A, 2 : B, 3 : C, 4 : D}

*/

let inputvalue= {
                    A : 1, 
                    B : 2,
                    C : 3,
                    D : 4 
                }


let Outputval={}

//solve the problem
for (let key in inputvalue) {
    //object[expression]
    inputvalue[key]
    console.log('input----->>',key);
    console.log('value----->>',inputvalue[key]);

    Outputval[inputvalue[key]] = key;
}

console.log("output object",Outputval)
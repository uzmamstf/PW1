

let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];



//answers
//1
//console.log(students[0].name);


// Print each student in this format:
// Name: Amna
// Gender: Female
// City: Karachi
// Score: 56 marks


// for (i = 0; i <= students.length; i++) {
//     // console.log( "Name" + students[i].name + "gender" + students[i].gender  + students[i].admissionTestScore + " marks" + students[i].address.city);
//     console.log(students[i].name);


    //  if(students[i].gender === "f"){
    //      console.log(" Gender : female")

    //  } else{
    //     console.log(" Gender : male")

    //  }

    // }
    //2.Print names of female students only.

    // for (i = 0; i >= students.length; i++) {

    //     if (gender == "f") {

    //         console.log(students[i].name);
    //     }
    // }
    // //3.Print names of male students only.
    // for (i = 0; i <= students.length; i++) {

    //     if (gender == "m") {

    //         console.log(students[i].name);
    //     }
    // }


    // //4.Print names of students who have passed the admission test. Passing marks are 50.
    // for (i = 0; i <= students.length; i++) {

    //     if (students[i].admissionTestScore >= 50) {

    //         console.log(students[i].name);
    //     }
    // }

    // //5.Print names of eligible students only (students who have internet and live in Karachi are eligible)
    // for (i = 0; i <= students.length; i++) {

    //     if (students[i].hasInternet == true && students[i].address.city == "Karachi") {

    //         console.log(students[i].name);
    //     }
    // }



    // //6.Print address of each student in this format:

    // for (i = 0; i <= students.length; i++) {
    //     console.log(students[i].name + "'s" + "address" + students[i].address.ilaqa +" in " + students[i].address.city +" ,"+ students[i].address.country );

    // }


    // //7.Print names and phone number of students who have Ufone
    // for (i = 0; i <= students.length; i++) {

    //     if (students[i].phoneNo.charAt(2) == "3" && students[i].phoneNo.charAt(3) <= "7" ) {
    //         console.log(students[i].name +" 's phone is "+ students[i].phoneNo);
    //     }
    // }

    // //8. Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
// let groupA =[];
// let groupB = [];
//     for (let i = 0; i <= students.length; i++) {

//         if (students[i].hasJob === true || students[i].hasSchoolBefore === true) {
//             groupA.push(students[i].name);
//         }
            
        
//         // console.log("Group B: " + students[i].name);
//         else {
//              groupB.push(students[i].name);
//             }
//           //  console.log("Group A:" + students[i].name);
        
//     }
//     console.log( "Group A:" +  groupA.join(", "));
//     console.log( "Group B:" +  groupB.join(", "));


    // //9.Print age of each student in the below format:


     /* - get year
        - get today year
        - today year -  year - 1 
        - get month 
        - get today month
        - 

*/
    for (i = 0; i >= students.length; i++) {
         
      let dob = students[i].dob;
      let today = new Date();
      let yearDiff = today.getFullYear();

       // console.log(students[i].name + "age is" + students[i].age + "years");
    }

// for accessing nested objects
const regularUser = {
  email: "acd@gmail.com",
  fullname: {
    userName: {
      firstName: "Sushobhan",
      lastName: "Patra",
    },
  },
};
console.log(regularUser.fullname.userName.firstName);

//merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 }; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3);
const obj4 = { ...obj1, ...obj2 };
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// if data comming from databases
const user = [
  {
    id: 1,
    email: "su@gmail",
  },
  {
    id: 1,
    email: "su@gmail",
  },
  {
    id: 1,
    email: "su@gmail",
  },
  {
    id: 1,
    email: "su@gmail",
  },
];
console.log(user[1].email);

// methods of objects
const fbuser = {
  id: "12345jd",
  name: "ishan",
  isLoggedIn: true,
};
// return an array
console.log(Object.keys(fbuser));
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(fbuser));
// [ '12345jd', 'ishan', true ]
console.log(Object.entries(fbuser));
// [ [ 'id', '12345jd' ], [ 'name', 'ishan' ], [ 'isLoggedIn', true ] ]

// for checking the property
console.log(fbuser.hasOwnProperty("isLoggedIn")); //returns boolean true
console.log(fbuser.hasOwnProperty("ishan")); //returns boolean false

// objects de - structuring
const course = {
  courseName: "Js in hindi",
  price: "999",
  courseInstructor: "Hitesh Chowdhury",
};
// course.courseInstructor for accessing course instructor

const { courseInstructor } = course;
console.log(courseInstructor); //Hitesh Chowdhury

const { courseInstructor: instructor } = course;
console.log(instructor); //Hitesh Chowdhury

// JSON
// {
//     "name":"Sushobhan",
//     "age":"21",
// }

// learning Object
// --> object declear{},value access dot and square,how to use symbol as a key in object [],merging objects... or assign,function inside object.(),access object inside array[].,access keys,values  and entries from an objects Object.keys/values/entries,property exist or not hasOwnProperty,object destructuring

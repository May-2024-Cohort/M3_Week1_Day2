
const express = require("express")

const app = express()

const logger = require("morgan")

// telling my app all my static files are in the public folder

app.use(express.static("public"))

app.use(logger("dev"))


// custom middleware
function myMiddleware(req,res,next){

  console.log("My Middleware runs")
  next()
}

app.use(myMiddleware)

// Database of Students
let students = [
    {
      "id": 1,
      "name": "Daniel",
      "country": "Spain"
    },
    {
      "id": 2,
      "name": "Judi",
      "country": "Netherlands"
    },
    {
      "id": 3,
      "name": "Toni",
      "country": "Spain"
    },
    {
      "id": 4,
      "name": "Eleftherios",
      "country": "Germany"
    },
    {
      "id": 5,
      "name": "Mikko",
      "country": "Netherlands"
    },
    {
        "id":6,
        "name":"Amit",
        "Country":"Portugal"
    }
  ]



// GET for all students

app.get("/students",(request,response)=>{

  response.json(students)
})


// GET: for 1 student
// route parameters
app.get("/students/:id",(req,res)=>{

    // step 1: fetch the id of the student we want
  console.log(req.params.id)

  // step 2: get the object with the id from the database

    let foundStudent = students.find((oneStudent)=>{
      return oneStudent.id == req.params.id
    })

    console.log(foundStudent)
  // step 3: send the object back as a response

  res.json(foundStudent)
})





let courses = [
  {

      id:1,
      name:"Web Dev",
      stack:["React","Node","Express","MongoDB"]
  },
  {
      id:2,
      name:"Data Analytics",
      stack:["Tablou","Python","Excel","Pandas"]
  },
  {
      id:3,
      name:"System Adminstrator",
      stack:["Linux","Red Hat","Ubuntu","Docker"]
  }
]

// Exercise 1:

//    1. Write 2 endpoints
//    2. First endpoint will return all the courses at /courses
//    3. Second endpoint will be at /courses/:id
//    4. When the endpoint is hit the course with the proper id should be returned


app.get("/courses/:id",(req,res)=>{

  // let validNumber =  Number(req.params.id)
  // console.log(validNumber)
  // if(validNumber== NaN){
  //   res.json({errorMessage: "Please input a valid number"})
  //   return 
  // }



  /* 
  Exercise 2:

      1. create an html file called about.html that has an <h1>Your name</h1>
      2. create an endpoint /about-me that returns the about.html file
  */


      

  let foundCourse = courses.find((oneCourse)=>{
    return oneCourse.id == req.params.id
  })
  
  res.json(foundCourse)
})


app.get('/home',(req,res)=>{

  res.sendFile(__dirname + "/views/home.html")
})


// used for searching and filtering
app.get("/search",(req)=>{
  console.log(req.query)
})



app.listen(5005)
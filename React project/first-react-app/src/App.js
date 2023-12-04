import "./App.css"
import styles from "./styles/User.module.css"
import BodyComponent from "./components/BodyComponent"
import Footer from "./components/Footer"
import Header from "./components/Header"
import UserCard from "./components/UserCard"
function AppComponent(){
  let userData=[
    {name:"Harsh" ,age:12},
    {name:"Tinu", age:14},
    {name:"Piyu", age:10},
    {name:"Ginu" ,age:11}
  ]

  const filterData=userData.filter((oneobj) => oneobj.age>9);

  const myTask=['Go to 1','Go to 2','Go to 3']

  return(
  <>
  <Header />

  {/* //instead of calling bodycomponent again we use map and loop on the data */}
  {/* <BodyComponent name={"Harsh"} age={12} /> */}
  {/* <BodyComponent name={"JOHN"} age={14} />
  <BodyComponent name={"Happy"}  /> */}
<div className={styles.cardContainer}>
  {filterData.map((oneObj) => (
    //<BodyComponent name={oneObj.name} age={oneObj.age} /> 
  
    <UserCard
      name={oneObj.name}
      age={oneObj.age}
      mobilenumber={"878787"}
      />
  ))}
  </div>
   {myTask.map((objlist , index) => (
    <ul>
    <li key={index}>
      {objlist}
    </li>
  </ul>
   ))}
 
  <Footer />
  </>);
}

export default AppComponent
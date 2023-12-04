function BodyComponent(props){
  //let userName=props.name;
  //let age=props.age;

  //destructing 


  let {name:userName,age=10}=props;
    //let fname="tinu"
    //let lname="bhandari"
    function handleClick(){
      console.log("Click")
    }
    function handleSubmit(e){
      e.preventDefault()
      console.log("submitted")
    }
    return <>
    <h1> My name is Tinu</h1>
  <p>Paragraph </p>
  <h2>My user has a name {userName} {age}</h2>
  <button onClick={handleClick}>My button</button>
  <form onSubmit={handleSubmit} className="form-comp">
  <label htmlFor="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label htmlFor="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/> */
  </form> 

    </>
}

export default BodyComponent;
# event-maps-api
RESTful API for Event Maps Application
## Backend repository
https://github.com/cse3311-project/event-maps-api
<br/>
// CURRENT END POINTS 

// USER
// SIGN UP
URL: https://event-maps-api.herokuapp.com/user/signup/
REQUEST TYPE: POST
BODY: 
  email: string ( required, email-format validation and uniqueness ),
  username: string ( required, uniqueness ),
  password: string ( required, encrypted password is stored )
  
RESPONSE: 
  success: bool ( true if user created successfully )
  error: error message ( null if successs is true ) 






// GETTING ALL EVENTS
URL: https://event-maps-api.herokuapp.com/events/
REQUEST TYPE: GET
BODY: 
  name: string ( required ) ,
  organization: string ( optional ),
  address: string ( required ),
  longitude: number ( required ),
  latitude: number ( required ),
  category: string ( required ),
  description: string ( required ),
  likes: number ( default: 0 ),
  userId: reference to User ( required ),
  
  RESPONSE: 
  
  
  
  

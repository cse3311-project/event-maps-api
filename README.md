# Event Maps API
RESTful API for Event Maps Application

__Base URL__ 
<br/>
<br/>
https://event-maps-api.herokuapp.com
<br/>

## User 
## Sign up
#### GET /user/signup/
## Authentication
jwc authentication token

#### Path Parameters
None <br/>

#### Query String

email     |   string   |   required, format validation( user@mail.com ) unique <br/>
username  |   string   |   required, unique <br/>
password  |   string   |   required  <br/>
<br/>

#### Responses

URL: https://event-maps-api.herokuapp.com/user/signup/
REQUEST TYPE: POST
BODY: 
  email: string ( required, email-format validation and uniqueness ),
  username: string ( required, uniqueness ),
  password: string ( required, encrypted password is stored )
  
RESPONSE: 
  success: bool ( true if user created successfully )
  error: error message ( null if successs is true ) 
## Events


## Ranks


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
  
  
  
  

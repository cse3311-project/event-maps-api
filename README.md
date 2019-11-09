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
#### Authentication
jwc authentication token

#### Path Parameters
None <br/>

#### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| email | String | True | example@mail.com |
| username | String | True | None |
| password | String | True | None |
<br/>

#### Response
| Property Name | Value | 
| --- | --- |
| successful | True/False | 
| message | message regarding user account creation |
<br/>


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
  
  
  
  

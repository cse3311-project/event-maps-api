# Event Maps API
RESTful API for Event Maps Application

## Base URL
https://event-maps-api.herokuapp.com

## HTTP Status Codes
__201:__ successful, resource creation <br/><br/>
__200:__ successful <br/><br/>
__500:__ internal server error <br/><br/>
__409:__ conflict <br/><br/>

## User 
## Sign up
#### POST /user/signup/
#### Authentication
jwc authentication token

#### Path Parameters
None <br/>

#### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| email | String | true | example@mail.com |
| username | String | true | None |
| password | String | true | None |
<br/>

#### Response
### 201
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | true | 
| message | String | user created successfully |
### 409
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| message | String | username/email is already linked to an existing account |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |



## Events


## Ranks

  
  
  
  

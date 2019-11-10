# Event Maps API
RESTful API for Event Maps Application

## Base URL
https://event-maps-api.herokuapp.com

## HTTP Status Codes
__201:__ Successful, resource creation <br/><br/>
__200:__ Successful <br/><br/>
__401:__ Unauthorized <br/><br/>
__500:__ Internal server error <br/><br/>
__409:__ Conflict <br/><br/>

# User 
## Sign up
#### POST /user/signup/
### Authentication
jwc authentication token

### Path Parameters
None
### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| email | String | true | example@mail.com |
| username | String | true | None |
| password | String | true | None |
### Responses
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

## Log in
#### POST /user/login/
### Authentication
jwc authentication token

### Path Parameters
None
### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| username | String | true | example@mail.com or username |
| password | String | true | None |
### Responses
### 200
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | true | 
| message | String | Authentication Successful |
### 401
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| message | String | Authentication failed, incorrect password or username/email is not linked to an existing account |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |




## Events


## Ranks

  
  
  
  

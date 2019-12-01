# Event Maps API
RESTful API for Event Maps Application

## Base URL
https://event-maps-api.herokuapp.com

## HTTP Status Codes
__200:__ Standard response for successful HTTP requests. <br/><br/>
__201:__ The request has been fulfilled and resulted in a new resource being created. <br/><br/>
__401:__ Error code response for missing or invalid authentication <br/><br/>
__404:__ The server has not found anything matching the Request-URI <br/><br/>
__409:__ The request could not be completed due to a conflict with the current state of the resource <br/><br />
__500:__ The server encountered an unexpected condition which prevented it from fulfilling the request <br/><br/>

# Schemas
## User
| Property Name | Type | Format | Default Value | Autogenerated |
| --- | --- | --- | --- | --- |
| \_id | ObjectId | None | None | yes |
| email | String | example@mail.com | None | no |
| username | String | None | None | no |
| password | String  | None | None | no |

## Event
| Property Name | Type | Format | Default Value | Autogenerated |
| --- | --- | --- | --- | --- |
| \_id | ObjectId | None | None | yes |
| name | String | None | None | no |
| address | String | None | None | no |
| longitude | Number | None | None | no |
| latitude | Number | None | None | no |
| category | String | None | None | no |
| likes | Number | None | 0 | no |
| tag | String | None | None | no |
| description | String | None | None | no |
| organization | String | None | None | no |
| eventDate | Date | None | YYYY-MM-DD | no |
| lastUpdated | Date | None | YYYY-MM-DD | yes |
| username | String | None | None | no |

## Rank
| Property Name | Type | Format | Default Value | Autogenerated |
| --- | --- | --- | --- | --- |
| \_id | ObjectId | None | None | yes |
| userId | ObjectId( User Reference) | None | None | yes |
| username | String | None | None | no |
| points | Number  | None | 0 | no |

# Endpoints
# User 
## Sign Up
#### POST /user/signup/
### Authentication
jwc authentication token

### Path Parameters
__None__
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

## Log In
#### POST /user/login/
### Authentication
jwc authentication token

### Path Parameters
__None__
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

## Get User Info
#### GET /user/{userId}
### Authentication
jwc authentication token

### Path Parameters
__userId__: unique id generated by mongoose 
### Query String
__None__
### Responses
### 200
| Property Name | Type | Description |
| --- | --- | --- |
| user | User | User account information( [see User schema](#user) for properties ) |
| message | String | Authentication Successful |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |

## Delete User 
#### DEL /user/{userId}
### Authentication
jwc authentication token

### Path Parameters
__userId__: unique id generated by mongoose 
### Query String
__None__
### Responses
### 200
| Property Name | Type | Description |
| --- | --- | --- |
| successful | bool | false | 
| message | String | User successfully removed from system |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |

## Fetch Events Created By User
#### GET /user/events/created/{username}
### Authentication
jwc authentication token

### Path Parameters
__username__: unique username associated with user 
### Query String
__None__
### Responses
### 200
| Property Name | Type | Description |
| --- | --- | --- |
| successful | bool | true | 
| UserCreatedEvents | Array | Array of Events created by the specified user ( [see Event schema](#event) for properties ) |
| message | String | events linked to user fetched |
### 404
| Property Name | Type | Description |
| --- | --- | --- |
| successful | bool | false | 
| message | String | No events linked to user found |

### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |

## Events
## Create Event
#### POST /events/
### Authentication
jwc authentication token

### Path Parameters
__None__
### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| name| String | true | None |
| organization | String | false | None |
| eventDate | Date | true | YYYY-MM-DD |
| address | String | false | None |
| longitude | Number | true | None |
| latitude | Number | true | None |
| category | String | false | None |
| tag | String | false | None |
| description | String | false | None |
| username | String | true | None |
### Responses
### 201
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | true | 
| message | String | event created successfully |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |


## Event likes 
#### PATCH /events/<eventId>
### Authentication
jwc authentication token

### Path Parameters
eventId: unique id generated by Mongoose

### Query String
| Property Name | Type | Required | Format |
| --- | --- | --- | --- |
| likes | Number | true | None |
### request body example
{
  "propName":	"likes", "value": "5"
}



## Ranks

  
  
  

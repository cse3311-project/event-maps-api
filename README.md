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
## Sign up
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

## Log in
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
| user | User | User account information( see User schema for properties ) |
| message | String | Authentication Successful |
### 500
| Property Name | Type | value | 
| --- | --- | --- |
| successful | bool | false | 
| error | String | error message |



## Events


## Ranks

  
  
  
  

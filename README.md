## Project Name: SS Backend

#### Fully Functional and Flexible Production Ready Backend With JWT Cookie Based Authentication

### Prerequisites

- Node.js (v18.16.0 LTS) should be installed on your system. You can download it from [here](https://nodejs.org).

#### MongoDB

- The project uses MongoDB Cloud as a database. No need to integrate any DB Credentials.

### Getting Started

- To get you started you can simply clone the repository:

`git clone https://github.com/itzrizvi/SS-BACKEND-TASK-Shahriar-Rizvi.git`

- Open terminal on the root of the repo folder and run the following commands

- Install the dependencies

`npm install`

### Start the server

- Start the server with `npm run dev` command

<hr>

## API Docs

<hr>

### Main Three API's

### GET List and Single Item API of Movie and TV Show

### How the GET API Works

This API provides two main functionalities: retrieving a list of items and retrieving a single item.

- The `getItemList` query retrieves a paginated list of items, such as movies and TV shows.
- The `getSingleItem` query retrieves a single item based on its ID.

### Query Parameters and Types

#### `getItemList` Query:

- `query` (Object): An input object containing the following optional fields:
- `perPage` (Integer): The number of items to be displayed per page.
- `page` (Integer): The page number of the items to retrieve.

#### `getSingleItem` Query:

- `query` (Object): An input object containing the following field:
- `id` (String): The ID of the item to retrieve.

### Output

#### `getItemList` Output:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.
- `movies` (Array of Movie objects): The retrieved movies.
- `tvShows` (Array of TVShow objects): The retrieved TV shows.
- `pagination` (Object): An object containing pagination metadata:
- `page` (Integer): The current page number.
- `perPage` (Integer): The number of items per page.
- `totalItems` (Integer): The total number of items.
- `totalPages` (Integer): The total number of pages.

#### `getSingleItem` Output:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.
- `movie` (Movie object): The retrieved movie, if found.
- `tvShow` (TVShow object): The retrieved TV show, if found.

### How the POST API Works:

- The API provides a mutation called `createMovie`.
- This mutation is used to create a new movie.
- The mutation expects a `CreateMovieInput` object as input, containing various details of the movie.
- Upon receiving the input, the API creates a new movie using the provided data.
- If the movie is created successfully, the API returns a success message.
- If there is an error during the creation process, the API returns an error message.

### Mutation Parameters and Types:

#### The mutation `createMovie` has a single parameter:

- data (Object of type CreateMovieInput): Contains the details of the movie to be created.

#### The `CreateMovieInput` type has the following required fields:

- `title` (String)
- `releaseDate` (String)
- `runtime` (String)
- `actors` (Array of Strings)
- `actresses` (Array of Strings)
- `producers` (Array of Strings)
- `genres` (Array of Strings)
- `directors` (Array of Strings)
- `productionTeam` (Array of Strings)
- `sponsors` (Array of Strings)
- `cameraAndItTeam` (Array of Strings)
- `visualEffectsTeam` (Array of Strings)
- `artTeam` (Array of Strings)
- `writers` (Array of Strings)
- `musicTeam` (Array of Strings)
- `locationDepartment` (Array of Strings)
- `costumeDepartment` (Array of Strings)
- `imdbRating` (String)
- `origin` (String)

### Output:

#### The output of the createMovie mutation is of type `CommonOutput`.

#### The CommonOutput type has the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.

<hr>

## Authentications

An admin has all privileges including create, delete and update movie or tvshow and a user or guest visitor can only retrieve list of movies or tvshows or any specific one.

<hr>

### ADMIN Authentication

### How the API works briefly:

- The Admin API provides two operations: `adminSignUp` and `adminSignIn`.
- The `adminSignUp` mutation allows an admin user to sign up by providing their first name, last name, email, and password.
- The `adminSignIn` mutation allows an admin user to sign in by providing their email and password.
- Upon successful sign-up or sign-in, an authentication token (JWT) is generated, and it is returned in the response for further authorization and also set token to Cookie as it follows cookie based auth.

### Mutation Parameters and Types:

#### For adminSignUp:

- `data` (Object of type `AdminInput`): Contains the admin user's `first name, last name, email, and password`.

#### For adminSignIn:

- `email` (String): The email of the admin user.
- `password` (String): The password of the admin user.

### Output:

#### For adminSignUp and adminSignIn, the output is of type AdminAuthOutput.

### AdminAuthOutput contains the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): Indicates whether the operation was successful (true) or not (false).
- `data` (Object of type AuthPayload): Contains the authentication payload.

### AuthPayload contains the following fields:

- `authToken` (String): The authentication token (JWT) generated upon successful sign-up or sign-in.
- `id` (String): The ID of the admin user.
- `first_name` (String): The first name of the admin user.
- `last_name` (String): The last name of the admin user.
- `role` (String): The role of the admin user (Auto generated by routes).
- `email` (String): The email of the admin user.
- `User` API:

### USER Authentication

### How the API works briefly:

- The User API provides two operations: `userSignUp` and `userSignIn`.
- The `userSignUp` mutation allows a user to sign up by providing their `first name, last name, email, and password`.
- The `userSignIn` mutation allows a user to sign in by providing their email and password.
- Upon successful sign-up or sign-in, an authentication token (JWT) is generated, and it is returned in the response for further authorization.

### Mutation Parameters and Types:

#### For userSignUp:

- `data` (Object of type UserInput): Contains the user's first name, last name, email, and password.

#### For userSignIn:

- `email` (String): The email of the user.
- `password` (String): The password of the user.

### Output:

#### For userSignUp and userSignIn, the output is of type UserAuthOutput.

### UserAuthOutput contains the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): Indicates whether the operation was successful (true) or not (false).
- `data` (Object of type AuthPayload): Contains the authentication payload.

### AuthPayload contains the following fields:

- `authToken` (String): The authentication token (JWT) generated upon successful sign-up or sign-in.
- `id` (String): The ID of the user.
- `first_name` (String): The first name of the user.
- `last_name` (String): The last name of the user.
- `role` (String): The role of the user.
- `email` (String): The email of the user.

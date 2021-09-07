### Timed Attack
An app to view and compare lap times.
My objective is to create an app where you can see a list of tracks and see the top times of users given the track you use. The user can filter the lap times to help align what their looking for to compare themselves to others and help improve on their own lap time.

The user will be able to:
- Have a profile with their "garage" of cars
- Post, Edit, delete their cars
- post, edit, and delete lap times.

### User Stories
The user will be people who enjoy driving on race tracks and want a place to view lap times and compare them to others to help improve. The user will start on the landing page where they can sign in or sign up. Then they will be redirected to the profile page where they can add a car to their garage. Once a car is added. They will be able to post lap times! If no car is added, they will not be able to post a lap time. When the user goes to a track show page, they will be able to filter lap times based on parameters they choose. Such as tire used, and car model. 

### Wire Frames
- Landing page
![WIREFRAME](https://i.imgur.com/oOJprtJ.png)
- Home page
![WIREFRAME](https://i.imgur.com/epzXNmh.png)
- Profile page
![WIREFRAME](https://i.imgur.com/zoObo2t.png)
- Track show page
![WIREFRAME](https://i.imgur.com/NLzKCNi.png)
- Car show page
![WIREFRAME](https://i.imgur.com/Y2kABeC.png)

### DATA MODELS
- USER: name, location
- CAR: make, model, tire, list of modifications. One user can have many cars.
- Tracks: city, state, country, length. 
- LAPTIME: will use USER, CAR and TRACK. input will be lap time.

### ERD
![WIREFRAME](https://i.imgur.com/eJgHWxd.png)

### Technologies Used
- NEM stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Bootstrap

### MILESTONES
# Sprint One
- Set up application 
- Create all data models 
- Set up database
# Sprint Two
- Create functional routes
- Utilize bootstrap to create front end
- test for CRUD
# Sprint Three
- 

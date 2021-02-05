# AppleSeeds Movies App

This project was done during the front-end course at AppleSeeds. 

## Practice materials

- Create react app
- React components lifecycle 
- React router
- Using API and AJAX

## Instructions for this exercise

This app is a 4-step exercise. In each step we will change some requirements and add new requirements. The final app will include all the steps together.

### Step 1 - Actor gallery

- The app will have a page for a gallery of actors.
- Each actor in the gallery will be a bootstrap card showing an image, name and age of the actor.
- Clicking on actor card will open (in a new tab) the IMDB page of the actor.
- Above the gallery there will be an input field to filter the gallery based on the actor's name.
- Use an actor model class with the following fields: first name, last name, birthday, image, IMDB link and age (method to calculate age based on the birthday).
- Data should be hardcoded.
- Gallery should be responsive.
- `Bonus:` Add option for sorting the gallery by first name, last name or age (Select box).

### Step 2 - Lifecycle and AJAX

- Create a JSON file with the actor's data.
- Load the actor's data from the JSON file.

### Step 3 - Movie gallery

- The app will have a page for a gallery of movies.
- Each movie will have the following properties: movie name, length in minutes, poster, director and main stars.
- The page will have a search field to search for movies by name from TMDB API.
- Clicking on a movie on the search results will add the movie card to the gallery.

### Step 4 - Routing

- The app will have a navbar to navigate between pages (homepage - simple landing page, actors - the actor's gallery page, movies - the movie's gallery page).
- Clicking on a movie card from the movie's gallery will lead to a single movie page with its properties.
- All movies details should be loaded from TMDB API.

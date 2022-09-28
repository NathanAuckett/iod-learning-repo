let jsonMarvel = `{
	"Marvel Cinematic Universe" : {
		"Iron Man": {
			"movie_id" : 1,
			"title" : "Iron Man",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 126,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 2, 2008",
			"budget" : "140,000,000",
			"gross" : "318,298,180",
			"time_stamp" : "2015-05-03"
		},
		"The Incredible Hulk": {
			"movie_id" : 2,
			"title" : "The Incredible Hulk",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2008,
			"running_time" : 112,
			"rating_name" : "PG-13",
			"disc_format_name" : "DVD",
			"number_discs" : 3,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "June 13, 2008",
			"budget" : "150,000,000",
			"gross" : "134,518,390",
			"time_stamp" : "2008-10-21"
		},
		"Iron Man 2": {
			"movie_id" : 3,
			"title" : "Iron Man 2",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 124,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 7, 2010",
			"budget" : "200,000,000",
			"gross" : "312,057,433",
			"time_stamp" : "2015-05-03"
		},
		"Thor": {
			"movie_id" : 4,
			"title" : "Thor",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2011,
			"running_time" : 115,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 6, 2011",
			"budget" : "150,000,000",
			"gross" : "181,015,141",
			"time_stamp" : "2011-10-30"
		},
		"Captain America: The First Avenger": {
			"movie_id" : 5,
			"title" : "Captain America",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Action",
			"release_year" : 2011,
			"running_time" : 124,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "July 22, 2011",
			"budget" : "140,000,000",
			"gross" : "176,636,816",
			"time_stamp" : "2011-10-30"
		},
		"Marvel's The Avengers": {
			"movie_id" : 6,
			"title" : "Avengers, The",
			"phase" : "Phase One: Avengers Assembled",
			"category_name" : "Science Fiction",
			"release_year" : 2012,
			"running_time" : 143,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "1.85:1",
			"status" : 1,
			"release_date" : "May 4, 2012",
			"budget" : "220,000,000",
			"gross" : "623,279,547",
			"time_stamp" : "2012-10-20"
		},
		"Iron Man 3": {
			"movie_id" : 7,
			"title" : "Iron Man 3",
			"phase" : "Phase Two",
			"category_name" : "Action",
			"release_year" : 2015,
			"running_time" : 130,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray + DVD",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 3, 2013",
			"budget" : "200,000,000",
			"gross" : "408,992,272",
			"time_stamp" : "2015-05-03"
		},
		"Thor: The Dark World": {
			"movie_id" : 8,
			"title" : "Thor: The Dark World",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2013,
			"running_time" : 112,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 2,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "November 8, 2013",
			"budget" : "170,000,000",
			"gross" : "206,360,018",
			"time_stamp" : "2014-03-04"
		},
		"Captain America: The Winter Soldier": {
			"movie_id" : 9,
			"title" : "Captain America: The Winter Soldier",
			"phase" : "Phase Two",
			"edition" : "Blu-ray Edition",
			"release_year" : 2014,
			"running_time" : 136,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "April 4, 2014",
			"budget" : "170,000,000",
			"gross" : "259,746,958",
			"time_stamp" : "2014-09-19"
		},
		"Guardians of the Galaxy": {
			"movie_id" : 10,
			"title" : "Guardians of the Galaxy",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2014,
			"running_time" : 121,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "August 1, 2014",
			"budget" : "170,000,000",
			"gross" : "333,130,696",
			"time_stamp" : "2014-12-07"
		},
		"Avengers: Age of Ultron": {
			"movie_id" : 11,
			"title" : "Avengers: Age of Ultron",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2015,
			"running_time" : 141,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "May 1, 2015",
			"budget" : "250,000,000",
			"gross" : "458,991,599",
			"time_stamp" : "2015-12-07"
		},
		"Ant-Man": {
			"movie_id" : 12,
			"title" : "Ant-Man",
			"phase" : "Phase Two",
			"category_name" : "Science Fiction",
			"release_year" : 2015,
			"running_time" : 132,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "1.85:1",
			"status" : 1,
			"release_date" : "July 17, 2015",
			"budget" : "130,000,000",
			"gross" : "179,017,481",
			"time_stamp" : "2015-12-07"
		},
		"Captain America: Civil War": {
			"movie_id" : 13,
			"title" : "Captain America: Civil War",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2016,
			"running_time" : 147,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 6, 2016",
			"budget" : "250,00,000",
			"gross" : "408,084,349",
			"time_stamp" : "2017-11-09"
		},
		"Doctor Strange": {
			"movie_id" : 14,
			"title" : "Doctor Strange",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2016,
			"running_time" : 115,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "November 4, 2016",
			"budget" : "165,000,000",
			"gross" : "232,641,920",
			"time_stamp" : "2017-11-09"
		},
		"Guardians of the Galaxy Vol. 2": {
			"movie_id" : 15,
			"title" : "Guardians of the Galaxy Vol. 2",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 136,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 5, 2017",
			"budget" : "200,000,000",
			"gross" : "389,213,281",
			"time_stamp" : "2017-11-09"
		},
		"Spider-Man: Homecoming": {
			"movie_id" : 16,
			"title" : "Spider-Man: Homecoming",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 133,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "July 7, 2017",
			"budget" : "175,000,000",
			"gross" : "314,057,748",
			"time_stamp" : "2017-11-09"
		},
		"Thor: Ragnarok": {
			"movie_id" : 17,
			"title" : "Thor: Ragnarok",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2017,
			"running_time" : 130,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.35:1",
			"status" : 1,
			"release_date" : "November 3, 2017",
			"budget" : "180,000,000",
			"gross" : "tbd",
			"time_stamp" : "2017-11-09"
		},
		"Black Panther": {
			"movie_id" : 18,
			"title" : "Black Panther",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "February 16, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		},
		"Avengers: Infinity War": {
			"movie_id" : 19,
			"title" : "Avengers: Infinity War",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "May 4, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		},
		"Ant-Man and the Wasp": {
			"movie_id" : 20,
			"title" : "Ant-Man and the Wasp",
			"phase" : "Phase Three",
			"category_name" : "Science Fiction",
			"release_year" : 2018,
			"running_time" : 0,
			"rating_name" : "PG-13",
			"disc_format_name" : "Blu-ray",
			"number_discs" : 1,
			"viewing_format_name" : "Widescreen",
			"aspect_ratio_name" : "2.39:1",
			"status" : 1,
			"release_date" : "July 6, 2018",
			"budget" : "tbd",
			"gross" : "tbd",
			"time_stamp" : "2018-01-09"
		}
	}
}`

let directors = [
    {
        "movie": "Iron Man",
        "name":  "Jon Favreau"
    },
    {
        "movie": "The Incredible Hulk",
        "name":  "Louis Leterrier"
    },
    {
        "movie": "Iron Man 2",
        "name":  "Jon Favreau"
    },
    {
        "movie": "Thor",
        "name":  "Taika Watiti"
    },
    {
        "movie": "Thor: Ragnarok",
        "name":  "Taika Watiti"
    },
    {
        "movie": "Avengers: Infinity War",
        "name":  "Anthony/Joe Russo"
    },
    {
        "movie": "Black Panther",
        "name":  "Ryan Coogler"
    },
    {
        "movie": "Spider-Man: Homecoming",
        "name":  "Jon Watts"
    },
    {
        "movie": "Age of ultron",
        "name":  "Joss Whedon"
    },
]


let movies = JSON.parse(jsonMarvel);
movies = movies["Marvel Cinematic Universe"];


// 1
console.log("\n--- Get the total budget of all movies - need to inogre the tbd movie  ---\n");

let totalBudget = 0;

for (m in movies){
    let budget = movies[m].budget;
    budget = budget.replace(/,/g, ""); //Regex to find ',' globally and replace with nothing
    if (budget !== "tbd"){
        totalBudget += parseInt(budget);
    }
}
console.log("Total budget: " + totalBudget);


// 2
console.log("\n--- Group the movies by the release_year  => [ 2016: [ ], 2017: [ ]] ---\n");

let releaseYearMap = {}

for (m in movies){
    let releaseYear = movies[m].release_year.toString();
    if (!releaseYearMap.hasOwnProperty(releaseYear)){
        releaseYearMap[releaseYear] = [];
    }
    releaseYearMap[releaseYear].push(movies[m].title);
}

console.log(releaseYearMap);

// 3
// Get the list of action move (category_name)
console.log("\n--- Get the list of action move (category_name) ---\n");

let actionMovies = [];

for (m in movies){
    let category = movies[m].category_name;
    if (category !== undefined){
        if (category.toLowerCase() === "action"){
            actionMovies.push(movies[m].title);
        }
    }
}

console.log("Action movies:");
console.log(actionMovies);


// 4
console.log("\n--- Sort Movie by the Release Date ---\n");

let moviesArray = [];

for (m in movies){
    moviesArray.push(movies[m]);
}

let movieCount = moviesArray.length;
for (var i = 1; i < movieCount; i ++){
    let movieDate1 = moviesArray[i].release_date;
    let movieDate2 = moviesArray[i -1].release_date;

    if (movieDate1 < movieDate2){
        let movie1 = moviesArray[i];
        let movie2 = moviesArray[i - 1]
        moviesArray[i] = movie1;
        moviesArray[i - 1] = movie2;
    }
}

console.log(moviesArray);


// 5
console.log("\n--- Adding this movie to the list ---\n");

function addMovie(jsonStr){
    movie = JSON.parse(jsonStr);
    movieName = Object.keys(movie)[0];

    movies[movieName] = movie[movieName];
}

addMovie(`{
    "doctor strange in the multiverse of madness": {
        "title" : "doctor strange in the multiverse of madness",
        "phase" : "Phase Four",
        "category_name" : "Science Fiction",
        "release_year" : 2022,
        "running_time" : 0,
        "rating_name" : "PG-18",
        "disc_format_name" : "Blu-ray",
        "number_discs" : 1,
        "viewing_format_name" : "Widescreen",
        "aspect_ratio_name" : "2.39:1",
        "status" : 1,
        "release_date" : "May 6, 2022",
        "budget" : "tbd",
        "gross" : "tbd",
        "time_stamp" : "2022-05-6"
    }
}`);

console.log(movies);


// 6
console.log("\n--- Write the function to search the name of the movie ---\n");

function getMovieByTitle(title){
    for (m in movies){
        let movieTitle = movies[m].title.toLowerCase();
        if (movieTitle.includes(title.toLowerCase())){
            return movies[m];
        }
    }
    return -1;
}

console.log(getMovieByTitle("Spider-Man: Homecoming"));


// 7
console.log("\n--- Maping the director name for each movie ---\n");

let directorToMovies = directors.map((obj) => {
    let movieTitle = obj.movie;
    let movie = getMovieByTitle(movieTitle);
    if (movie != -1){
        movie["director"] = obj.name;
    }
    return movie
});

console.log(directorToMovies);
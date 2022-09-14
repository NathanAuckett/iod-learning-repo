
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


library.forEach(e => {
    if (e.readingStatus){
        console.log(`Already read ${e.title} by ${e.author}.`);
    }
    else{
        console.log(`You still need to read ${e.title} by ${e.author}.`);
    }
});

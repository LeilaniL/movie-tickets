//  Backend
var ticketPrice = 10
var userTicket="";
function Ticket(movieName, movieTime, age){
   this.movieName = movieName,
   this.movieTime = movieTime,
   this.age = age
    }
    function getPrice(userTicket){
        if (userTicket.movieTime < 5) {
            return (ticketPrice - 2);
        }
        else if (userTicket.age < 18 || userTicket.movieName === "hocus-pocus") {
            return (ticketPrice - 2);
        }
        else {
            return  (ticketPrice);
        }
        
    }

// Front End
        $(document).ready(function() {

          $("form#form").submit(function(event) {
            event.preventDefault();
            var inputtedMovieName = $("select#movie-name").children("option:selected").val();
            var inputtedMovieTime = $("select#showtime").children("option:selected").val();
           
            var inputtedAge = $("input#age").val();

        var userTicket = new Ticket (inputtedMovieName, inputtedMovieTime, inputtedAge)
            
            $("p#cost").html("<em>" + 'Your ticket will cost:' + " " + getPrice(userTicket)+ "</em>");
          })
        })
$(document).ready(function() {

   // array di studenti
   var students = [
      {
         firstname: "Jimmy",
         lastname: "Raynolds",
         age: 18
      },
      {
         firstname: "Robert",
         lastname: "Grant",
         age: 55
      },
      {
         firstname: "Kim",
         lastname: "McCleen",
         age: 17
      },
      {
         firstname: "Eric",
         lastname: "Milly",
         age: 72
      },
      {
         firstname: "Robby",
         lastname: "Stein",
         age: 33
      }
   ]

   // first display one student
   displayStudent();

   $("#ex-1-link").click(function() {
      $("#ex-1").show();
      $("#ex-2").hide();
      $("#ex-3").hide();

      changeExercise($(this));

      // display a student
      displayStudent();
   });

   $("#ex-2-link").click(function() {
      $("#ex-2").show();
      $("#ex-1").hide();
      $("#ex-3").hide();

      changeExercise($(this));

      $("#info").empty();
      // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
      for(var i = 0; i < students.length; i++) {
         var currentStudent = students[i];
         $("#info").append("<div>Student " + (i + 1) + " --> " + currentStudent.firstname + " " + currentStudent.lastname + "</div>");
      }
   });

   $("#ex-3-link").click(function() {
      $("#ex-1").hide();
      $("#ex-2").hide();
      $("#ex-3").show();
      $("#message").hide();
      changeExercise($(this));


      $("#add").on("click", function() {
         $("#info").empty();
         var firstname = $("#firstname").val();
         var lastname = $("#lastname").val();
         var age = parseInt($("#age").val());
         //maek new student
         var newStudent = {
            firstname: firstname,
            lastname: lastname,
            age: age
         }

         // newStudent.firstname = firstname;
         // newStudent.lastname = lastname;
         // newStudent.age = age;
         //add student to list

         students.push(newStudent);
         // if (firstname != "" && lastname != ""  )
         console.log("ciao");

         //clear inputs
         $("#firstname").val("");
         $("#lastname").val("");
         $("#age").val("");
         //show message
         $("#message").show();
         console.log(newStudent);
      });
   });



   function changeExercise(tab) {
      var act = $(".active");
      act.removeClass("active");
      tab.addClass("active");
   }

   function displayStudent() {
      var student = students[0];
      $("#ex-1 ul").empty();
      for(var key in student) {
         $("#ex-1 ul").append("<li><b>" + key.toUpperCase() + "</b>: " + student[key] + "</li>");
      }
   }
});

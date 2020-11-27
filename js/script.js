$(document).ready(function() {
   // jsnack 1 (oggetti)
   // Creare un array di oggetti:
   // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
   // Stampare a schermo la bici con peso minore

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


   var student = students[0];
   for(var key in student) {
      console.log(key);
   }

   // stampare i nomi e i cognomi degli studenti
   for(var i = 0; i < students.length; i++) {
      var currentStudent = students[i];
      console.log(currentStudent.firstname);
      console.log(currentStudent.lastname);
   }

   var firstname = prompt("Write a name:");
   var lastname = prompt("Write a surname:");
   var age = parseInt(prompt("Write an age:"));

   var newStudent = {
      firstname: firstname,
      lastname: lastname,
      age: age
   }

   students.push(newStudent);
   console.log(students);



   $("h1").text("Bici: "  );
   $("h2").text("Peso: "  );
});

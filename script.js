$(document).ready(function() {
    var people = [];

    function Person(id, name, age, favlang) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.favlang = favlang;
    }
    function addPerson(id, name, age, favlang) {
        var p = new Person(id,name,age,favlang);
        people.push(p);
    }
    addPerson(1, "Drew", 27, "C#");
    addPerson(2, "John", 22, "Java");
    addPerson(3, "Bob", 25, "JavaScript");
    addPerson(4, "Tom", 19, "Python");
    addPerson(5, "Natasha", 27, "C#");
    addPerson(6, "Mike", 30, "VB.Net");

    var index = 0;
    var list = "";

    $("#btndisplay").click(function() {
        $.each(people, function() {
            list += '<li class="list-group-item">'+this.id+' '+this.name+' '+this.age+' '+this.favlang+'</li>';
        });
        $("#mypeople").append(list);
        $(this).attr("disabled", "disabled");
    });

    $("#btnback").click(function () {
        index--;
        if (index < 0) {
            index = 0;
        }
        else {            
            var first = people[index];
            $("#personactive").html('<h5>' + first.id + ' ' + first.name + ' ' + first.age + ' ' + first.favlang + '</h5>');
        }
    });

    $("#btnforward").click(function () {
        index++;
        if (index > 5) {
            index = 5;
        } else {
            var current = people[index];
            $("#personactive").html('<h5>' + current.id + ' ' + current.name + ' ' + current.age + ' ' + current.favlang + '</h5>');
        }
    });

    $("#btnfirst").click(function () {
        index = 0;
        var robot = people[index];
        $("#personactive").html('<h5>' + robot.id + ' ' + robot.name + ' ' + robot.age + ' ' + robot.favlang + '</h5>');
    });

    $("#btnlast").click(function () {
        index = people.length-1;
        var last = people[index];
        $("#personactive").html('<h5>' + last.id + ' ' + last.name + ' ' + last.age + ' ' + last.favlang + '</h5>');
    });
});

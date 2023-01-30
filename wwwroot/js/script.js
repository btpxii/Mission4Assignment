$('#btnSend').click(function () {
    // gets all grade values from the page form
    let grade = (($('#assignments').val() * .5) + ($('#group_projects').val() * .1) + ($('#quizzes').val() * .1) + ($('#midterm').val() * .1) + ($('#final').val() * .1) + ($('#intex').val() * .1)).toFixed(1)
    // initializes var to hold letter grade
    let ltrGrade = "";
    // removes previous classes from output p tag
    $('#output').removeAttr("class");
    // assigns letter grade and styling based on calculated final grade
    if (grade >= 94) {
        $('#output').addClass('good');
        ltrGrade = 'A';
    } else if (grade >= 90) {
        $('#output').addClass('good');
        ltrGrade = 'A-';
    } else if (grade >= 87) {
        $('#output').addClass('okay');
        ltrGrade = 'B+';
    } else if (grade >= 84) {
        $('#output').addClass('okay');
        ltrGrade = 'B';
    } else if (grade >= 80) {
        $('#output').addClass('okay');
        ltrGrade = 'B-';
    } else if (grade >= 77) {
        $('#output').addClass('bad');
        ltrGrade = 'C+';
    } else if (grade >= 74) {
        $('#output').addClass('bad');
        ltrGrade = 'C';
    } else if (grade >= 70) {
        $('#output').addClass('bad');
        ltrGrade = 'C-';
    } else if (grade >= 67) {
        $('#output').addClass('bad');
        ltrGrade = 'D+';
    } else if (grade >= 64) {
        $('#output').addClass('bad');
        ltrGrade = 'D';
    } else if (grade >= 60) {
        $('#output').addClass('bad');
        ltrGrade = 'D-';
    }
    else {
        $('#output').addClass('bad');
        ltrGrade = 'E';
    }
    // var to hold output text
    let output = ("Final grade: " + ltrGrade);
    // sets output p tag text to output var
    $('#output').text(output)
})
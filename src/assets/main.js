$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/perrl01.json',
    dataType: 'jsonp',
    success: (response) => {
      let $badges = $('#badges');
      response.courses.completed.forEach((course) => {
        let test = "123";
        $badges.append(
          `<div class="course">
          <h3>${course.title}</h3>
          <img src="${course.badge}"/>
          <a href="${course.url}" target="_blank" class="btn btn-primary">See Course<a>
          </div>`);
    })}
  })

});

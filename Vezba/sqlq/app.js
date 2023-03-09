$(document).ready(function () {
    $.get("http://localhost:5000/", function (data) {
      var tableBody = $("#customerTable tbody");
      data.forEach(function (customer) {
        var row = $("<tr>");
        row.append($("<td>").text(customer.CompanyName));
        tableBody.append(row);
      });
    });
  });
  
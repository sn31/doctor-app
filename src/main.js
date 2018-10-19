import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DoctorInfo } from "./app-logic";

$(document).ready(function() {
  let searchType = "";
  $("#clear").click(function() {
    location.reload(true);
  });
  $("#options a").click(function() {
    searchType = $(this).attr("id");
    let searchTypeLabel = $(this).text();
    $("#searchType").text(searchTypeLabel + " ");
  });
  $("#submit").click(function() {
    let searchParameter = $("#searchParameter").val();
    $("#searchParameter").val("");
    let location = $("#location").val();
    $("#location").val("");
    $(".result p").val("");

    let newDoctorInfo = new DoctorInfo();
    let promise = newDoctorInfo.getDoctor(searchType, searchParameter,location);

    promise.then(
      function(response) {
        let body = JSON.parse(response);
        if (body.data.length === 0) {
          $("#resultNone").append("No doctor found!");
          $("#resultAvail").hide();
        } else {
          $("#resultAvail").show();
          for (let doc in body.data) {
            let path = body.data[doc].practices[0];

            $("#firstName").append(`${body.data[doc].profile.first_name}<br>`);
            $("#lastName").append(`${body.data[doc].profile.last_name}<br>`);
            $("#address").append(
              `${path.visit_address.street}, ${path.visit_address.city}<br>`
            );
            $("#phone").append(`${path.phones[0].number}<br>`);
            if (!path.website == undefined) {
              $("#web").append(`${path.website}<br>`);
            } else {
              $("#web").append(`N/A<br>`);
            }
            let acceptingStatus;
            acceptingStatus = path.accepts_new_patients === true ? "Yes" : "No";
            $("#accepting").append(`${acceptingStatus}<br>`);
          }
        }
      },
      function(error) {
        $("#errors").text(
          `There was an error processing your request: ${error.message}`
        );
      }
    );
  });
});

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DoctorInfo } from "./app-logic";

$(document).ready(function() {
  let searchType = "";
  $("#options a").click(function() {
    searchType = $(this).attr("id");
    let searchTypeLabel = $(this).text();
    $("#searchType").text(searchTypeLabel + " ");
  });
  $("#submit").click(function() {
    let searchParameter = $("#searchParameter").val();
    $("#searchParameter").val("");

    let newDoctorInfo = new DoctorInfo();
    let promise = newDoctorInfo.getDoctor(searchType, searchParameter);

    promise.then(
      function(response) {
        let body = JSON.parse(response);
        console.log("here");
        console.log(body.data[0].practices[0].name);
        for (let doc in body.data) {
          let path = body.data[doc].practices[0];

          $("#firstName").append(`${body.data[doc].profile.first_name}<br>`);
          $("#lastName").append(`${body.data[doc].profile.last_name}<br>`);
          $("#address").append(
            `Address: ${path.visit_address.street}, ${path.visit_address.city}<br>`
          );
          $("#phone").append(`${path.phones[0].number}<br>`);
          if (!path.website == undefined)
          {
          $("#web").append(`${path.website}<br>`);
          }
          else
          {
            $("#web").append(`N/A<br>`);
          }
          let acceptingStatus;
          acceptingStatus = path.accepts_new_patients === true ? "Yes" : "No";
          $("#accepting").append(
            `${acceptingStatus}<br>`
          );
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

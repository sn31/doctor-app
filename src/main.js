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
  });
  let newDoctorInfo = new DoctorInfo();
  let promise = newDoctorInfo.getDoctor(searchType, searchParameter);

  promise.then(
    function(response) {
      let body = JSON.parse(respone);
      for (let office in body) {
        $("#practiceName").append(
          `Practice's Name: ${body["data"][office].name}`
        );
        let acceptingStatus;
        acceptingStatus = (body["data"].accepts_new_patients === true) ? "" : "not ";
        $("#accepting").append(
            `This office is ${acceptingStatus}accepting new patients.`
          );
        for (let doc in office["doctors"]) {
          $("#firstName").append(`<li>
            First Name: ${doc["profile"].first_name}</li>`
          );
          $("#lastName").append(`<li>
            Last Name: ${doc["profile"].last_name}</li>`
          );
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

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function() {
  let searchType = "";
  $("#options a").click(function() {
    searchType = $(this).attr("id");
    let searchTypeLabel = $(this).text();
    $("#searchType").text(searchTypeLabel + " ");
  });
  $("#submit").click(function() {
    let someId = $("#id").val();
    $("#id").val("");
  });
});

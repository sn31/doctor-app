import { DoctorInfo } from "../src/app-logic";

describe("DoctorInfo", function() {
  let newDoctorInfo = new DoctorInfo();
  let searchType = "docName";
  let searchParameter = "Thomas";
  let promise = newDoctorInfo.getDoctor(searchType, searchParameter);

  function isResponseValid(response) {
    //check to see if the API is a JSON object or not
    if (typeof response != "string") response = JSON.stringify(response);
    try {
      JSON.parse(response);
      return true;
    } catch (error) {
      return false;
    }
  }
  it("should return a JSON object", function() {
    return promise.then(function(response) {
      expect(isResponseValid(response)).toBe(true);
    });
  });
});

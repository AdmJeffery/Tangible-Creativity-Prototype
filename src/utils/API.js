import axios from "axios";

export default {
  // Gets all subs
  getSubs: function() {
    return axios.get("/api/subscribers");
  },
  
  // Saves a book to the database
  saveSub: function(subData) {
    return axios.post("/api/subscribers", subData);
  }
};
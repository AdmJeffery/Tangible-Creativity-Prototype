import axios from "axios";

export default {
  // Gets all subs
  getSubs: function() {
    return axios
    .get("/api/newslettersubs")
    // .then(res => {
     
    //   const subs = res.data.results;
    //   return subs.map(sub => {
    //     return {
    //       fullname : sub.name,
    //       email : sub.email,
    //     };
    //   });
    // })
  },
  
  // Saves a sub to the database
  saveSub: function(subData) {
    return axios.post("/api/newslettersubs", subData);
  }
};
const callCodeforcessubmissions = async (props) => {
    console.log(props);
  
    try {
      const res = await fetch(
        `https://codeforces.com/api/user.status?handle=${props.codeforcesID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          credentials: "omit",
        }
      );
      const codeforcesdata = await res.json();
      console.log(codeforcesdata);
      return codeforcesdata;
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = callCodeforcessubmissions;
  
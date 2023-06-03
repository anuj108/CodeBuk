const callDetails = async (props) => {
  

  try {
    console.log(props);
    const res = await fetch(`https://sore-teal-bighorn-sheep-tam.cyclic.app/user/${props._id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
    });
    const userdata = await res.json();
    console.log(userdata);
    return userdata;
  } catch (err) {
    console.log(err);
  }
};

export default callDetails;

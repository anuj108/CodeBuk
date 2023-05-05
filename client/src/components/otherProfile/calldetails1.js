const callDetails1 = async (props) => {
  try {
    console.log(props);
    const res = await fetch(
      `https://long-blue-fly-cuff.cyclic.app/user/${props}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "omit",
      }
    );
    const userdata = await res.json();
    console.log(userdata);
    return userdata;
  } catch (err) {
    console.log(err);
  }
};

export default callDetails1;

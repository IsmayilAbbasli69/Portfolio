import React from "react";
import PropTypes from "prop-types"

const User=({friends,adress})=>{
return(
<>

<h1>
    {adress.title} {adress.zip}
</h1>
{friends && friends.map((friends)=>(

<div key={friends.id}>

{friends.id} {friends.name} {friends.age}
</div>

))}
  

</>
)

}
User.propTypes={
  friends:PropTypes.array,
  adress:PropTypes.shape({
title:PropTypes.string,
zip:PropTypes.number,

  })
}

export default User;
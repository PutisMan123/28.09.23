import React from "react";
export default function User(){
    const param =UseParams()
    console.log(param);
    return(
        <div className="User">
            <h1>Денис2012</h1> 
             Пользователь под номером {param.id}
        </div>
    )
}

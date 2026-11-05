// without react.memo
// export default function MemoChild({name}){
//     console.log('react memo child')
//     return <h2>hello {name}</h2>
// }


// with react.memo
import React from "react";
export default React.memo (function MemoChild({name}){
    console.log('react memo child')
    return <h3>hello {name}</h3>
})
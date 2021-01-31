import React from "react";
let Preloader = (props)=> 
<article className="flex-grow-1 d-flex flex-column  justify-content-center">
<div className="text-center">
<div className="spinner-grow"  role="status">
  <span className="sr-only">Loading...</span>
</div>
</div>
</article>

export default Preloader;
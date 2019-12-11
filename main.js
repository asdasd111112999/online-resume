function showblog(event) {
    let list=event.currentTarget.classList;
    if(event.target.nodeName!=="IMG")return;
    (Array.from(list).indexOf("active")!==-1)?list.remove("active"):list.add("active")
}


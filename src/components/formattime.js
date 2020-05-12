export const formattime=(UNIX_timestamp,timezone)=>{
    var a = new Date((UNIX_timestamp) * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    // var sec = a.getSeconds();
    // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    let ampm=hour>12?"pm":"am";
    let minutes= min>10?min:"0"+min
    var time = date + ' ' + month + ' ' + year + ' ' + hour%12 + ':' + minutes + " "+ ampm;

    return time;
    // return {date,month,year,hour,min,sec};
}
import express from "express";
const app=express();
const port= 3000;

app.get("/",(req, res) => {
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const day= new Date();
    const dayToday=days[day.getDate()];
    var today;
    var toDo;



    if(dayToday=="friday"|| dayToday=="saturday"){
        today="weekend";
        toDo="have fun";
    }else{
        today="weekday";
        toDo="work hard";
    }
    // getDay(); 0(sunday)-6(saturday)

    res.render("index.ejs", {todayIs: today, advice: toDo});
});

// app.post("/submit",(req,res)=>{
//     res.render("index.ejs"),
//     {today:req.body["today"]},
//     {toDo:req.body["toDo"]}
// });

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
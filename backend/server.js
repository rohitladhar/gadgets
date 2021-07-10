import express from 'express';
import mobiledata from './MobileData.js';
import mobiledisplay from './Data.js';
const app=express();
app.get("/api/mobile/:name", (req, res) => {

    const mobileName = req.params.name;
    const mobiles = mobiledisplay.mobiledisplay.filter(x => x.name === mobileName);
    if (mobiles)
        res.send(mobiles); 
    else
        res.status(404).send({ msg: "Mobiles Not Found." })
});
app.get("/api/brand/:name", (req, res) => {

    const brandName = req.params.name;
    const brand = mobiledata.mobiledata.filter(x => x.name === brandName);
    if (brand)
        res.send(brand); 
    else
        res.status(404).send({ msg: "Brand Not Found." })
});
app.get("/api/mobile/:id", (req, res) => {

    const mobileId = req.params.id;
    const mobile = data.mobiledisplay.find(x => x.id === mobileId);
    if (mobile)
        res.send(mobile);
    else
        res.status(404).send({ msg: "Mobile Not Found." })
});

app.get("/api/mobile/:brand",(req,res)=>{
    const brand = req.params.brand;
    const mobiles = data.mobiledisplay.filter(x => x.brand === brand);
    if (mobiles)
        res.send(mobiles);
    else
        res.status(404).send({ msg: "Mobile Not Found." })
    res.send(mobiledisplay.mobiledisplay);
});

app.get("/api/mobile",(req,res)=>{
    res.send(mobiledisplay.mobiledisplay);
});
app.get("/api/brand",(req,res)=>{
    res.send(mobiledata.mobiledata);
});

app.listen(5000, () => { console.log("Server started at http://127.0.0.1:5000") });
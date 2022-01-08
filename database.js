const mongoose =  require("mongoose")
mongoose.connect("mongodb+srv://kaushit:kaushit@cluster0.v7tjj.mongodb.net/Employee?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("connected")
}).catch((e) => {
    console.log(e);
})

import express from 'express'
import path from 'path'
import bodyParser from 'body-parser';
import cors from 'cors';
import handleVerification from './functions/handleVerification.js'
const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(express.static(path.join(__dirname, "./")));

app.get('*/abstractProjectSymposium', function(_, res) {
    res.sendFile(path.join(__dirname, "./client/dist/assets/ppt_template.pptx"), function(err) {
        res.status(500).send(err);
    });
});

app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"), function(err) {
        res.status(500).send(err);
    });
});


app.post('/api/verifyCert',  async(req, res) => {
  try{
     const name = await handleVerification(req.body.email, req.body.event)
     res.send({name:name});
  }
  catch(err){
    console.error(err)
  }
});


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});

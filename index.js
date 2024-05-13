import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import handleVerification from './functions/handleVerification.js';

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Middleware to set cache control headers for static assets
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, must-revalidate');
  next();
});


app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.static(path.join(__dirname, './')));

app.get('*/abstractProjectSymposium', (_, res) => {
  res.sendFile(path.join(__dirname, './client/dist/assets/ppt_template.pptx'), function(err) {
    res.status(500).send(err);
  });
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'), function(err) {
    res.status(500).send(err);
  });
});

app.post('/api/verifyCert', async (req, res) => {
  try {
    const name = await handleVerification(req.body.email, req.body.event);
    res.send({ name: name });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

import express, { type Application } from 'express';

const app: Application = express();
const port = 3000;

import projectsRoute from './routes/Projects.js';
import authRoute from './routes/Auth.js';
import profileRoute from './routes/Profile.js';
import testimonialsRoute from './routes/Testimonials.js';
import certificationsRoute from './routes/Certifications.js';
import educationRoute from './routes/Education.js';
import articlesRoute from './routes/Articles.js';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/projects',projectsRoute);
app.use('/auth', authRoute);
app.use('/profile', profileRoute);
app.use('/testimonials', testimonialsRoute);
app.use('/certifications', certificationsRoute);
app.use('/education', educationRoute);
app.use('/articles', articlesRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
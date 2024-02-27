# Project Title

## Overview

Capstone-Project-Hot-Gurl-Summer-Bode is a fitness app designed to address the following needs:

Comprehensive Exercise Database: Many fitness apps lack a comprehensive database of exercises, making it difficult for users to find the right exercises for their needs.

Lack of Video Tutorials: Users often struggle to understand exercise techniques from written descriptions alone. Providing video tutorials can improve user understanding and execution of exercises.

User-Centric Design: Existing fitness apps may not provide a user-friendly experience across different devices and screen sizes. Responsive design ensures that users can access the app comfortably on any device.

### User Profile

Capstone-project-Hot-Gurl-Summer Bode targets individuals interested in fitness, including beginners and seasoned enthusiasts. Users may include:

Fitness Enthusiasts: Users who enjoy exercising and are looking for new exercises to incorporate into their routines.

Beginners: Users new to fitness who need guidance on how to perform exercises correctly.

Educators and Coaches: Professionals in the fitness industry who can use the app to showcase exercises to clients and students.

### Features

Exercise Database: A searchable database of exercises categorized by muscle group and difficulty.

Video Tutorials: Integration with YouTube to provide video demonstrations for each exercise.

Responsive Design: Ensuring a seamless experience across devices, including mobile phones, tablets, and desktops.

Personalization: Users can create custom workout routines and track their progress.

Educational Content: Articles and tips on nutrition, recovery, and overall health and fitness.

Community Interaction: Users can share their workouts, progress, and achievements with others in the community.

Workout Planner: Users can plan and schedule workouts in advance, receive reminders, and track completed workouts.

Integration with Fitness Trackers: Integration with popular fitness trackers like Fitbit, Apple Watch, and Google Fit to sync workout data.

Challenge Mode: Users can participate in challenges to achieve specific fitness goals and compete with others.

User Profiles: Each user has a profile where they can track their progress, set goals, and view achievements.

Social Sharing: Users can share their workouts and achievements on social media platforms.

Workout Logging: Users can log their workouts, including exercises performed, sets, reps, and weights.

Feedback and Ratings: Users can provide feedback on exercises and workouts and rate them based on their experience.

Health Metrics Tracking: Users can track additional health metrics like weight, body fat percentage, and blood pressure.

Progress Analytics: Graphical representation of workout progress over time.

Nutrition Tracking: Integration with nutrition tracking apps for seamless calorie and macronutrient tracking.

Premium Content: Access to premium content, such as exclusive workout plans and personalized coaching.

## Implementation

### Tech Stack

Frontend: React, Redux, Tailwind CSS, YouTube API
Backend: Node.js, Express.js, MongoDB, Exercise DB API
Authentication: JSON Web Tokens (JWT)
External Libraries: Axios (for API requests), React Router (for navigation)

### APIs

Exercise DB API: Provides access to thousands of exercises.
YouTube API: Integrates video tutorials into the app.
Nutrition API: For nutrition tracking (optional).
Fitness Tracker APIs: For integration with fitness tracking devices (optional).

### Sitemap

Home Page: Overview of the app, featured workouts, challenges, and educational content.
Exercises Page: Browse exercises, view details, and watch video tutorials.
Workout Planner: Plan and schedule workouts, receive reminders.
Challenges Page: Join and participate in challenges.
Community Page: Share workouts, progress, and achievements.
Profile Page: View user profile, progress, set goals.
Settings Page: Manage user settings, notifications, and subscriptions.

### Data

Users: Store user information, settings, and progress.
Workouts: Store workout plans, progress, and logs.
Exercises: Store exercise details, video URLs, and difficulty levels.
Challenges: Store challenge details, participants, and results.
Articles: Store educational content and user comments.
Nutrition Data: Store user nutrition logs and goals.
Fitness Tracker Data: Store synced data from fitness trackers.

### Endpoints

POST /api/users/register: Register a new user.
POST /api/users/login: Login existing user.
GET /api/exercises: Get all exercises.
GET /api/exercises/:id: Get a single exercise by ID.
POST /api/workouts: Create a new workout.
GET /api/workouts/:id: Get a single workout by ID.
GET /api/challenges: Get all challenges.
GET /api/challenges/:id: Get a single challenge by ID.
POST /api/challenges/:id/join: Join a challenge.
GET /api/profiles/:id: Get a user profile by ID.
PUT /api/profiles/:id: Update user profile settings.
GET /api/settings/:id: Get user settings by ID.
PUT /api/settings/:id: Update user settings.
GET /api/workout-logs: Get user workout logs.
POST /api/workout-logs: Add a workout log.

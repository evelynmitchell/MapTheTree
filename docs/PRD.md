# Product Requirements Document
## Table of Contents
1. [Introduction](#introduction)
2. [Objective](#objective)
3. [Features](#features)
4. [User Stories](#user-stories)
5. [Use Cases](#use-cases)
6. [Non-Functional Requirements](#non-functional
7. [Assumptions](#assumptions)
8. [Constraints](#constraints)
9. [Dependencies](#dependencies)
10. [Acceptance Criteria](#acceptance-criteria)
11. [Appendix](#appendix)
## Introduction
This document describes the requirements for the MapTheTree aap. It includes the objective, features, user stories, use cases, non-functional requirements, assumptions, constraints, dependencies, and acceptance criteria.
## Objective
The objective of this app is to help entrepreneurs coach themselves through the process of creating a growing business. The app will use LLM chatbots, daily check ins, Wardley Mapping, Metric Trees, Business Model Canvas, and other tools to help entrepreneurs create a business that is sustainable and scalable. Eventually, the app will connect entrepreneurs with mentors, investors, and other resources to help them grow their business.

## Features
The product should have the following features:
- User registration and login
- Project creation
- Task creation
- Discussion logging 
- Daily check-ins
- Wardley Mapping
- Hypothesis tracking
- Metric Trees
- Business Model Canvas
- User experience journey
- LLM agents as user personas
- LLM agents as advisors
- LLM agents as prototyping tools
- LLM agents as business model designers
- LLM agents as content creators
- LLM agents as persona writers
- LLM agents as programming task completers


# User Stories
As a user, I want to have a place to quickly record new business ideas so I don't forget them.
As a user, I want the current business idea I'm testing to be front and center so I can focus on it.
As a user, I want to be able to quickly see the progress I've made on my current business idea so I can see how I'm doing.
As a user, I want to be able to quickly design experiments to validate my business ideas so I can test them quickly.
As a user, I want to be able to use LLMs as user personas so I can better understand potential customers.
As a user, I want to be able to use LLMs as advisors so I can get feedback on my business ideas.
As a user, I want to be able to use LLMs to design prototypes so I can test ideas with customer personas.
As a user, I want to use LLMs and the Business Model Canvas to design business models so I can test them with customers.
As a user, I want to use Wardley Mapping to highlight to advisors and investors the growth journey of my business.
As a user, I would like to use LLMs to help me refine the messaging of my business, so I am communicating effectively with advisors, investors, partners, customers and vendors.
As a user, I want to be able to prioritize tasks so that I can focus on the most important ones.
As a user, I want to be able to order tasks so that I can plan my day effectively.
As a user, I want to be able to review tasks so that I can see what I have accomplished.
As a user, I want to be able to mark tasks as done so that I can keep track of my progress.
As a user, I would like to see the metrics of my business displayed in a graph, with daily, weekly, monthly, quarterly and historic views.
As a user, I would like to have anomalous metrics highlighted, so I can investigate them.
As a user, when I introduce new marketing channels, processes and products, I would like them to be added to my metric tree so I can track their performance.
As a user, I would like both predictive and causal analytics so I can understand how my business as a system is performing.
As a user, I would like to be able to see the user experience journey of my customers so I can understand how they are interacting with my business.
As a user, I would like to be able to discove the influencers in my customers social media feeds.
As a user, I would like LLMs to assist me in creating content on a daily basis, in text, audio and video formats.
As a user, I would like LLMs to assist me in teaching my customers how to use my products and services to solve problems they have.
As a user, I would like LLMs to assist me in creating a community of customers who can help each other solve problems.

## Use Cases
1. User Registration
- User navigates to the registration page
- User enters their name, email address, and password - or uses a social login such as Google, Facebook, Github or Twitter.
- User clicks the register button
- The system validates the user's information

2. User Login
- User navigates to the login page
- User enters their email address and password or does a social login
- User clicks the login button
- The system validates the user's information and sets their status to logged in

3. Project Creation
- User navigates to the project creation page, which has a sample project for the user to follow in creating their own project.
- User enters the project name, description, and other details.
- User clicks the create project button
- The system creates the project and adds it to the user's list of projects

4. Task Creation
- Tasks are partially created by the system using an LLM, based on the project template and the user's input.
- User can edit the task name, description, and other details.
- User clicks the create task button
- The system creates the tasks and adds them to the project

5. Task Assignment
- User navigates to the task assignment page
- User selects a task from the list of tasks
- User assigns the task to themselves or another user
- User clicks the assign task button
- The system assigns the task to the user

6. Task Tracking
- User navgates to the task tracking page, while using the app, or after receiving a notification.
- User sees the list of tasks and their status
- User can mark tasks as done, in progress, not started, blocked or won't do.
- User can reorder tasks by priority or due date
- User can split tasks into subtasks
- User can roll up tasks into epics
- User can see the progress of tasks and projects
- User can mark tasks as one of or recurring
- User can create standard operating procedures for tasks
- User can create a task from a standard operating procedure
- User can create a task from a template

7. Project Progress Tracking
- User navigates to the project progress tracking page, while using the app, or after receiving a notification.
- User sees the list of projects and their status
- User can see the progress of projects
- User can see the progress of tasks
- User can see the progress of epics

8. Daily Check-ins
- User receives a notification to check in
- User navigates to the check-in page
- User answers a series of questions about their day
- User clicks the submit button
- The system records the user's responses
- The LLM reviews the user's responses and provides feedback and guidance

9. Wardley Mapping
There is a markdown standard for displaying Wardley Maps
https://github.com/damonsk/obsidian-wardley-maps
https://onlinewardleymaps.com/
- User navigates to the Wardley Mapping page
- User creates a new Wardley Map 
- User adds components to the map
- User updates links between components
- User adds notes to components
- User will perform the map update intermittenly as the business grows

10. Hypothesis Tracking
- User navigates to the Hypothesis Tracking page
- User creates a new hypothesis
- LLM reviews the hypothesis for quality (https://researchgraduate.com/characteristics-of-a-good-hypothesis/)
- User refines the hypothesis based on feedback
- User creates an experiment to test the hypothesis
- User enters the experiment as a series of tasks
- User assigns the tasks to themselves or others
- User tracks the progress of the experiment
- User reviews the results of the experiment
- User updates the hypothesis based on the results

11. Metric Trees
- User navigates to the Metric Trees page
- User selects a metric tree template most similar to their project, or creates a new one
- User connects data sources to a node in the metric tree
- User adds telemetry to the data sources, if needed
- User adds a metric to the node

12. Business Model Canvas
- User navigates to the Business Model Canvas page after adding new business idea. The user will be prompted to do this when they have reviewed the list of business ideas with the LLM
- User creates a new Business Model Canvas
- User fills in the boxes of the Business Model Canvas with initial hypothesis about the business, or leaves them blank
- User updates the Business Model Canvas as they learn more about the business

13. User Experience Journey
- User navigates to the User Experience Journey page
- User creates a new User Experience Journey
- User adds touchpoints to the User Experience Journey
- User adds personas to the User Experience Journey
- User adds user stories to the User Experience Journey
- User adds metrics to the User Experience Journey

14. LLM agents as user personas
- User navigates to the LLM agents as user personas page
- User selects a user persona template
- LLM fills in the user persona template with potential customer data. The user can select the number of personas they want to create.
- The LLM personas will role play the User Experience Journey, and provide feedback on the user stories

15. LLM agents as advisors
- As needed, the user will be able to chat with an LLM advisor with a specific expertise, such as marketing, sales, product development, or finance.
- The LLM advisor will provide feedback on the user's business ideas, experiments, and business model canvas.
- The LLM advisor will provide guidance on how to improve the user's business.

16. LLM agents as prototyping tools
- User navigates to the LLM agents as prototyping tools page
- User selects a prototyping tool template
- LLM fills in the prototyping tool template with potential customer data. The user can select the number of prototypes they want to create.
- Prototypes tools may be for User Interface, User Experience, Product Design, or other areas of the business.

17. LLM agents as business model designers
- User navigates to the LLM agents as business model designers page
- User selects a business model template
- LLM fills in the business model template with details of potential business models.
- LLM suggests hypothesis to validate the business model
- LLM suggests potential products and services suitable for the business model
- LLM suggest potential marketing channels for the business model
- LLM suggest potential funding models for the business model

18. LLM agents as content creators
- User navigates to the LLM agents as content creators page
- LLM suggests content ideas based on the user's business ideas
- LLM suggests content ideas based on the user's experiments
- LLM suggests content ideas based on the user's business model canvas
- LLM suggests content ideas based on the user's user experience journey for personas
- LLM suggests content ideas based on the user's user experience journey for touchpoints

19. LLM agents as persona writers
- LLMs generate user personas based on the user's business ideas
- The personas are added to a community of personas in a variety of roles, which are track in a database
- Experiments can be run using the personas to test the user's business ideas

20. LLM agents as programming task completers
- LLMs can complete programming tasks for the user, such as creating a website, mobile app, or other software

## Technology Stack
The app will be built using the following technologies:

Database: SQLite (libSQL)
Frontend: SvelteKit or Wasm/PyIodide (V0 or Lovable.dev)
Backend: Epress.js or Python
Hosting: self-hosted or Vercel

## Tools
- Wardley Maps: https://onlinewardleymaps.com/
- Business Model Canvas: https://www.strategyzer.com/canvas/business-model-canvas
- Metric Trees: https://www.metricstream.com/blog/what-is-a-metric-tree
- User Experience Journey: https://www.nngroup.com/articles/customer-journey-mapping/
- LLM: Claude.ai, self-hosted ollama, OpenRouter models, Groq hosted models




https://expressjs.com/
SvelteKit

## Non-Functional Requirements
- The app should be responsive and work on all devices
- The app should be user-friendly and easy to use
- The app should be secure and protect user data
- The app should be scalable and able to handle a large number of users
- The app should be reliable and available 24/7
## Assumptions
- Users have basic computer skills
- Users have access to the internet
- Users have a valid email address
## Constraints
- The app should be developed within the given budget
- The app should be developed within the given timeline
## Dependencies
- The platform depends on the availability of the internet
- The platform depends on the availability of the server
## Acceptance Criteria
- Users should be able to register and login
- Users should be able to create a list of tasks
- Users should be able to prioritize tasks
- Users should be able to order tasks
- Users should be able to review tasks
- Users should be able to mark tasks as done
- Users should be able to track the progress of tasks
- Users should be able to track the progress of projects

## Appendix
```
- [User Login Wireframe](docs/wireframes/user_login.png)
- [User Registration Wireframe](docs/wireframes/user_registration.png)
- [Project Creation Wireframe](docs/wireframes/project_creation.png)
- [Task Creation Wireframe](docs/wireframes/task_creation.png)
- [Task Assignment Wireframe](docs/wireframes/task_assignment.png)
- [Task Tracking Wireframe](docs/wireframes/task_tracking.png)
- [Project Progress Tracking Wireframe](docs/wireframes/project_progress_tracking.png)
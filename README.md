# Product Feedback App

## 👋 Welcome!

Imagine you are starting out as a freelance full-stack developer. You've just been hired by your first new client: a startup that is building a new product. The startup is generically named _My Company_. 

_My Company_ wants you to build a Product Feedback application, where customers can view and submit feedback about how their product could be improved. 

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)


## 🎯 Project Requirements

Users should be able to:

- View all product suggestions
- Submit a new product suggestions by filling out a form
- Receive form validations when trying to submit a new suggestion
- Filter suggestions by category
- When there are no suggestions for the currently selected filter, show the "There is no feedback" screen 
- View the optimal layout for the app depending on their device's screen size

Stretch goals (optional):
- Upvote product suggestions
- Sort suggestions by most/least upvotes and most/least comments
- Edit an existing suggestion
- Delete an existing suggestion
- Add comments to an existing suggestion

---

## The Tech Stack

These are all the technologies you should use to build your full-stack application: 

| Component | Language | Framework | Deployment | Dev Tools |
|-----------|------------|----------------|------------|-------|
| Frontend  | HTML, CSS, JavaScript | React         | Netlify   |      |
| Server/API | Node.js     | Express       | Render    | Postman for API testing |
| Database  | PostgreSQL |               | Neon    |   |

---

## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/ffyUs0kcwOG0gpe8N4BzYL/Product-Management-App?node-id=0-1&p=f&t=kSc9d10uZiSGCOFD-0) for the designs
- **Documentation Guides:** The teaching team at AnnieCannons has provided some [handy guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag) to help you use Github and other coding tools

---

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code. 
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.

---

## Recommended Folder Structure

We recommend starting by creating two folders in your `product-feedback-app` repo: 
1. `client`: This folder holds your frontend that you will build with Javascript & React. 
2. `server`: This folder holds your backend that you will build with Node.js & Express.

To start building your frontend, you would navigate into your `client` folder, and start your React project by making a new Vite project with `npm create vite@latest`. 

To start building your backend, you would navigate into your `server` folder. Then run `npm init` to initialize your `package.json` file, and install any npm packages you want. Then create a `src` folder, which would hold your `index.js` file and `database-schema.sql` file. 

---

## 🚀 Roadmap: Step-by-step guide to building this project

---

### 🎯 Milestone: Create your database schema
1. Write PostgreSQL code to:
   a. Create 3 tables: `users`, `saved_countries`, and `country_counts`
   b. Insert at least 3 rows of sample data into each table
   c. Write SQL queries your API will need to:
        - Store and retrieve Form data
        - Store and retrieve Saved Countries data
        - Store and retrieve Country Count data

---

### 🎯 Milestone: Set up your PostgreSQL database on Neon
1. Use Neon.tech to:
  - Create a new database
  - Set up your schema (create the 3 tables and insert rows of sample data)
  - Confirm that the data was inserted successfully

---

### ⚙️ Set up your `server` folder
1. In the terminal, `cd` into your `server` folder
2. Review the following files already provided for you:
      - `package.json` — lists information about your project and its dependencies 
      - `.gitignore` — lists which files Git should not track
      - `src` folder — where all your custom code code 
      - `index.js` — where you will write your server/API code
      - `config.js` — contains your database's access credentials
3. In the `server` folder, run `npm install express` and `npm install pg`. Once you do that, you should see `express` and `pg` listed as dependencies in your `package.json`.


# Product Feedback App

## 👋 Welcome!

Imagine you are starting out as a freelance full-stack developer. You've just been hired by your first new client: a startup that is building a new product. The startup is generically named _My Company_. 

_My Company_ wants you to build a Product Feedback application, where customers can view and submit feedback about how their product could be improved. 

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)


## 🎯 Project Requirements

Users should be able to:

- View all product feedback requests
- Submit a new product feedback request by filling out a form
- Receive form validations when trying to submit a new feedback request
- Filter suggestions by category
- When there no suggestions for the currently selected filter, show the "There is no feedback" screen 
- View the optimal layout for the app depending on their device's screen size

Stretch goals (optional):
- Sort suggestions by most/least upvotes and most/least comments
- Add comments and replies to a product feedback request
- Upvote product feedback requests

## The Tech Stack

These are all the technologies you should use to build your full-stack application: 

| Component | Language | Framework | Deployment | Dev Tools |
|-----------|------------|----------------|------------|-------|
| Frontend  | HTML, CSS, JavaScript | React         | Netlify   | —     |
| Backend (server/API) | Node.js     | Express       | Render    | Postman for API testing |
| Database  | PostgreSQL | —              | Render    | pgAdmin for database management |


## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/ffyUs0kcwOG0gpe8N4BzYL/Product-Management-App?node-id=0-1&p=f&t=kSc9d10uZiSGCOFD-0) for the designs
- **Documentation Guides:** The teaching team at AnnieCannons has provided some [handy guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag) to help you use Github and other coding tools

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code. 
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.

## Recommended Folder Structure

We recommend starting by creating two folders in your `product-feedback-app` repo: 
1. `client`: This folder holds your frontend that you will build with Javascript & React. 
2. `server`: This folder holds your backend that you will build with Node.js & Express.

To start building your frontend, you would navigate into your `client` folder, and start your React project by making a new Vite project with `npm create vite@latest`. 

To start building your backend, you would navigate into your `server` folder. Then run `npm init` to initialize your `package.json` file, and install any npm packages you want. Then create a `src` folder, which would hold your `index.js` file and `database-schema.sql` file. 

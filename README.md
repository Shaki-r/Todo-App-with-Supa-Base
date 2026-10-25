# ✨ Premium Todo App

A modern, responsive Todo App built with **HTML, CSS, JavaScript, and Supabase**. It features a clean dark interface, animated interactions, and cloud-based task storage.

## 🌐 Live Demo

**Try the live website:** https://shaki-r.github.io/Todo-App-with-Supa-Base/

## 🚀 Features

- Add and save tasks using Supabase
- Store todo items in a cloud database
- Animated task entrance and deletion effects
- Responsive layout for desktop and mobile
- Modern dark UI with smooth transitions
- Loading animation while tasks are being fetched

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- Supabase
- Google Fonts

## 📁 Project Structure

```text
Premium-Todo-App/
├── index.html
├── style.css
├── script.js
├── loading.gif
└── README.md
```

## ⚙️ Run the Project Locally

1. Download or clone this repository.
2. Open the project folder in your code editor.
3. Make sure the Supabase project URL and publishable key are configured in `script.js`.
4. Ensure your Supabase database has a `todos` table with the columns required by your code (for example, `id` and `todo`).
5. Run `index.html` using a local development server, such as VS Code Live Server.

## 🔐 Supabase Security Note

The browser-side Supabase URL and publishable key may be used in client-side applications, but your database must be protected with appropriate **Row Level Security (RLS)** policies. Never expose a Supabase `service_role` key or any other secret key in frontend code.

## 🎨 UI & Animations

The interface uses a dark visual style, responsive sizing, and animated interactions to make adding and deleting tasks feel smooth and engaging.

## 💡 Possible Future Improvements

- Mark tasks as completed
- Edit existing tasks
- Search and filter tasks
- Add due dates and reminders
- Add user authentication
- Add light and dark themes

## 👨‍💻 Author

**Shakir**

## 📄 License

Add a license file if you intend to distribute this project for reuse. If no license is included, others do not automatically receive permission to reuse the code.

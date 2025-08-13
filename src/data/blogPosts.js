export const blogPosts = [
  {
    id: 1,
    title: "Building My Portfolio with React",
    excerpt: "A deep dive into the process of creating this portfolio website using React and modern web technologies.",
    content: `
# Building My Portfolio with React

Creating this portfolio was an exciting journey that allowed me to showcase my skills while learning new technologies. I chose React as my main framework because of its component-based architecture and excellent ecosystem.

## Key Technologies Used

- **React 18** - For building the user interface
- **React Router** - For client-side routing
- **Vite** - For fast development and building
- **CSS3** - For styling and animations

## Challenges and Solutions

One of the main challenges was implementing smooth scrolling navigation between sections while maintaining proper URL routing. I solved this by creating a custom navigation handler that detects the current page and scrolls appropriately.

## What's Next

I'm planning to add more interactive features, including this blog section, and possibly integrate a content management system for easier updates.
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "Web Development", "Portfolio"],
    featured: true
  },
  {
    id: 2,
    title: "Modern CSS Techniques I Use",
    excerpt: "Exploring modern CSS features that make web development more enjoyable and efficient.",
    content: `
# Modern CSS Techniques I Use

CSS has evolved tremendously over the years. Here are some modern techniques I use regularly in my projects.

## CSS Grid and Flexbox

These layout methods have revolutionized how we approach responsive design. I use Grid for 2D layouts and Flexbox for 1D arrangements.

## Custom Properties (CSS Variables)

Custom properties make theming and consistent design much easier to maintain.

## Container Queries

A game-changer for truly responsive components that adapt to their container rather than the viewport.
    `,
    date: "2024-01-10",
    readTime: "4 min read",
    tags: ["CSS", "Web Development", "Frontend"],
    featured: false
  },
  {
    id: 3,
    title: "JavaScript ES2024 Features",
    excerpt: "A look at the latest JavaScript features and how they improve developer experience.",
    content: `
# JavaScript ES2024 Features

JavaScript continues to evolve with new features that make our code more expressive and efficient.

## Array Grouping

The new groupBy method makes data manipulation much cleaner.

## Top-level await

Finally being able to use await at the top level of modules is a huge quality of life improvement.

## Promise.withResolvers()

A new utility method that makes promise creation more ergonomic in certain scenarios.
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["JavaScript", "ES2024", "Programming"],
    featured: false
  }
];
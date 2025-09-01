# Jammming - Spotify Playlist Creator

## Introduction
The idea for this project came through Codecademy. The project is part of their Full Stack career path. The goal was to learn how to build web applications with React and deploy them to production.

### Features
- Users can search for songs by song title, artist name, album, or other attributes
- Users can view detailed information about each song including title, artist, and album
- Users can create custom playlists by adding selected tracks
- Users can export their custom playlists directly to their personal Spotify account using OAuth authentication

## Technologies Used

### Runtime
This project uses Node.js runtime for React development. Vite is used as the development server for fast development and hot module replacement. There was a problem though: Spotify does not accept localhost as a callback URI, so I had to publish the app through GitHub Pages while developing the functionalities that depended on the Spotify API.

The application is built with React, JavaScript, CSS, and HTML.

### React
React is used as the main frontend framework, providing component-based architecture and state management for the user interface.

### GitHub Pages
React applications do not directly run from GitHub Pages without configuration. I needed to install the GitHub Pages package and edit the scripts in the package.json file. I got help from this Stack Overflow post: https://stackoverflow.com/questions/69708281/how-can-i-host-my-react-application-using-github.

First, I needed to edit the `vite.config.js` file:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Jammming/',
})
```

The `base` property tells GitHub Pages where to look for the application files.

After configuring the build settings, I installed the gh-pages package and added deployment scripts to package.json. Running `npm run deploy` creates a gh-pages branch on GitHub with the built application files.

Once deployed, I configured GitHub Pages in the repository settings to build and deploy from the gh-pages branch, and the application was live.

## Challenges

### Spotify Authentication
Understanding Spotify's OAuth authentication was a significant jump in difficulty compared to previous projects. I had worked with APIs before, but they were simpler. The OAuth 2.0 PKCE (Proof Key for Code Exchange) flow was challenging to implement, but following Spotify's documentation made it manageable.

> Note: Some of the authentication code is adapted directly from Spotify's documentation: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow. I do not claim to have written this implementation entirely from scratch.

### API Search Implementation
Working with the Spotify API for search functionality proved to be challenging. It seemed like I wasn't getting any responses from my searches. I realized I was actually contacting their API successfully because empty searches returned proper error messages for bad requests. The issue was embarrassingly simple: I was only checking console errors instead of console logs where the actual search results were being displayed. This taught me an important lesson about knowing your debugging tools and not relying solely on error messages.

### URL Encoding Issues
I encountered problems with search strings where characters would go missing when users typed in the search bar. The mistake was implementing real-time URI encoding on every keystroke instead of encoding only when the user submits the search. Moving the `encodeURIComponent()` function to the search submission resolved this issue.

### Deployment Delays
GitHub Pages deployment times were occasionally very long (up to 10 minutes), making iterative development difficult since I couldn't make small changes efficiently during the testing phase.

### Styling Problems
While styling the application, I had difficulties with buttons disrupting their container layouts. This was resolved by properly scoping button styles and understanding CSS specificity.

I also encountered issues with parent-child element opacity inheritance. Using RGBA color values instead of opacity properties solved this problem by providing more precise control over transparency.

I initially created the styling using an HTML dummy file, which caused some problems since React wraps everything with a `<div id="root">`. The dummy approach worked well overall since I had carefully mapped it to match the component structure. During styling, the application started skipping the login flow entirely, and I couldn't figure out what was wrong until I remembered changing the initial state value that determines which view to display. Another lesson in being mindful of state management during development.

I also forgot that React uses `className` instead of `class` for CSS classes! It also helps to remove inline styling before applying external CSS. These were basic mistakes that cost time but provided valuable learning experiences.

## Learning Outcomes

This project taught me several important concepts and techniques:

- **encodeURIComponent()**: Proper URL encoding for API requests
- **Documentation Reading**: Using official API documentation to learn new implementations
- **Async State Management**: Never modify React state directly within asynchronous functions
- **Version Control**: This project provided excellent Git practice. After deploying to GitHub Pages, I occasionally forgot to push functional versions to the main branch, creating workflow issues
- **Debugging Techniques**: Always verify you're examining the correct information in developer tools and console logs
- **Logging for Debugging**: Strategic console logging is essential for troubleshooting API integrations
- **RGBA Color Values**: These provide much better control for styling with transparency effects

## What About AI?

I did use AI assistance, but not for code generation. I primarily consulted language models for troubleshooting specific issues. However, AI couldn't solve everything for me. For example, AI couldn't diagnose my track fetching problems because I wasn't providing the right context or asking the correct questions. By the time I figured out how to articulate the problem properly, I had already solved it myself.

For actual coding, I wanted to understand what I was building and found the problem-solving process genuinely enjoyable and educational. While AI could have generated this application quickly, I wouldn't have gained the valuable learning experience. The hands-on experience from projects like this is irreplaceable, and I believe human reasoning and understanding remain essential in development.

Perfect AI-generated code might impress some people, but I believe honesty and demonstrating real passion for learning web development is more valuable. This means showing actual code with all its imperfections and the mistakes made along the way. While it might be clichéd, there's truth in the idea that mistakes aren't important; what matters is what we learn from them.

## Styling and Design

The color palette is from https://colorhunt.co/palette/1c352da6b28bf5c9b0f9f6f3. I wanted the application to have a minimalist, retro-modular aesthetic. Since I enjoy psychedelic rock and similar genres, I incorporated a mandala-style background element to add visual interest while maintaining the clean, minimalist foundation.

Using RGBA color values provided better control over opacity and transparency effects throughout the interface.

## Final Thoughts

The results may not be as polished as I initially envisioned, but the application works! For someone from a non-technical background, this represents a significant achievement. These kinds of successes fuel my motivation to continue learning more about web development.

One goal was to practice the presentation/container pattern, but I don't think I implemented it consistently. The concept involves separating components that handle visual presentation from those that manage application logic. Honestly, my application's structure is somewhat inconsistent and doesn't fully realize this pattern. However, this is just one of many projects I plan to build, and I'll continue practicing React patterns in future work.

I also want to become more proficient with CSS methodologies and thinking about HTML structure in a more class-based, systematic way. My broader goal is to gradually learn how to create web applications and websites with various architectural approaches and design patterns.

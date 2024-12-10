# Task-A

# Scrollable Card Selection with Dragging Feature

This project implements a scrollable card interface with dynamic selection and dragging functionality. It provides users the ability to drag cards to scroll and highlights the card closest to the center of the scrollable container. This interaction simulates smooth scrolling and dynamic content focusing.

## Table of Contents
1. [Setup Instructions](#setup-instructions)
2. [Technology Choices and Rationale](#technology-choices-and-rationale)
3. [Known Limitations/Trade-offs](#known-limitationstrade-offs)
4. [Future Improvements](#future-improvements)

---

## Setup Instructions

To set up this project on your local machine:

### 1. Clone the Repository
   Create a private repository on GitHub, then clone it to your local machine:

   ```bash
   git clone https://github.com/your-username/Task-A.git
2. Navigate to Project Directory
Change into the project directory:

bash
Copy code
cd scrollable-card-selection
3. Open the index.html File
You can open the index.html file directly in any modern web browser. This will load the project and display the scrollable card interface.

bash
Copy code
open index.html

##  Technology Choices and Rationale
This project is implemented using vanilla JavaScript and CSS for the following reasons:

JavaScript (Vanilla)

Simplicity and Control: Using vanilla JavaScript gives direct control over the functionality without introducing external dependencies, which makes it easier to understand and customize.
No Dependencies: There is no need to rely on third-party libraries or frameworks, which keeps the project lightweight and focused on core functionality.
CSS:

Flexbox Layout: Flexbox is used for card layout and positioning. It's a simple, powerful way to align items within a container.
Scroll and Focus Effects: Custom CSS properties such as scroll-snap-type and transform are used to create a smooth scrolling and focus effect for the cards.

## Known Limitations/Trade-offs
While the project is functional, there are a few limitations and trade-offs to be aware of:

No Mobile Responsiveness:
The project currently does not include mobile-responsive features. The layout and design may not work well on smaller screens without additional adjustments.
Limited Customization:
The current implementation uses basic styling for cards and focus effects. Customization of card content, appearance, and animations will require additional work.
Performance Concerns with Large Datasets:
As more cards are added, performance might degrade when scrolling or dragging due to the number of DOM elements being handled. Virtual scrolling or lazy loading could help mitigate this in larger datasets.
No Accessibility Features:
The project does not include features like keyboard navigation or screen reader support. These would need to be added for accessibility improvements.
## Future Improvements
Here are some potential future improvements that could enhance the functionality and user experience of this project:

Mobile Responsiveness:

Add media queries to ensure that the layout works properly on mobile devices, adjusting card sizes, scrolling behavior, and layout.
Card Content Customization:

Allow users to dynamically generate or customize the content of the cards (e.g., images, text, buttons).
Virtual Scrolling for Large Data:

Implement virtual scrolling techniques to handle large numbers of cards efficiently, reducing the performance cost of rendering all cards at once.
Drag and Drop Interactions:

Enhance the drag-and-drop functionality by allowing users to reorder cards, or create new interactions like drag-to-select.
Accessibility Improvements:

Implement keyboard navigation and screen reader support for better accessibility. Add ARIA (Accessible Rich Internet Applications) roles and properties to improve usability for all users.
Performance Optimization:

Optimize the scroll and drag functions for better performance, especially when dealing with a large number of cards.

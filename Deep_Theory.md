#  Day 27 – Frontend Deep Theory

## 1. Accessibility Rules: ARIA Roles & Semantic HTML

###  Accessibility -
Accessibility ensures that web applications are usable by **all users**, including those with disabilities (visual, motor, cognitive).

---

###  Semantic HTML
Semantic elements provide meaning to content and improve accessibility.

####  Examples:
- `<header>` – top section
- `<nav>` – navigation links
- `<main>` – main content
- `<section>` – grouped content
- `<button>` – clickable actions (better than div)

####  Benefits:
- Improves SEO
- Helps screen readers understand structure
- Reduces need for extra ARIA

---

###  ARIA (Accessible Rich Internet Applications)

ARIA adds extra accessibility when HTML is not enough.

####  Common ARIA Roles:
- `role="button"` → makes element act like button
- `role="dialog"` → identifies modal
- `role="navigation"` → defines navigation area

####  Important ARIA Attributes:
- `aria-label` → describes element
- `aria-hidden="true"` → hides from screen readers
- `aria-modal="true"` → indicates modal is active

####  Rule:
👉 Use **semantic HTML first**, ARIA only when needed

---

## 2. Keyboard Navigation Support

###   Importantance
Not all users can use a mouse, so full functionality must be accessible via keyboard.

---

###  Key Features

####  Tab Navigation
- `Tab` → move forward
- `Shift + Tab` → move backward

####  Click via Keyboard
```js
onKeyDown={(e) => e.key === "Enter" && action()}

 Focusable Elements
<div tabIndex="0"></div>


## 3. Focus Management
🔹  Focus -

Focus indicates which element is currently active for keyboard interaction.

🔹  Importantance
Helps users navigate easily
Required for accessibility compliance
🔹 Modal Focus Handling
 Move focus to modal when opened
ref.current.focus();
 Return focus when closed
Focus should go back to triggering button
🔹 Focus Trap (Advanced)

Prevents focus from leaving modal using Tab key.


4. Color Contrast Compliance (WCAG)
🔹  WCAG -

WCAG (Web Content Accessibility Guidelines) ensures readable and accessible UI.

🔹 Contrast Ratio Rules
Text Type	Minimum Ratio
Normal Text	4.5 : 1
Large Text	3 : 1
🔹 Good vs Bad

 Low Contrast
Light gray text on white

 High Contrast
Black text on white

🔹 Tools to Check Contrast
Chrome DevTools
WebAIM Contrast Checker
Lighthouse

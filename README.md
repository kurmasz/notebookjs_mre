# Bug Demo

1. Launch a local server (e.g., `python -m http.server`)
2. Visit `page_with_bug.html`
3. Note the error in the console.
(This page uses the current version of `nodebook.min.js`)

# Sample use with proposed mod

1. Launch a local server (e.g., `python -m http.server`)
2. Visit `desired_behavior.html`
3. Click `Submit` to dynamically load an `.ipynb` file.

This page uses a modified version of `notebook.js` that sets `root` to `var root = this || globalThis;` on line 5.

With this change, I can dynamically load `notebookjs` from a module using `import` (i.e., only load the module when I want to view an `ipynb` file and not when I view other files).  See `module_using_mod.mjs` line 27.
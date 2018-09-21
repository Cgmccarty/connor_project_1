* cd into your project directory. (in your terminal: cd [ file path ])

1. npm init | Sets up your package.json file.

2. npm install sass | This sets up sass inside the directory
   npm install browser-sync | This sets up browser-sync inside the directory

3. To begin automatic file conversion with sass, simply run the command
    ./node_modules/.bin/sass --watch main.scss output.css
    (Leave this running in the background, and open up a new tab in the terminal with cmd + t)

4. To begin browser-sync and watch your changes in real time run the command
    .node_modules/.bin/browser-sync start --server --files "output.css"
    (Leave this running as well, and for any further terminal usage, open a third tab with cmd + t)

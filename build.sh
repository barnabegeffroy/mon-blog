# sed -i "s/\(.*url('\)\(.*\)/\1mon-blog\/\2/" static/sprite.css
rm -rf build
vite build

@echo off
echo Committing changes...
git add NickPortv5/frontend/index.html NickPortv5/frontend/contact.html NickPortv5/frontend/projects.html
git commit -m "Update GitHub Pages deployment"

echo Creating subtree split...
git subtree split --prefix NickPortv5/frontend -b gh-pages

echo Pushing to GitHub Pages...
git push origin gh-pages --force

echo.
echo ✅ Deployment to GitHub Pages complete.
pause

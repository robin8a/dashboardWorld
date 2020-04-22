# References
- [How to fix Git always asking for user credentials](https://www.freecodecamp.org/news/how-to-fix-git-always-asking-for-user-credentials/)

# This project start in AWS 9Cloud
- AWS EC2 instance

# Starting the angular project

```sh
# Installing angular client
npm install -g @angular/cli

# New Angular project
ng new dashboardWorld

# 
```


# Git
```sh
git config --global user.name "Robin Ochoa"
git config --global user.email robin8a@example.com
git remote add origin https://github.com/robin8a/dashboardWorld.git

# Make Git store the username and password and it will never ask for them.
git config --global credential.helper store


# Renaming git commands

git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.pu push

```

# Installing angular-material, highcharts, flex-layout

```sh
ng add @angular/material

# result
Installing packages for tooling via npm.
Installed packages for tooling via npm.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes


npm i highcharts-angular --save
npm i highcharts --save
npm i @angular/flex-layout @angular/cdk --save

```

# Adding modules default and layout

```sh
ng g c layouts/default
ng g m layouts/default

ng g c modules/dashboard

```

# Adding components (header, footer, sidebar) and module (shared)
```sh
ng g c shared/components/header
ng g c shared/components/footer
ng g c shared/components/sidebar
ng g module shared

```
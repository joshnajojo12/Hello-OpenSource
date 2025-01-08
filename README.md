
# Hello-OpenSource

Welcome! This project is designed to help beginners learn how to make their first contribution to an open-source project. No prior experience is necessary—just follow the steps below, and you'll be on your way to successfully contributing to the open-source community.

---

## Introduction

Contributing to open-source projects is a great way to learn, teach, and build experience. This guide will take you step-by-step through the process of making your first contribution. Even if you’ve never used Git or GitHub before, you’ll find everything you need here.

---

## Prerequisites

Before you start, ensure you have the following:

- **A GitHub account**: If you don’t have one, [sign up here](https://github.com/).
- **Git installed on your computer**: Download it from [git-scm.com](https://git-scm.com/). If you’re unsure how to install Git, [follow this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- **A text editor or IDE**: Examples include [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or [Atom](https://atom.io/).

---

## Step 1 - Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Step 2 - Clone the forked repository

Now clone the forked repository to your machine:

- Using HTTPS

```sh
git clone "https://GitHub.com/<your-username>/Hello-OpenSource.git"
```

- Using SSH

```sh
git clone "git@GitHub.com:<your-username>/Hello-OpenSource.git"
```

**Note**: Replace <yout-username> with your GitHub username.

## Step 3 - Create a branch

Change the current working directory to the cloned repo.
For example:

```sh
cd Hello-OpenSource
```

Now create a new branch with the below naming convention:

```sh
git switch -c add-your-name
```

For example:

```sh
git switch -c add-alvin-dennis
```
## Step 4 - Make changes and commit

- Edit the `contributors.json` file in the project directory to include your information.

```sh
[
......
  {
  # info of previous user
  },
  {
      "name": "Alvin Dennis",
      "department": "Electrical and Electronics",
      "github": "https://github.com/alvin-dennis",
      "linkedin": "https://in.linkedin.com/in/alvin-dennis-0a70ba163",
      "description": "Frontend Web Developer, Bot Developer, UI/UX Designer, Tester"
}

]
```
**NOTE:** 
> make sure to add your info at the end of the file, after the last user's data. Not in the middle or the top of the file.

Now if you go to the project directory and enter the command `git status`, you can see the changes.

Add those changes with the `git add` command:
```sh
git add -A
```

Now commit those changes using the `git commit` command:

```sh
git commit -m "Add <your-name> to contributors list"
```

For example:

```sh
git commit -m "Add Alvin Dennis to contributors list"
```
## Step 5 - Push the changes to GitHub

Push your changes to GitHub using the `git push` command:

```sh
git push -u origin <your-branch-name>
```

For example:

```sh
git push -u origin add-alvin-dennis
```

> If you enabled two-factor authentication in your GitHub account you won't be able to push via HTTPS using your accounts password. Instead you need to generate a personal access token. This can be done in the application settings of your GitHub account. Using this token as your password should allow you to push to your remote repository via HTTPS. Use your username as usual.

[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Step 6 - Submit your changes for review

If you go to your repository page on GitHub you will see a `compare & pull request` button. Click that button.
And submit the pull request.
Soon the reviewer will merge the branch into `main`.

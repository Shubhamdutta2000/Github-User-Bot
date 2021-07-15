# Github Bot

> With this project user can login to github, create a new repository and clone other's repository by providing all credentials.

## How to use

- Add these environment variables to .env file

  - **GITHUB_USERNAME** : Your github username (for login)
  - **GITHUB_PASSWORD** : Your github password (for login)
  - **REPO_NAME** : Repository name (for creating new repository)
  - **REPO_DESCRIPTION** : Repository description (for creating new repository)
  - **REPO_VISIBILITY** : Repository visibility (for creating new repository)
  - **REPO_USERNAME_FOR_CLONE** : Username who created the repository (for cloning)
  - **REPO_NAME_FOR_CLONE** : Name of the repository (for cloning)

- ### Github Login
  - Login github with your GITHUB_USERNAME and GITHUB_PASSWORD credentials
  - Get screenshot of Home page of github after login

```
    npm run github-login
```

- ### Create Repository
  - Create a new repository by giving some repository name, description and set your repository visibility to 'public' or 'private'
  - Get screenshot of newly created repository

```
    npm run create-repo
```

- ### Clone Repository
  - Clone any repository by providing repository name with its username for cloning
  - Get the repository clone link with proper command
  - Get screenshot of cloned repository

```
    npm run clone-repo
```

## Tech Stack

    - nodejs
    - puppeteer

# GitHub Actions Workflows

This directory contains GitHub Actions workflow configurations for continuous integration and deployment.

## Available Workflows

### PR Checks (`pr-checks.yml`)

This workflow runs on pull requests to the `main` or `master` branch and performs basic checks:

- Installs dependencies
- Runs linting
- Builds the project
- Caches build artifacts for faster subsequent runs

## Setting Up

No additional setup is required. These workflows will automatically run when:
- A pull request is opened, synchronized, or reopened targeting the `main` or `master` branch
- Code is pushed directly to the `main` or `master` branch

## Customizing

To customize these workflows:

1. Edit the respective YAML files in this directory
2. Commit and push your changes
3. The updated workflows will be used for subsequent events

## Troubleshooting

If a workflow fails:

1. Check the GitHub Actions tab in your repository
2. Click on the failed workflow run
3. Examine the logs for the specific job that failed
4. Make necessary code changes and push again to trigger a new run 